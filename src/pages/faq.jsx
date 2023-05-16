import { useEffect, useState } from "react";
import Accordion from "../components/accordion";
import faqData from "../data/faq.json";
import SearchInput from "../components/search";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [result, setResult] = useState(faqData);

  const handleResult = (res) => {
    if (res.trim() !== "") {
      const filteredResults = faqData.filter((item) =>
        item.title.toLowerCase().includes(res.toLowerCase())
      );
      setResult(filteredResults);
    } else {
      setResult(faqData);
    }
  };

  const handleEmpty = (bol) => {
    console.log(bol);
    if (bol === true) setResult(faqData);
  };

  return (
    <div className="fbg-white fpy-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 justify-center items-center">
          <SearchInput data={faqData} res={handleResult} empty={handleEmpty} />
          <div className="mt-6 first:bg-blue-700 w-full">
            <AnimatePresence>
              {result.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Accordion
                    classname={""}
                    index={index}
                    question={item.title}
                    answer={
                      <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    }
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
