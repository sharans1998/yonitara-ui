'use client';

import React, { Suspense } from 'react';

const VimeoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <video className="my-4 h-auto w-full" controls preload="none">
        <source src="/path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
};

export default VimeoPlayer;
