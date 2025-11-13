'use client'

import Topbar from '../layouts/Topbar';
import Footer from '../layouts/Footer';

export default function HomeTemplate({ children }: any) {
  return (
    <div className="flex-1 flex flex-col w-full">
      <Topbar />
        {children}
      <Footer />
    </div>
  );
}
