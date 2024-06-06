"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "./button/Button";

const box5 = () => {
  const control = useAnimation();

  return (
    <main className=" flex flex-col gap-5">

      <div className="flex justify-center items-center gap-10">
        <div
          onClick={() =>
            control.start({
              x: 1000,
              transition: {
                stiffness: 20,
                type: "spring",
              },
            })
          }
        >
          <Button text="Move Right"></Button>
        </div>

        <div
          onClick={() =>
            control.start({
              x: 0,
              transition: {
                stiffness: 20,
                type: "spring",
              },
            })
          }
        >
          <Button text="Move Left"></Button>
        </div>

        <div
          onClick={() =>
            control.start({
              borderRadius: "50%",
              transition: {
                duration: 0.2,
              },
            })
          }
        >
          <Button text="Make It Circle"></Button>
        </div>

        <div
          onClick={() =>
            control.start({
              borderRadius: "10%",
              transition: {
                duration: 0.2,
              },
            })
          }
        >
          <Button text="Make It Square"></Button>
        </div>

        <div
          onClick={() =>
            control.stop()
          }
        >
          <Button text="stop"></Button>
        </div>
      </div>

      <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        animate={control}
      ></motion.div>
    </main>
  );
};

export default box5;
