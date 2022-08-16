import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Links = [
  { href: "/", label: "Home" },
  { href: "/vercel-product-advocate", label: "PA Role" },
  { href: "/past-experience", label: "The Past" },
  { href: "/email-responses", label: "Emails" },
  { href: "/personal-recommendations", label: "Recommendations" },
];

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className=" absolute bg-zinc-100 dark:bg-zinc-900 top-14 left-0 w-full h-screen px-4 py-2">
      <div>
        <ul onClick={toggleMenu}>
          {Links.map(({ href, label }) => (
            <li
              key={href}
              className=" my-3 p-2 font-semibold border-b-zinc-200 border-b text-zinc-600 dark:text-zinc-200 lg:text-base"
            >
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav
      className={`bg-zinc-100 dark:bg-zinc-900 fixed w-full h-16  border-b-2 border-zinc-300 dark:border-zinc-800 ${
        !showMenu && `backdrop-blur-sm backdrop-filter bg-opacity-30`
      }  `}
    >
      <div className=" max-w-4xl flex justify-between mx-auto relative px-4 py-2">
        {/* Vercel logo,  */}
        <div className=" h-12 w-24 relative">
          <a href="https://www.vercel.com" target="_blank">
            {/* A shortcut method to switch logo with themes */}
            <Image
              src={`/assets/vercel-logotype-${
                theme === "light" ? "dark" : "light"
              }.png`}
              layout="fill"
              objectFit="contain"
              alt="Vercel"
            />
          </a>
        </div>

        {/* Mobile Menu button */}
        <div className=" h-12 w-12 flex items-center justify-center md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-zinc-600 dark:text-zinc-200"
          >
            {showMenu ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
        </div>

        {/* Links for tablet+  */}
        <div className="hidden md:flex items-center lg:w-fit px-1">
          <ul className=" grid grid-flow-col gap-3">
            {Links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="text-zinc-600 dark:text-zinc-200 text-sm lg:text-base">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {showMenu && <MobileMenu toggleMenu={toggleMenu} />}
      </div>
    </nav>
  );
};

export default Nav;
