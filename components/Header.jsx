import Link from "next/link";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 py-8 text-white nav-glass">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="#home">
          <h1 className="text-4xl font-semibold">
            Oralia<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contactame">
            <Button>Contratame</Button>
          </Link>*/}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
