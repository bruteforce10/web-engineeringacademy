import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-2 items-center px-8 max-w-[1250px] mx-auto">
      <Link href="/">
        <Image
          src="/logo1.webp"
          className="object-fill max-sm:w-20  w-auto "
          alt="logo"
          width={90}
          height={90}
        />
      </Link>
      <Link
        className="underline font-medium tracking-tight text-lg max-sm:hidden"
        href="https://sipilku.vercel.app"
        target="_blank"
      >
        Aplikasi Perhitungan Sipil <span className="font-bold">Free 👇</span>
      </Link>

      <NavigationMenu className="sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>MENU</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="https://sipilku.vercel.app" target="_blank">
                <NavigationMenuLink>
                  {" "}
                  Aplikasi Perhitungan Sipil{" "}
                  <span className="font-bold">
                    Free <span className="max-sm:hidden">👇</span>
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
