"use client";
import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Button from "./button/Button";

const box6 = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <main className=" flex flex-col gap-5">

      <motion.div onClick={() => setAnimate(!animate)} layout>
        <Button text="show/hide"></Button>
      </motion.div>
      

      <AnimatePresence mode="popLayout">
      {animate && <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        initial= {{
          scale: 0,
          rotate: 0
        }}
        animate= {{
          scale: 1,
          rotate: 180,
          transition: {
            duration: 1,
            ease: "backInOut"
          }
        }}
        exit={{
          scale: 0,
          rotate: 0  
        }}
      ></motion.div>}
      </AnimatePresence>

    </main>
  );
};

export default box6;
