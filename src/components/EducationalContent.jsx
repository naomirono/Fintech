import React from 'react';
import Category from './Category';

const EducationalContent = () => {
  const data = [
    {
      category: 'Savings Tips',
      articles: [
        {
          title: 'How to Save Money in Kenya',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...'
        },
        {
          title: 'Investing in Kenyan Stocks',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...'
        }
      ]
    },
    {
      category: 'Budgeting',
      articles: [
        {
          title: 'Creating a Budget for Your Kenyan Household',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      {data.map((category, index) => (
        <Category key={index} category={category.category} articles={category.articles} />
      ))}
    </div>
  );
}

export default EducationalContent;
