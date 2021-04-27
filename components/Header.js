import Image from "next/Image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="">
      <div className="">
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
      <Image src="/images/hulusony.png" width={200} height={100} />
    </header>
  );
}

export default Header;
