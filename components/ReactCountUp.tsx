"use client";

import React from "react";
import CountUp from "react-countup";

const ReactCountUp = ({ amt }: { amt: number }) => {
  return (
    <>
      <div className="w-full">
        <CountUp end={amt} decimal="." />
      </div>
    </>
  );
};

export default ReactCountUp;
