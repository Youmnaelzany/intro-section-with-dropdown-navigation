"use client";

import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";

const Navigation = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) return null;

  return (
    <nav aria-label="Main navigation">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Features */}
          <NavigationMenuItem>
            <NavigationMenuTrigger aria-label="Open Features menu">Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-2">
                {[
                  { href: "/features/todo-list", icon: "/icon-todo.svg", label: "Todo List" },
                  { href: "/features/calendar", icon: "/icon-calendar.svg", label: "Calendar" },
                  { href: "/features/reminders", icon: "/icon-reminders.svg", label: "Reminders" },
                  { href: "/features/planning", icon: "/icon-planning.svg", label: "Planning" },
                ].map(({ href, icon, label }) => (
                  <li key={label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="flex flex-row items-center gap-3 px-2 py-2 text-sm text-[#686868] hover:text-[#151515]"
                        role="menuitem"
                        aria-label={`Go to ${label}`}
                      >
                        <Image
                          src={icon}
                          alt={`${label} icon`}
                          width={16}
                          height={16}
                          loading="lazy"
                        />
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Company */}
          <NavigationMenuItem>
            <NavigationMenuTrigger aria-label="Open Company menu">Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-2">
                {["History", "Our Team", "Blog"].map((item) => (
                  <li key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/company/${item.toLowerCase().replace(" ", "-")}`}
                        className="block px-2 py-2 text-sm text-[#686868] hover:text-[#151515]"
                        role="menuitem"
                      >
                        {item}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Careers */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/careers"
                className="px-2 py-2 text-sm text-[#686868] hover:text-[#151515]"
                aria-label="Go to Careers"
              >
                Careers
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="px-2 py-2 text-sm text-[#686868] hover:text-[#151515]"
                aria-label="Go to About page"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;
