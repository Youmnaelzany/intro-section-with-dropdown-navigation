"use client";

import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className="flex w-full items-center justify-between px-6 py-6 md:px-10 lg:px-16 lg:py-8"
      role="banner"
    >
      {/* Logo + Navigation */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="rounded-sm focus-visible:ring-2 focus-visible:ring-[#151515] focus-visible:outline-none"
        >
          <Image
            src="/logo.svg"
            alt="Snap logo"
            width={84}
            height={27}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden lg:block"
        >
          <Navigation />
        </nav>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden items-center gap-6 lg:flex">
        <Link
          href="/login"
          className="rounded-sm text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-colors duration-300 ease-in-out hover:text-[#151515] focus-visible:ring-2 focus-visible:ring-[#151515] focus-visible:outline-none"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="rounded-md border border-[#686868] px-6 py-2 text-sm font-medium text-[#686868] transition-colors duration-300 ease-in-out hover:border-[#151515] hover:text-[#151515] focus-visible:ring-2 focus-visible:ring-[#151515] focus-visible:outline-none"
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
