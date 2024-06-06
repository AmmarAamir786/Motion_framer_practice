"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const box1 = () => {

  const [animate, setAnimate] = useState(false)

  return (
    <main className=" flex flex-col gap-5">
      
      <motion.div
        className="h-40 w-40 bg-slate-200 rounded-xl"
        initial= {{
          opacity: 0.5
        }}
        animate={{
          x: animate ? 500 : 0,
          opacity: animate ? 1 : 0.5,
          scale: animate ? 1.2 : 1,
          rotate: animate ? 360 : 0
        }}
        transition={{
          stiffness: 100,
          type: "spring"
        }}
        onClick={()=>setAnimate(!animate)}
      ></motion.div>
    </main>
  );
};

export default box1;
