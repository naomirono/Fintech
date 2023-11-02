import React from "react";
import Category from "./Category";
import { data } from "../mock/articles";

const EducationalContent = () => {
  return (
    <div className="container mx-auto p-8 ">
      {data.map((category, index) => (
        <Category
          key={index}
          category={category.category}
          articles={category.articles}
        />
      ))}
    </div>
  );
};

export default EducationalContent;
