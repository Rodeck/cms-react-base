"use client";

import { useState } from "react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
import type { ListingVideo } from "@/sanity/types/listing";

type GalleryItem =
  | { type: "image"; source: SanityImageSource }
  | { type: "video"; url: string; title?: string }
  | { type: "youtube"; embedUrl: string; title?: string };

function getYouTubeEmbedUrl(url: string): string {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split(/[?&#]/)[0] || "";
  } else if (url.includes("youtube.com/watch")) {
    videoId = new URL(url).searchParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1]?.split(/[?&#]/)[0] || "";
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

function getYouTubeThumbnail(url: string): string {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split(/[?&#]/)[0] || "";
  } else if (url.includes("youtube.com/watch")) {
    videoId = new URL(url).searchParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1]?.split(/[?&#]/)[0] || "";
  }
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

interface ImageGalleryProps {
  mainImage?: SanityImageSource;
  gallery?: SanityImageSource[];
  videos?: ListingVideo[];
  title: string;
}

export default function ImageGallery({
  mainImage,
  gallery,
  videos,
  title,
}: ImageGalleryProps) {
  const videoItems: GalleryItem[] = (videos || [])
    .filter((v) => v.url || v.youtubeUrl)
    .map((v): GalleryItem => {
      if (v.youtubeUrl) {
        return {
          type: "youtube" as const,
          embedUrl: getYouTubeEmbedUrl(v.youtubeUrl),
          title: v.title,
        };
      }
      return {
        type: "video" as const,
        url: v.url!,
        title: v.title,
      };
    });
  const galleryImages: GalleryItem[] = (gallery || []).map((img) => ({
    type: "image" as const,
    source: img,
  }));

  const items: GalleryItem[] = [
    ...(mainImage ? [{ type: "image" as const, source: mainImage }] : []),
    ...videoItems,
    ...galleryImages,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (items.length === 0) {
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

  const current = items[selectedIndex];

  return (
    <>
      <div className="space-y-4 overflow-hidden">
        {/* Main Display */}
        <div
          className="bg-gray-200 rounded-2xl overflow-hidden cursor-pointer relative group"
          onClick={() => current.type === "image" && setIsLightboxOpen(true)}
          role={current.type === "image" ? "button" : undefined}
        >
          {current.type === "image" ? (
            <>
              <img
                src={urlFor(current.source).width(1200).url()}
                alt={`${title} - Zdjęcie ${selectedIndex + 1}`}
                className="w-full max-w-full rounded-2xl"
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
            </>
          ) : current.type === "youtube" ? (
            <div className="aspect-video">
              <iframe
                src={current.embedUrl}
                title={current.title || "Film YouTube"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          ) : (
            <video
              src={current.url}
              controls
              className="w-full max-w-full rounded-2xl"
              playsInline
            >
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>
          )}
          {items.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {items.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {items.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all relative ${
                  selectedIndex === index
                    ? "ring-2 ring-black ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.type === "image" ? (
                  <img
                    src={urlFor(item.source).width(200).height(200).url()}
                    alt={`${title} - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : item.type === "youtube" ? (
                  <div className="w-full h-full relative">
                    <img
                      src={getYouTubeThumbnail(item.embedUrl)}
                      alt={item.title || "Film YouTube"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-8 h-8 text-red-600 drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <video
                      src={`${item.url}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-8 h-8 text-white drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox (images only) */}
      {isLightboxOpen && (current.type === "image" || current.type === "youtube") && (
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
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev === 0 ? items.length - 1 : prev - 1
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
                    prev === items.length - 1 ? 0 : prev + 1
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

          {/* Lightbox Content */}
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {items[selectedIndex].type === "image" ? (
              <img
                src={urlFor((items[selectedIndex] as { type: "image"; source: SanityImageSource }).source).width(1920).url()}
                alt={`${title} - Zdjęcie ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : items[selectedIndex].type === "youtube" ? (
              <div className="w-[80vw] max-w-[1280px] aspect-video">
                <iframe
                  src={(items[selectedIndex] as { type: "youtube"; embedUrl: string }).embedUrl + "?autoplay=1"}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              </div>
            ) : (
              <video
                src={(items[selectedIndex] as { type: "video"; url: string }).url}
                controls
                autoPlay
                className="max-w-full max-h-[90vh]"
                playsInline
              >
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            )}
          </div>

          {/* Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
