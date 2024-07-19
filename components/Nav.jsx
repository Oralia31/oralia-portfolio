"use client";

import { LINKS, links } from "@/Global/Constants";
import Link from "next/link";
import Scrollspy from "react-scrollspy";

const Nav = () => {
  return (
    <nav className="flex gap-8">
      <Scrollspy
        items={LINKS.map((link) => link.id.replace("#", ""))}
        currentClassName="text-accent border-b-2 border-accent"
        className="flex gap-8"
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
  );
};

export default Nav;
