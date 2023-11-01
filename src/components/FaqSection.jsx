import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
          question: '1. How do I set up automatic savings in PiggiePocket?',
          answer: 'You can set up automatic savings by navigating to the "Settings" section in the PiggiePocket app. From there, you can choose to enable automatic transfers from your linked bank account to your PiggiePocket savings account on a regular basis.'
        },
        {
          question: '2. What investment options are available in PiggiePocket?',
          answer: 'PiggiePocket offers a range of investment options, including savings plans, mutual funds, and fixed deposits. You can explore these options and choose the one that aligns with your financial goals and risk tolerance.'
        },
        {
          question: '3. Can I create multiple savings goals in PiggiePocket?',
          answer: "Yes, PiggiePocket allows you to create multiple savings goals. Whether you're saving for a vacation, a new gadget, or an emergency fund, you can set up separate goals and track your progress towards each one."
        },
        {
          question: '4. How do I track my expenses in PiggiePocket?',
          answer: 'PiggiePocket provides an intuitive expense tracking feature that allows you to categorize your expenses. Simply log your transactions, and PiggiePocket will provide insights into your spending habits, helping you make informed budgeting decisions.'
        },
        {
          question: '5. Is my financial data secure with PiggiePocket?',
          answer: 'Yes, PiggiePocket employs industry-standard security measures to protect your financial information. Our platform uses encryption protocols to safeguard your data and ensure a secure browsing experience.'
        },
        {
          question: '6. Can I access PiggiePocket on multiple devices?',
          answer: 'Absolutely! You can access your PiggiePocket account from any device with an internet connection. Whether you prefer using a smartphone, tablet, or computer, your PiggiePocket account will be synced across all platforms.'
        },
        {
          question: '7. What should I do if I forget my PiggiePocket password?',
          answer: "If you forget your PiggiePocket password, simply click on the 'Forgot Password' link on the login page. You'll receive instructions on how to reset your password via the email associated with your  account."
        },
        {
          question: '8. Can I invite friends to join PiggiePocket and earn rewards?',
          answer: 'Yes, PiggiePocket offers a referral program that allows you to invite friends to join the platform. When your friends sign up and start using PiggiePocket, both you and your friend may be eligible for rewards or bonuses.'
        }
      ];


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
    <section id='FAQ' className=" py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
      <div className="text-center">
        <h2 className="text-base text-[#8C30F5] font-bold tracking-wide uppercase font-barlow">Frequently Asked Questions</h2>
        <p className="mt-2 leading-6 text-3xl font-extrabold text-gray-900 font-barlow">Have a question? We have answers.</p>
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
