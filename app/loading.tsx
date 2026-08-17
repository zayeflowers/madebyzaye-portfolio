import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white gutter">
      <div className="flex items-center gap-3">
        <span className="dot" />
        <span className="micro-label">Loading</span>
      </div>
    </div>
  );
}
