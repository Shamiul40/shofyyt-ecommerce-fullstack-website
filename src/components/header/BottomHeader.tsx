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
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative border-b border-gray-200 ">
      <Container className="flex min-h-4 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                href={item.href}
                key={item.name}
                aria-current={active ? "page" : undefined}
                className={`group relative py-3 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}

                {/* Active & Hover Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-blue-600 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Hotline - Desktop */}
        <div className="hidden items-center gap-2 text-sm text-gray-600 md:flex">
          <FiPhone className="text-base text-blue-600" />

          <p>
            <span className="font-medium">Hotline:</span>{" "}
            <a
              href="tel:+880123456789"
              className="transition-colors hover:text-blue-600"
            >
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
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="bottom-header-mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
          >
            {isMenuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="bottom-header-mobile-menu"
        className={`absolute left-0 top-full z-50 w-full border-b border-gray-200 bg-white shadow-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                href={item.href}
                key={item.name}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`border-l-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-transparent text-gray-700 hover:border-blue-400 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile Hotline */}
          <div className="mt-2 flex items-center gap-2 border-t border-gray-100 px-4 py-3 text-sm text-gray-600">
            <FiPhone className="text-blue-600" />

            <span className="font-medium">Hotline:</span>

            <a href="tel:+880123456789" className="hover:text-blue-600">
              +88 0123456789
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
