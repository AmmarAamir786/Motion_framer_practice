"use client";
import React, { useState } from "react";
import { motion, stagger } from "framer-motion";

const box4 = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <main className=" flex flex-col gap-5">
      <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        animate={{
          scale: animate ? [1, 1.2, 1.2, 1, 1] : 1,
          rotate: animate ? [0, 270, 270, 270, 0] : 0,
          borderRadius: animate ? ["20%", "20%", "50%", "20%", "20%"] : "20%",
        }}
        transition={{
          duration: 2,
        }}
        onClick={() => setAnimate(!animate)}
      ></motion.div>
    </main>
  );
};

export default box4;
