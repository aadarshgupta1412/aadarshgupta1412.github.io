import React from 'react';
import Header from './Header'; // Assuming Header is in the same directory
// import Footer from './Footer'; // TODO: Uncomment when Footer exists

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout; 