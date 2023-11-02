import React from 'react';
import Article from './Articles';

const Category = ({ category, articles }) => {
  return (
    <div className="mb-8 border-card">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <div className="flex flex-wrap">
        {articles.map((article, index) => (
          <Article key={index} title={article.title} content={article.content} />
        ))}
      </div>
    </div>
  );
}

export default Category;
