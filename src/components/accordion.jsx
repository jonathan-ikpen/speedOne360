import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

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
        <h3 className=" text-[15px] md:text-xl text-left font-medium text-[#eceded]">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-[#eceded]" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-[#eceded]" />
        )}
      </button>
      {isOpen && (
        <div
          className={`px-4 py-2 md:px-6 text-sm md:text-lg font-normal leading-[1.5rem] text-gray-100 bg-[#25282C] rounded-b transition-all duration-300 ${
            isOpen ? "max-h-full" : "max-h-0 overflow-hidden"
          } `}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
