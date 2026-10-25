import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.webp";
import Container from "./Container";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import HeaderIcons from "./HeaderIcons";

export default function MiddleHeader() {
  return (
    <div className="border-b-[1px] border-b-gray-400 h-14 ">
      <Container className="flex items-center justify-between gap-6 my-4 md:gap-20">
        <Link href="/">
          <Image src={logo} width={100} alt="logo" />
        </Link>

        <div className="flex-1 hidden md:inline-flex">
          <SearchInput></SearchInput>
        </div>

        <Link
          href="/signin"
          className="flex justify-center items-center gap-4 text-sm"
        >
          <div className="border-[1px] rounded-full p-1">
            <LuUserRound />
          </div>
          <div>
            <p>hi guest</p>
            <p className="font-medium">Login / Register</p>
          </div>
          <div>
            <HeaderIcons></HeaderIcons>
          </div>
        </Link>
      </Container>
    </div>
  );
}
