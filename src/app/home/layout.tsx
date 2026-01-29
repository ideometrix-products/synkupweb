import { ReactNode } from 'react';

import Footer from '@/components/landingPage/footer/footer';
import Header from '@/components/landingPage/header/Header';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
