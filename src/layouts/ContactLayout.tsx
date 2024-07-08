import React, { ReactNode } from 'react';
import ContactHeader from '../components/ContactHeader';
import Footer from '../components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <ContactHeader />
      {children}
      <Footer />
    </div>
  );
}

