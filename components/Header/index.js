import Image from "next/image";
import HeaderIcons from "./HeaderIcons";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center mb-2 sm:flex-row h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcons title="home" Icon={HomeIcon} />
        <HeaderIcons title="trending" Icon={LightningBoltIcon} />
        <HeaderIcons title="verified" Icon={BadgeCheckIcon} />
        <HeaderIcons title="collections" Icon={CollectionIcon} />
        <HeaderIcons title="search" Icon={SearchIcon} />
        <HeaderIcons title="account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt=""
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
