import React from 'react';
import Image from 'next/image';
import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <Image src="/images/sea-snail.png" alt="logo" width={500} height={500} />
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
