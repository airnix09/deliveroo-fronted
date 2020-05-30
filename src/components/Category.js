import React from "react";
import Meal from "./Meal";
import "./Category.css";

const Category = ({ name, meals, selectedProducts, setSelectedProducts }) => {
  const dishes = meals.map((meal, index) => {
    return (
      <Meal
        key={index}
        {...meal}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      ></Meal>
    );
  });
  return (
    <div className="Category">
      <h2>{name}</h2>
      <div className="meals">{dishes}</div>
    </div>
  );
};

export default Category;
