import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b-2 bg-drip-white shadow-sm z-50 h-20">
      <nav className="flex flex-row items-center justify-between py-6 px-4 ">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <a className="text-2xl font-bold md:text-3xl selection:text-amber-800">
            Drip<span className="text-blue-500">UI</span>
            </a>
          </Link>
          <Link href="/docs">
            <a className="pl-3 text-sm md:text-lg font-semibold border-drip-black/20 hover:text-drip-black/80">
              Components
            </a>
          </Link>
          <a
            disabled
            className="pl-2 text-sm pointer-events-none md:text-lg text-drip-black/20"
          >
            Web Designs
          </a>
        </div>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
