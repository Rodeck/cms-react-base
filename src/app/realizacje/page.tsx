"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "budowa", label: "Budowa" },
  { id: "remont", label: "Remonty" },
  { id: "wykonczenie", label: "Wykończenia" },
];

const projects = [
  {
    id: 1,
    title: "Dom jednorodzinny w Warszawie",
    category: "budowa",
    area: "180 m²",
    year: "2024",
    description:
      "Nowoczesny dom jednorodzinny z energooszczędnymi rozwiązaniami. Duże przeszklenia i otwarta przestrzeń dzienna.",
  },
  {
    id: 2,
    title: "Remont kamienicy na Starym Mieście",
    category: "remont",
    area: "320 m²",
    year: "2024",
    description:
      "Kompleksowy remont zabytkowej kamienicy z zachowaniem oryginalnych detali architektonicznych.",
  },
  {
    id: 3,
    title: "Nowoczesna willa podmiejska",
    category: "budowa",
    area: "250 m²",
    year: "2023",
    description:
      "Luksusowa willa z basenem i ogrodem zimowym. Najwyższy standard wykończenia.",
  },
  {
    id: 4,
    title: "Apartament w centrum miasta",
    category: "wykonczenie",
    area: "95 m²",
    year: "2023",
    description:
      "Eleganckie wykończenie apartamentu w stylu minimalistycznym. Wysokiej jakości materiały.",
  },
  {
    id: 5,
    title: "Dom bliźniak na przedmieściach",
    category: "budowa",
    area: "140 m²",
    year: "2023",
    description:
      "Funkcjonalny dom bliźniak z garażem dwustanowiskowym i tarasem na dachu.",
  },
  {
    id: 6,
    title: "Remont mieszkania z lat 70.",
    category: "remont",
    area: "62 m²",
    year: "2023",
    description:
      "Gruntowny remont z wymianą instalacji i nowym układem funkcjonalnym.",
  },
  {
    id: 7,
    title: "Wykończenie loftu",
    category: "wykonczenie",
    area: "120 m²",
    year: "2022",
    description:
      "Industrialne wykończenie loftu w dawnej fabryce. Cegła, stal i beton.",
  },
  {
    id: 8,
    title: "Dom pasywny",
    category: "budowa",
    area: "160 m²",
    year: "2022",
    description:
      "Energooszczędny dom pasywny z rekuperacją i pompą ciepła.",
  },
  {
    id: 9,
    title: "Modernizacja domu z lat 90.",
    category: "remont",
    area: "200 m²",
    year: "2022",
    description:
      "Kompleksowa modernizacja wraz z dociepleniem i wymianą dachu.",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-200 placeholder-image relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full shadow-sm">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
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
                      {project.area}
                    </span>
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
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </article>
            ))}
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
            href="/kontakt"
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
    </>
  );
}
