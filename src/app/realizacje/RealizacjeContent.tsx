"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Realizacja, ProjectType } from "@/sanity/types/realizacja";
import { projectTypeTranslations } from "@/sanity/types/realizacja";

const categories: { id: "all" | ProjectType; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  { id: "budowa", label: "Budowa" },
  { id: "remont", label: "Remonty" },
  { id: "wykonczenia", label: "Wykończenia" },
];

interface RealizacjeContentProps {
  realizacje: Realizacja[];
}

interface ModalState {
  isOpen: boolean;
  project: Realizacja | null;
  currentIndex: number;
}

export function RealizacjeContent({ realizacje }: RealizacjeContentProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectType>("all");
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    project: null,
    currentIndex: 0,
  });

  const filteredProjects =
    activeCategory === "all"
      ? realizacje
      : realizacje.filter((project) => project.projectType === activeCategory);

  const openModal = (project: Realizacja) => {
    setModal({ isOpen: true, project, currentIndex: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal({ isOpen: false, project: null, currentIndex: 0 });
    document.body.style.overflow = "unset";
  };

  const goToPrevious = useCallback(() => {
    if (!modal.project) return;
    setModal((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0
          ? prev.project!.images.length - 1
          : prev.currentIndex - 1,
    }));
  }, [modal.project]);

  const goToNext = useCallback(() => {
    if (!modal.project) return;
    setModal((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === prev.project!.images.length - 1
          ? 0
          : prev.currentIndex + 1,
    }));
  }, [modal.project]);

  const goToSlide = (index: number) => {
    setModal((prev) => ({ ...prev, currentIndex: index }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modal.isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modal.isOpen, goToPrevious, goToNext]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Nasze realizacje
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz nasze najlepsze projekty. Każda realizacja to efekt
            starannego planowania i profesjonalnego wykonania.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const firstImage = project.images?.[0];
              const imageCount = project.images?.length || 0;

              return (
                <article
                  key={project._id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    {firstImage ? (
                      <Image
                        src={urlFor(firstImage).width(600).height(450).url()}
                        alt={firstImage.alt || project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full shadow-sm">
                        {projectTypeTranslations[project.projectType]}
                      </span>
                    </div>
                    {imageCount > 1 && (
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {imageCount}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      {project.squareMeters && (
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                          {project.squareMeters} m²
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Brak projektów w tej kategorii.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                200+
              </div>
              <div className="text-gray-600">Projektów</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                15+
              </div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                100%
              </div>
              <div className="text-gray-600">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                50+
              </div>
              <div className="text-gray-600">Domów na sprzedaż</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zainspirowany naszymi realizacjami?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić Twój projekt. Chętnie pomożemy
            stworzyć coś wyjątkowego.
          </p>
          <a
            href="/kontakt?service=Wycena%20prac&message=Dzie%C5%84%20dobry%2C%20prosz%C4%99%20o%20wycen%C4%99%20i%20om%C3%B3wienie%20mojego%20projektu."
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Rozpocznij projekt
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Modal with Carousel */}
      {modal.isOpen && modal.project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Zamknij"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Project Info */}
            <div className="text-white mb-4">
              <h2 className="text-2xl font-bold">{modal.project.title}</h2>
              <div className="flex items-center gap-4 text-gray-300 mt-1">
                <span>{projectTypeTranslations[modal.project.projectType]}</span>
                <span>•</span>
                <span>{modal.project.year}</span>
                {modal.project.squareMeters && (
                  <>
                    <span>•</span>
                    <span>{modal.project.squareMeters} m²</span>
                  </>
                )}
              </div>
            </div>

            {/* Carousel */}
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[16/10] bg-gray-900 rounded-xl overflow-hidden relative">
                <Image
                  src={urlFor(modal.project.images[modal.currentIndex])
                    .width(1200)
                    .height(750)
                    .url()}
                  alt={
                    modal.project.images[modal.currentIndex].alt ||
                    `${modal.project.title} - zdjęcie ${modal.currentIndex + 1}`
                  }
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              {modal.project.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Poprzednie zdjęcie"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Następne zdjęcie"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
                {modal.currentIndex + 1} / {modal.project.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {modal.project.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
                {modal.project.images.map((image, index) => (
                  <button
                    key={image._key}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === modal.currentIndex
                        ? "border-white opacity-100"
                        : "border-transparent opacity-50 hover:opacity-75"
                    }`}
                  >
                    <Image
                      src={urlFor(image).width(80).height(80).url()}
                      alt={image.alt || `Miniatura ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300 mt-4 text-center max-w-3xl mx-auto">
              {modal.project.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
