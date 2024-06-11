"use client";

import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const faqData = [
    {
      question: "What is diabetes?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "How does your detection system work?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "How accurate is the model?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];

  return (
    <div className="my-24 mx-0 px-0 py-0 overflow-hidden md:px-36">
      <h1 className="text-3xl font-bold mb-8">Common Questions ?</h1>
      <div className="mt-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full md:w-3/4 mb-2 p-3 cursor-pointer bg-gray-300 rounded-lg"
          >
            <div className="font-bold" onClick={() => toggleExpand(index)}>
              {faq.question}
            </div>
            {expanded === index && (
              <div className="max-h-52 transition-max-height duration-300 ease-in-out overflow-hidden mt-2 leading-relaxed">
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
