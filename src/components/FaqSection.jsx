import React, { useState } from "react";
import { faqs } from "../mock/faqs";

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleReadMoreClick = () => {
    setShowAll(true);
  };

  const handleQuestionMouseLeave = () => {
    setActiveIndex(null);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section id="FAQ" className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-base text-[#8C30F5] font-bold tracking-wide uppercase font-barlow">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 leading-6 text-3xl font-extrabold text-gray-900 font-barlow">
            Have a question? We have answers.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-[968px]">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="py-2"
              onMouseLeave={handleQuestionMouseLeave}
            >
              <button
                className="text-lg leading-6 font-medium text-gray-900 hover:text-[#8C30F5] focus:outline-none transition duration-150 ease-in-out text-left w-full custom-paragraph"
                onClick={() => handleQuestionClick(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
              )}
            </div>
          ))}
          {!showAll && (
            <div className="mt-8 text-center custom-paragraph">
              <button
                className="bg-[#8C30F5] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-600 focus:outline-none focus:bg-indigo-500"
                onClick={handleReadMoreClick}
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
