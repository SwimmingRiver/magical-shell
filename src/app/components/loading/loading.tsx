import React from 'react';
import Image from 'next/image';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <Fireworks autorun={{ speed: 1 }} />
      <Image src="/images/sea-snail.png" alt="logo" width={200} height={200} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p className={styles.loadingTitle}>MAGICAL SHELL</p>
      </div>
    </div>
  );
}

export default Loading;
