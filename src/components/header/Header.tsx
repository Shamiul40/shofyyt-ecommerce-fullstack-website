import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";

export default function Header() {
  return (
    <div>
      <TopHeader></TopHeader>
      <MiddleHeader></MiddleHeader>
      <header>bottom header</header>
    </div>
  );
}
