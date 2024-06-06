"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const box2 = () => {

  return (
    <main className=" flex flex-col gap-5">
      
      <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        drag
        dragConstraints= {{
          left: -10, right:-10, top: -10, bottom:-10
        }}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      ></motion.div>
    </main>
  );
};

export default box2;
