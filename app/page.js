"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <main>
      {/* Navbar */}
      <nav className="item-blur bg-fixed select-none fixed w-full top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-6">
          <a href="#" className="flex items-center">
            <img src="https://media.tenor.com/UTJnB_zWwgwAAAAi/coin-spin.gif" class="md:h-12 h-8" alt="logo-svg" />
          </a>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isNavOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-bridge font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link href={"/"}>
                  <p
                    className="block text-lg py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ease-in duration-200 hover:text-yellow-500"
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 ease-in duration-200 hover:text-yellow-500 md:p-0 md:dark:hover:bg-transparent">
                    Market
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/projects"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-yellow-500 md:dark:hover:bg-transparent">
                    Choose Us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="select-none">
        {/* Rays */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 md:-mt-30 -mt-10 h-72 w-72 md:h-auto md:w-auto"
          style={{ zIndex: -1 }}
        >
          <img
            src="rays.png"
            alt="rays"
            loading="lazy"
            className="rays-img select-none"
          />
        </div>
        {/*Main heading and image*/}
        <div className="flex flex-col md:flex-row justify-center items-center md:mb-5 mb-0 mt-16">
          <p
            className="font-bebas text-white md:mt-0 mt-20 uppercase font-bold md:text-left text-center heading select-none"
            style={{ padding: 30 }}
          >
            CYPTOCOIN
          </p>
        </div>
        <div className="flex justify-center items-center md:-mt-20 mb-10 -mt-6 p-5 text-center">
          <p className="font-bridge uppercase text-xl text-gradient">Track and trade crypto currencies</p>
        </div>
        <div className="flex justify-center gap-10 mb-14 select-none">
          <a href="https://instagram.com">
            <img
              src="icon1.svg"
              alt="Icon 1"
              className="md:w-12 md:h-12 h-8 w-8"
            />
          </a>
          <a href="https://twitter.com">
            <img
              src="icon2.svg"
              alt="Icon 2"
              className="md:w-12 md:h-12 h-8 w-8"
            />
          </a>
          <a href="https://discord.com">
            <img
              src="icon3.svg"
              alt="Icon 3"
              className="md:w-12 md:h-12 h-8 w-8"
            />
          </a>
        </div>
      </div>
    </main>
  )
}