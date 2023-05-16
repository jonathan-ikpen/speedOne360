import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ targetSpeed }) => {
  const [currentSpeed, setCurrentSpeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSpeed < targetSpeed) {
        setCurrentSpeed((prevSpeed) => prevSpeed + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentSpeed, targetSpeed]);

  return (
    <div className="m-auto flex mt-20 items-center justify-center fh-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-[160px] font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentSpeed}{" "}
          <span className="text-lg font-thin ml-[-40px] text-gray-500">
            Mbps
          </span>
          <BarSpeed />
        </motion.h1>
      </motion.div>
    </div>
  );
};

const BarSpeed = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5 }}
        className="bg-green-500 h-[1px] rounded-full mb-6"
      ></motion.div>
      <motion.div
        className="font-thin text-gray-700 text-[11px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Speed Test
      </motion.div>
    </>
  );
};

const SpeedTestAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Speed Test
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="bg-blue-500 h-2 rounded-full mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-lg"
        >
          Testing your internet speed...
        </motion.p>
      </motion.div>
    </div>
  );
};

const SpeedTestAnimation2 = () => {
  return (
    <div className="flex items-center justify-center !h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Speed Test
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="bg-blue-500 h-2 rounded-full mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-lg"
        >
          Testing your internet speed...
        </motion.p>
      </motion.div>
    </div>
  );
};

export { Preloader, SpeedTestAnimation };
