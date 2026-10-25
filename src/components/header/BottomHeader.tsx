
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import { navLinks } from "../constants";
import Container from "./Container";

export default function BottomHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className=" border-b border-gray-400 md:block">
      <Container className="flex min-h-8 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6">
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
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FiPhone className="text-blue-600" />

          <p>
            <span className="font-medium">Hotline:</span>{" "}
            <a href="tel:+880123456789" className="hover:text-blue-600">
              +88 0123456789
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

