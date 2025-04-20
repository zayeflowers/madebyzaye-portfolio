import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f0e9]">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-[#CC0101] mb-4"></div>
        <p className="font-[family-name:var(--font-montserrat)] text-lg">Loading...</p>
      </div>
    </div>
  );
}
