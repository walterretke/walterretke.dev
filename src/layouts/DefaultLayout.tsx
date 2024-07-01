import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

<<<<<<< HEAD
export default function DefaultLayout({ children }) {
    return (
        <div>
            <SpeedInsights />
            <Header />
            {children}
            <Footer />
        </div>
    );
}
=======
interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
>>>>>>> 35d0048d9037eeea3a4bd223291bc489807167b1
