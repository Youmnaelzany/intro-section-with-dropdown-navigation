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

const Navigation = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="flex">
        {/* Features */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/todo-list"
                    className="flex-row items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    <Image
                      src="/icon-todo.svg"
                      alt="Todo List"
                      width={14}
                      height={16}
                    />
                    Todo List
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/calendar"
                    className="flex-row items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    <Image
                      src="/icon-calendar.svg"
                      alt="Calendar"
                      width={16}
                      height={16}
                    />
                    Calendar
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/reminders"
                    className="flex-row items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    <Image
                      src="/icon-reminders.svg"
                      alt="Reminders"
                      width={13}
                      height={17}
                    />
                    Reminders
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/planning"
                    className="flex-row items-center gap-2 text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    <Image
                      src="/icon-planning.svg"
                      alt="Planning"
                      width={16}
                      height={16}
                    />
                    Planning
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/history"
                    className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    History
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/our-team"
                    className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    Our Team
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/blog"
                    className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Careers */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/careers"
              className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
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
              className="text-sm leading-[115%] font-medium tracking-normal text-[#686868] transition-all duration-300 ease-in-out hover:text-[#151515]"
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navigation;
