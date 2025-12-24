'use client';

import { useState } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '3czvRVWbDzk';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&iv_load_policy=3&playsinline=1&disablekb=1`}
          title="Street Accelerate Program Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group"
      onClick={handlePlay}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      
      {/* Custom Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-200 shadow-lg">
          <svg
            className="w-10 h-10 text-black ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

