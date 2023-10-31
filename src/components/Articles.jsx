import React from 'react';

const Article = ({ title, content }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Article;
