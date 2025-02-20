import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import ConvexClerkProvider from '../providers/ConvexClerkProvider';
import AudioProvider from '@/providers/AudioProvider';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PodcastAi',
  description: 'AI generated podcasts',
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>
            {children}
            <ToastContainer />
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
