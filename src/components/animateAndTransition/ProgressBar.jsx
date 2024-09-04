import React from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
  return (
    <>
      <h1 className="text-zinc-300 text-3xl">Progress Bar</h1>
      <div className="mt-6">
        <div className="w-full h-2 rounded bg-white">
          <motion.div
            animate={{
              width: "100%",
            }}
            transition={{ ease: "easeOut", duration: 4 }}
            className="w-1/12 h-full bg-teal-700"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
