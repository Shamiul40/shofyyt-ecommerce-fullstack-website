import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.webp";
import Container from "./Container";
import SearchInput from "./SearchInput";

export default function MiddleHeader() {
  return (
    <div className="border-b-[1px] border-b-gray-400 h-12 ">
      <Container className="flex items-center justify-between gap-6 my-4 md:gap-20">
        <div>
            <Image src={logo} width={100} alt="logo" />
        </div>
        <div className="flex-1 hidden md:inline-flex">
        <SearchInput></SearchInput>
        </div>

        <div>
        navigationbar
        </div>
      </Container>
    </div>
  );
}
