
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-gray-50">
      <TopHeader></TopHeader>
      <MiddleHeader></MiddleHeader>
      <BottomHeader></BottomHeader>
    </div>
  );
}
