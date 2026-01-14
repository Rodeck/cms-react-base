"use client";

import { useState } from "react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

interface ImageGalleryProps {
  mainImage?: SanityImageSource;
  gallery?: SanityImageSource[];
  title: string;
}

export default function ImageGallery({
  mainImage,
  gallery,
  title,
}: ImageGalleryProps) {
  const allImages = [
    ...(mainImage ? [mainImage] : []),
    ...(gallery || []),
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (allImages.length === 0) {
    return (
      <div className="aspect-[16/10] bg-gray-200 rounded-2xl placeholder-image">
        <svg
          className="w-24 h-24 text-gray-400"
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
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="aspect-[16/10] bg-gray-200 rounded-2xl overflow-hidden cursor-pointer relative group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={urlFor(allImages[selectedIndex]).width(1200).height(750).url()}
            alt={`${title} - Zdjęcie ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
          {allImages.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {allImages.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all ${
                  selectedIndex === index
                    ? "ring-2 ring-black ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={urlFor(image).width(200).height(200).url()}
                  alt={`${title} - Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
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

          {/* Navigation */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev === 0 ? allImages.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Poprzednie zdjęcie"
              >
                <svg
                  className="w-10 h-10"
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
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev === allImages.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Następne zdjęcie"
              >
                <svg
                  className="w-10 h-10"
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

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={urlFor(allImages[selectedIndex]).width(1920).height(1080).url()}
              alt={`${title} - Zdjęcie ${selectedIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Counter */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {allImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
