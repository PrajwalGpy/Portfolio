import React from "react";
import Hero from "./components/Hero";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-cover bg-center bg-img">
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default App;
