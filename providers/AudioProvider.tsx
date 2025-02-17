'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AudioContext } from '@/providers/AudioContex';
import { AudioProps } from '@/types';

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [audio, setAudio] = useState<AudioProps | undefined>();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/create-podcast') setAudio(undefined);
  }, [pathname]);

  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
