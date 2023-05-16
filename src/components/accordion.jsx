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

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="fborder-t fborder-gray-200 w-full">
      <button
        className={`w-full bg-[rgba(37,40,44,50%)] flex items-center justify-between py-2 md:py-4 pl-4 md:pl-6  ${
          isOpen ? "rounded-t" : "my-2 rounded-[0px]"
        } focus:outline-none ${classname}`}
        onClick={toggleAccordion}
      >
        <h3
          className={`text-[15px] font-thin md:text-xl text-left ${
            isOpen && "!font-medium text-green-500 "
          } text-[#eceded] w-[90%]`}
        >
          {question}
        </h3>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          } text-gray-500 w-[10%]`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-4 py-2 md:px-6 text-sm md:text-lg font-normal leading-[1.5rem] text-gray-100 bg-[rgba(37,40,44,50%)] rounded-b overflow-hidden"
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
