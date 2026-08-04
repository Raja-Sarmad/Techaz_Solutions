import React from 'react';

const SectionBackdrop = ({
  className = 'absolute inset-0 z-0 pointer-events-none overflow-hidden',
  blobs = ['bg-blue-400/20', 'bg-violet-400/20', 'bg-cyan-400/15'],
  dots = true,
  dotOpacity = 'opacity-30',
}) => {
  const positions = [
    '-top-24 -left-24 w-96 h-96 rounded-full blur-[120px] animate-pulse',
    'top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full blur-[130px]',
    '-bottom-32 left-1/4 w-96 h-96 rounded-full blur-[120px]',
  ];

  return (
    <div className={className} aria-hidden="true">
      {blobs.slice(0, 3).map((blob, i) => (
        <div key={i} className={`absolute ${positions[i]} ${blob}`} />
      ))}
      {dots && (
        <div
          className={`absolute inset-0 ${dotOpacity}`}
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      )}
    </div>
  );
};

export default SectionBackdrop;
