import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ExitAndEnterAnimation = () => {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

  useEffect(() => {
    setTimeout(() => setRemoveInnerCircle(true), 7000);
  });

  return (
    <div>
      <div className="bg-white h-32 w-32 rounded-full mx-auto mt-15">
        <AnimatePresence>
          {!removeInnerCircle && (
            <motion.div
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: 1, y: 20, x: 10 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, y: 500 , background : "teal" }}
              className="bg-red-950 h-14 w-14 rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExitAndEnterAnimation;
