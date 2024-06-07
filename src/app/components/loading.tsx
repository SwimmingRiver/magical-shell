import React from 'react';
import Image from 'next/image';

function Loading() {
  return (
    <div style={{ backgroundColor: '#a56bdb' }}>
      <Image src="/images/sea-snail.png" alt="logo" width={500} height={500} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>magical shell</p>
      </div>
    </div>
  );
}

export default Loading;
