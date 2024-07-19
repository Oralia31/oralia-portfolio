"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { LINKS } from "@/Global/Constants";
import Scrollspy from "react-scrollspy";

const MobileNav = () => {

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-description="nav mobile" aria-describedby="nav">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-12 mb-10 text-center text-2xl">
          <Link href="#home">
            <h1 className="text-4xl font-semibold">
              Oralia <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
        <Scrollspy
        items={LINKS.map((link) => link.id.replace("#", ""))}
        currentClassName="text-accent border-b-2 border-accent"
        className="flex flex-col text-center gap-6"
        offset={-100}
      >
        {LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.id}
              key={index}
              className="capitalize font-medium hover:text-accent transition-all"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </Scrollspy>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
