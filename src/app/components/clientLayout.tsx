'use client';

import { useEffect, useState } from 'react';
import Loading from './loading/loading';
import Header from './header/header';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 로딩 시간 설정

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </main>
  );
}
