import React from 'react';

const Article = ({ title, content }) => {
  return (
    <div className="bg-[#FFFFFF] p-[2rem] rounded-md shadow-md m-2 flex-1 flex flex-col justify-between shadow-lg gap-3">
      <div>
        <h2 className="text-lg font-bold mb-4 font-barlow font-bold text-[#000000]">{title}</h2>
        <p className='text-sm text-[#111827] custom-paragraph'>{content}</p>
      </div>
      <a href="#" className="text-[#8C30F5] custom-paragraph text-[.75rem] flex items-center transition-transform transform-gpu hover:translate-x-1 pt-2">
        Learn More
        <svg className="w-6 h-6 ml-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
  );
}

export default Article;
