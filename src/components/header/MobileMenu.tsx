"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { navLinks } from "../constants";
import { socialLinks } from "./SocialLinks";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center text-2xl text-gray-700 hover:text-blue-600"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute right-0 top-full z-50 mt-4 flex w-56 flex-col rounded-md border border-gray-200 bg-white px-4 py-3 shadow-lg">
          {[...navLinks, { name: "Login", href: "/signin" }].map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setIsMenuOpen(false)}
              className={`py-3 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Hotline */}
          {/* <div className="flex items-center gap-2 border-t border-gray-100 py-3 text-sm text-gray-600">
            <FiPhone className="shrink-0 text-blue-600" />

            <a href="tel:+880123456789" className="hover:text-blue-600">
              +88 0123456789
            </a>
          </div> */}
          {/* social links */}
          <div className="flex gap-4 border-t border-gray-200 py-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-lg text-gray-600 hover:text-blue-600"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
