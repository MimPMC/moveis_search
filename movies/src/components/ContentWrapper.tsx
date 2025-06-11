// src/components/layout/ContentWrapper.tsx
import type { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ContentWrapper({
  children,
  className = "",
}: ContentWrapperProps) {
  return (
    <div className={`w-full px-4 md:px-10 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
