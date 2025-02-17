import { createContext } from 'react';
import { AudioContextType } from '@/types';

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
);
