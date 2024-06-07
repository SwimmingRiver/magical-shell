'use client';

import { useEffect, useState } from 'react';
import Loading from './components/loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ? <Loading /> : <div>hi</div>;
}
