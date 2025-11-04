"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ChevronDown, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 text-[#151515]" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[75%] bg-white/95 p-6 backdrop-blur-md"
        >
          <SheetDescription className="space-y-8">
            <nav className="mt-10 flex flex-col gap-6">
              {/* Features */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("features")}
                  className="flex w-full items-center justify-between text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all hover:text-[#151515]"
                >
                  Features
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      openMenu === "features" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenu === "features" && (
                  <div className="absolute top-full left-0 z-50 mt-2 flex w-[200px] flex-col gap-4 rounded-md bg-white p-6 shadow-lg">
                    <Link
                      href="/features/todo-list"
                      className="flex items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      <Image
                        src="/icon-todo.svg"
                        alt="Todo List"
                        width={14}
                        height={16}
                      />
                      Todo List
                    </Link>
                    <Link
                      href="/features/calendar"
                      className="flex items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      <Image
                        src="/icon-calendar.svg"
                        alt="Calendar"
                        width={16}
                        height={16}
                      />
                      Calendar
                    </Link>
                    <Link
                      href="/features/reminders"
                      className="flex items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      <Image
                        src="/icon-reminders.svg"
                        alt="Reminders"
                        width={13}
                        height={17}
                      />
                      Reminders
                    </Link>
                    <Link
                      href="/features/planning"
                      className="flex items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      <Image
                        src="/icon-planning.svg"
                        alt="Planning"
                        width={16}
                        height={16}
                      />
                      Planning
                    </Link>
                  </div>
                )}
              </div>

              {/* Company */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("company")}
                  className="flex w-full items-center justify-between text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all hover:text-[#151515]"
                >
                  Company
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      openMenu === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenu === "company" && (
                  <div className="absolute top-full left-0 z-50 mt-2 flex w-[200px] flex-col gap-4 rounded-md bg-white p-6 shadow-lg">
                    <Link
                      href="/company/history"
                      className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      History
                    </Link>
                    <Link
                      href="/company/our-team"
                      className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/company/blog"
                      className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <Link
                href="/careers"
                className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
              >
                Careers
              </Link>
              <Link
                href="/about"
                className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] hover:text-[#151515]"
              >
                About
              </Link>
            </nav>
            <div className="flex flex-col items-center justify-center gap-6">
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
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
