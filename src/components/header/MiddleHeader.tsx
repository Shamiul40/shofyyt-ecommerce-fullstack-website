
import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.webp";
import Container from "./Container";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import HeaderIcons from "./HeaderIcons";
import MobileMenu from "./MobileMenu";

export default function MiddleHeader() {
  return (
    <div className="border-b border-gray-400">
      <Container className="flex min-h-12 items-center justify-between gap-3 py-3 md:gap-6 lg:gap-10">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} width={100} alt="logo" priority />
        </Link>

        {/* Search Input */}
        <div className="hidden min-w-0 flex-1 md:block">
          <SearchInput />
        </div>

        {/* User Login */}
        <Link
          href="/signin"
          className="hidden shrink-0 items-center gap-3 text-sm sm:flex"
        >
          <div className="rounded-full border p-2">
            <LuUserRound />
          </div>

          <div>
            <p className="text-gray-500">Hi Guest</p>
            <p className="font-medium">Login / Register</p>
          </div>
        </Link>

        {/* Wishlist & Cart */}
        <div className="shrink-0 hidden md:inline-flex">
          <HeaderIcons />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </Container>
    </div>
  );
}

