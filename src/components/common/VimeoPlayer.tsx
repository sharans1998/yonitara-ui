'use client';

import React, { Suspense } from 'react';

const VimeoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1046228216?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title="Yoni Natal Sutra"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Suspense>
  );
};

export default VimeoPlayer;
