'use client';

import { useEffect, useState } from 'react';
import Loading from './components/loading/loading';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.mainWrapper}>
      {isLoading ? <Loading /> : <div>hi</div>}
    </div>
  );
}
