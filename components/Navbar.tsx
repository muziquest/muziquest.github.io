import Link from "next/link";
import { Meow_Script } from "next/font/google";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import ThemeToggle from "@/components/ThemeToggle";

const logoFont = Meow_Script({
  weight: "400",
  style: "normal",
  preload: true,
});

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 py-2 bg-opacity-80 bg-base-100">
      <div className="navbar-start">
        <label htmlFor="drawer-main" className="btn btn-ghost">
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </label>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className={`select-none text-4xl transition-color duration-200 ease-in hover:text-info hover:ease-out ${logoFont.className}`}
        >
          Anqur
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
}
