import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMoBileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenu);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientReact().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    isMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 tio-4 z-50">
        {/* desktop */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
