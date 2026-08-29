import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${
        narrow ? 'max-w-[720px]' : 'max-w-[1080px] 2xl:max-w-[1180px]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
