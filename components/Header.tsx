import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-10 md:px-10 lg:px-16">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Snap"
            width={84}
            height={27}
          />
        </Link>
        <Navigation />
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <Link
          href="/login"
          className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-md border border-[#686868] px-6 py-2 text-sm font-medium text-[#686868] transition-colors duration-300 ease-in-out hover:border-[#222] hover:text-[#222]"
        >
          Register
        </Link>
      </div>
      <MobileMenu />
    </header>
  );
};
export default Header;
