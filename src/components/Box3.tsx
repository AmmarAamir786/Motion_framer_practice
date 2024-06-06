"use client";
import React, { useState } from "react";
import { motion, stagger } from "framer-motion";

const box3 = () => {
  
  const boxVarient = {
    hidden: {
      x: 1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const listVarient = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
      staggerChildren: 0.2,
    },
  };

  return (
    <main className=" flex flex-col gap-5">
      <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        variants={boxVarient}
        animate="visible"
        initial="hidden"
      >
        <div className="flex flex-col items-center gap-5 justify-center h-full">
          {[1, 2, 3].map(() => {
            return (
              <motion.li
                className="bg-blue-500 w-5 h-w-5"
                variants={listVarient}
              ></motion.li>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
};

export default box3;
