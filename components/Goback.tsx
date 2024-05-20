"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Goback = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.back()}
        className="group left-3 top-10 backdrop-blur-md p-2 rounded-full cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <IoMdArrowRoundBack
          size={25}
          className="group-hover:scale-110 fill-white group-hover:fill-[red] group-active:-translate-x-1 ease-in-out duration-200"
        />
      </div>
    </>
  );
};

export default Goback;
