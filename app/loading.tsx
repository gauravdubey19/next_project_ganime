import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <>
      <div className="w-full h-screen flex-center">
        <Image
          src="/loading.gif"
          alt="loading"
          width={500}
          height={700}
          className=""
        />
      </div>
    </>
  );
}
