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
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
