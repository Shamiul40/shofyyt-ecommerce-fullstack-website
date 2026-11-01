
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";
import { Suspense } from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-gray-50">
      <TopHeader></TopHeader>
      <MiddleHeader></MiddleHeader>
      <Suspense fallback={null}>
        <BottomHeader></BottomHeader>
      </Suspense>
    </div>
  );
}
