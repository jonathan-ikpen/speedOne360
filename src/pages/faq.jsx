import { useState } from "react";
import Accordion from "../components/accordion";
import faqData from "../data/faq.json";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="fbg-white fpy-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#eceded] text-center">
            SpeedOne360 FAQ
          </h1>
          <div className="mt-6 first:bg-blue-700 ">
            {faqData.map((item, index) => (
              <Accordion
                classname={" "}
                key={index}
                index={index}
                question={item.title}
                // answer={item.answer}
                answer={
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                }
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
