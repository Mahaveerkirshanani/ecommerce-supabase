import React from "react";
import Header from "../Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
