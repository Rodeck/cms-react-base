"use client";

export default function PromoVideo() {
  return (
    <video
      controls
      preload="metadata"
      className="w-full h-full object-cover"
      onPlay={(e) => {
        const video = e.currentTarget;
        if (!video.dataset.started) {
          video.dataset.started = "true";
          video.currentTime = 0;
        }
      }}
    >
      <source src="/promo_video.mp4#t=2" type="video/mp4" />
    </video>
  );
}
