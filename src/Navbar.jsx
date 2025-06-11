import React, { useState } from "react";
import logo from "./images/Link.png";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "#" },
  { name: "Events", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navbar w-full shadow-soft fixed top-0 left-0 z-50 border-b border-secondary font-heading animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full object-cover shadow-soft" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.name === "About us" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ) : link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navbar px-4 pb-4 shadow-soft">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              link.name === "About us" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors duration-200 px-2 py-1 rounded font-heading"
                  aria-current={link.name === "Home" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 