import React from 'react';
import { cn } from '@/lib/utils';

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'size-2.5 bg-white-3 cursor-pointer transition-all duration-500 rounded-full',
        {
          'bg-white-1': selected
        }
      )}
    />
  );
};
