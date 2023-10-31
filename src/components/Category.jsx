import React from 'react';
import Article from './Article';

const Category = ({ category, articles }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} content={article.content} />
      ))}
    </div>
  );
}

export default Category;
