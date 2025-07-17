"use client";

import * as React from "react";
import { Bell, ChevronDown, User, Wallet } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginSheet } from "../app/LoginSheet";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 bg-dark backdrop-blur-lg border-b justify-center flex">
      <div className="w-full container">
        <div className="flex items-center justify-between h-16 md:px-10 ">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center space-x-6 text-accent">
            {[
              "Home",
              "Dashboard",
              "Smile",
              "Wallet",
              "About",
              "Services",
              "Contact",
            ].map((item) => {
              const link = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === link;

              return (
                <Link
                  key={item}
                  href={link}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive ? "text-violet-400" : "text-accent-foreground"
                  } hover:text-violet-400`}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full bg-violet-600" : "w-0 bg-gray-500"
                    } hover:w-full`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 ">
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>
            <ModeToggle />

            {/* Wallet Button */}
            <Button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-8 px-4 ">
              <Wallet className="mr-2" />
              $150 USDT
            </Button>

            {/* Profile Avatar */}
            <div className="flex items-center gap-1 cursor-pointer">
              <Avatar className="border border-violet-500">
                <AvatarImage src="https://github.com/shadcn.png" alt="S" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </div>

            {/* <LoginSheet>Login</LoginSheet> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
