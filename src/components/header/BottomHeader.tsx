
"use client";

import React, { useState } from "react";
import { navLinks } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Container from "./Container";

export default function BottomHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="relative border-b border-gray-200">
      <Container className="flex min-h-12 items-center justify-between">

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {[...navLinks, { name: "Login", href: "/signin" }].map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hotline */}
        <div className="hidden items-center gap-2 text-sm text-gray-600 md:flex">
          <FiPhone className="text-blue-600" />
          <p>
            <span className="font-medium">Hotline:</span>{" "}
            <a href="tel:+880123456789" className="hover:text-blue-600">
              +88 0123456789
            </a>
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="text-sm font-semibold text-gray-800">
            Navigation
          </span>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute left-0 top-full z-50 flex w-full flex-col border-b border-gray-200 bg-white px-4 py-3 shadow-md md:hidden">
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

          <div className="flex items-center gap-2 border-t border-gray-100 py-3 text-sm text-gray-600">
            <FiPhone className="text-blue-600" />
            <span>Hotline:</span>
            <a href="tel:+880123456789" className="hover:text-blue-600">
              +88 0123456789
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
