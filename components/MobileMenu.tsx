"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ChevronDown, Menu } from "lucide-react";

const Sheet = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet), {
  ssr: false,
});
const SheetContent = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent));
const SheetDescription = dynamic(() =>
  import("@/components/ui/sheet").then((mod) => mod.SheetDescription)
);
const SheetTrigger = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger));

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger aria-label="Open navigation menu">
          <Menu className="size-7 text-[#151515]" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[75%] bg-white/95 p-6 backdrop-blur-md"
          onEscapeKeyDown={closeMenu}
        >
          <SheetDescription className="space-y-8">
            <nav
              aria-label="Mobile navigation"
              className="mt-10 flex flex-col gap-6"
            >
              {/* Features */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("features")}
                  aria-expanded={openMenu === "features"}
                  aria-controls="features-menu"
                  className="flex w-full items-center justify-between px-2 py-3 text-sm font-medium text-[#686868] hover:text-[#151515]"
                >
                  Features
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      openMenu === "features" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id="features-menu"
                  role="menu"
                  className={`overflow-hidden transition-all duration-300 ${
                    openMenu === "features" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 flex flex-col gap-4 rounded-md bg-white p-6 shadow-md">
                    {[
                      { href: "/features/todo-list", icon: "/icon-todo.svg", label: "Todo List" },
                      { href: "/features/calendar", icon: "/icon-calendar.svg", label: "Calendar" },
                      {
                        href: "/features/reminders",
                        icon: "/icon-reminders.svg",
                        label: "Reminders",
                      },
                      { href: "/features/planning", icon: "/icon-planning.svg", label: "Planning" },
                    ].map(({ href, icon, label }) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        aria-label={`Go to ${label}`}
                        onClick={closeMenu}
                        className="flex items-center gap-2 text-sm font-medium text-[#686868] hover:text-[#151515]"
                      >
                        <Image
                          src={icon}
                          alt={`${label} icon`}
                          width={16}
                          height={16}
                          loading="lazy"
                          decoding="async"
                        />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("company")}
                  aria-expanded={openMenu === "company"}
                  aria-controls="company-menu"
                  className="flex w-full items-center justify-between px-2 py-3 text-sm font-medium text-[#686868] hover:text-[#151515]"
                >
                  Company
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      openMenu === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id="company-menu"
                  role="menu"
                  className={`overflow-hidden transition-all duration-300 ${
                    openMenu === "company" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 flex flex-col gap-4 rounded-md bg-white p-6 shadow-md">
                    {["History", "Our Team", "Blog"].map((item) => (
                      <Link
                        key={item}
                        href={`/company/${item.toLowerCase().replace(" ", "-")}`}
                        role="menuitem"
                        onClick={closeMenu}
                        className="text-sm font-medium text-[#686868] hover:text-[#151515]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <Link
                href="/careers"
                onClick={closeMenu}
                className="px-2 py-3 text-sm font-medium text-[#686868] hover:text-[#151515]"
              >
                Careers
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-2 py-3 text-sm font-medium text-[#686868] hover:text-[#151515]"
              >
                About
              </Link>
            </nav>

            <div className="flex flex-col items-center justify-center gap-6">
              <Link
                href="/login"
                onClick={closeMenu}
                className="text-sm font-medium text-[#686868] hover:text-[#151515]"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMenu}
                className="rounded-md border border-[#686868] px-6 py-2 text-sm font-medium text-[#686868] hover:border-[#222] hover:text-[#222]"
              >
                Register
              </Link>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
