"use client";

import { useState } from "react";
import faqData from "@/data/faqData";
import Image from "next/image";
import drop from "@/images/faq/drop.svg";

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
    <div className="px-8 py-0 my-6 overflow-hidden md:my-12 lg:py-28 md:px-36">
      <h1 className="mb-8 text-3xl font-bold">Common Questions ?</h1>
      <div className="mt-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full p-3 mb-2 bg-[#32CD82] bg-opacity-50 rounded-lg cursor-pointer md:w-3/4"
          >
            <div className="flex items-center justify-between">
              <div className="font-bold" onClick={() => toggleExpand(index)}>
                {faq.question}
              </div>
              <div className="w-8">
                <Image src={drop} alt="Drop down" className="w-full" />
              </div>
            </div>
            {expanded === index && (
              <div className="mt-2 overflow-hidden leading-relaxed duration-300 ease-in-out max-h-52 transition-max-height">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
