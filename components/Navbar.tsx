"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchPopup from "./SearchPopup";
import { FaSearchengin } from "react-icons/fa";

const Navbar = ({ appName }: { appName: string }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleSearchClose = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <section className="z-50 fixed top-0 right-0 left-0 w-full h-10 text-white bg-transparent backdrop-blur-md flex-between p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <Link
          href="/"
          className="ani_name capitalize group text-xl hover:text-[red] flex-between gap-1 font-bold active:translate-y-1 ease-in-out duration-300"
        >
          <Image
            src="/logo.png"
            alt="App logo"
            width={20}
            height={20}
            className="group-hover:scale-125 ease-in-out duration-300"
          />
          {appName}
        </Link>
        <div
          onClick={() => setOpen(!isOpen)}
          className="text-xl cursor-pointer hover:scale-105 hover:text-[red] active:scale-90 active:text-white ease-in-out duration-200"
        >
          <FaSearchengin size={25} />
        </div>
        {isOpen && (
          <SearchPopup isOpen={isOpen} handleSearchClose={handleSearchClose} />
        )}
      </section>
    </>
  );
};

export default Navbar;
