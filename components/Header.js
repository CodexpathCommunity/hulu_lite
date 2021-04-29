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
  //https://links.papareact.com/ua6
  //images/hulusony.png
  return (
    <header className="">
      <div className="">
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
      <Image
        src="/public/images/hulusony.png"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  );
}

export default Header;
