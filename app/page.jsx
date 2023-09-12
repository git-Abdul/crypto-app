"use client";
import { CryptoList } from "./components/cryptoList";
import { Rays } from "./components/rays";
import { NavBar } from "./components/navBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="select-none">
        <Rays />
        {/*Main heading and image*/}
        <div className="text-center md:mb-5 mb-0 md:mt-20 mt-32">
          <p
            className="font-bebas text-white md:mt-0 mt-20 uppercase font-bold heading select-none"
            style={{ padding: 30 }}
          >
            CYPTOCOIN
          </p>
        </div>
        <div className="flex justify-center items-center md:-mt-20 mb-10 -mt-6 p-5 text-center">
          <p className="font-bridge uppercase lg:text-2xl md:text-xl text-sm text-gradient font-bold">Track and trade crypto currencies</p>
        </div>
      </div>
    </main>
  )
}