import React from "react";
import logo from "../assets/voyaz.png";

const Nav = () => {
  const links = [
    "Home",
    "About",
    "Tours Packages",
    "Attractions and Experiences",
    "Destination",
    "Blogs",
    "Contact",
  ];
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50"
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <div
          className="flex items-center justify-between text-white px-6"
          style={{ maxWidth: "1400px", margin: "0 auto", height: 80 }}
        >
          <div className="flex items-center">
            <img src={logo} alt="Voyaz Travel" className="h-10 md:h-12" />
          </div>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex gap-8 text-[18px]">
              {links.map((text) => (
                <li key={text} className="list-none">
                  <a href="#" className="hover:underline">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
