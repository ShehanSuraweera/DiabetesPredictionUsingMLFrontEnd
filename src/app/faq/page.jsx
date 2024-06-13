"use client";

import { useState } from "react";
import faqData from "@/data/faqData";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="px-0 py-0 mx-0 my-24 overflow-hidden md:px-36">
      <h1 className="mb-8 text-3xl font-bold">Common Questions ?</h1>
      <div className="mt-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full p-3 mb-2 bg-gray-300 rounded-lg cursor-pointer md:w-3/4"
          >
            <div className="font-bold" onClick={() => toggleExpand(index)}>
              {faq.question}
            </div>
            {expanded === index && (
              <div className="mt-2 overflow-hidden leading-relaxed duration-300 ease-in-out max-h-52 transition-max-height">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
