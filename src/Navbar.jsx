import React from "react";
import { Link } from "react-router-dom";

const Navbar = React.memo(() => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Achievements", path: "/achievements" },
    { name: "Services", path: "/Service" },
    { name: "Get in Touch", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-md bg-neutral-900 py-8 px-12">
      {/* Logo */}
      <div className="text-4xl font-bold bg-gradient-to-r from-[#7cade6] via-[#73d1c9] to-[#649cc1] bg-clip-text text-transparent">
        SkyAstrall
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-white text-lg font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#73b1f7] hover:to-[#a981f9] hover:text-black"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});

export default Navbar;
