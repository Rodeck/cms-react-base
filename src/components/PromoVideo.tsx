"use client";

export default function PromoVideo() {
  return (
    <iframe
      src="https://www.youtube.com/embed/VIDEO_ID_HERE"
      title="Film promocyjny"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  );
}
