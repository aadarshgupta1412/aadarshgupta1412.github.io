import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {/* TODO: Replace Your Name */}
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 