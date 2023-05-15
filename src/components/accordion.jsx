import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({
  question,
  answer,
  index,
  openIndex,
  setOpenIndex,
  classname,
}) => {
  const isOpen = index === openIndex;
  console.log("function abt to run: ", isOpen, openIndex);

  const toggleAccordion = () => {
    console.log("before toggle: ", isOpen, openIndex);
    setOpenIndex(isOpen ? null : index);
    console.log("after toggle: ", isOpen, openIndex);
  };

  return (
    <div className="fborder-t fborder-gray-200">
      <button
        className={`w-full bg-[#25282C] flex items-center justify-between py-4 md:py-6 px-4 md:px-6  ${
          isOpen ? "rounded-t" : "my-1 rounded-[8px]"
        } focus:outline-none ${classname}`}
        onClick={toggleAccordion}
      >
        <h3
          className={`text-[15px] md:text-xl text-left ${
            isOpen && "font-medium"
          } text-[#eceded]`}
        >
          {question}
        </h3>
        <ChevronDownIcon
          className={`h-6 w-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          } text-gray-500`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-4 py-2 md:px-6 text-sm md:text-lg font-normal leading-[1.5rem] text-gray-100 bg-[#25282C] rounded-b overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
