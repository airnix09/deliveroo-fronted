import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Meal.css";

const Meal = ({
  id,
  title,
  description,
  price,
  popular,
  picture,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div
      className="Meal"
      key={id}
      onClick={() => {
        // 1. get every selected products
        const copy = [...selectedProducts];

        // 2. search in products already selected if the product already exists
        let exist = false;

        for (let i = 0; i < copy.length; i++) {
          const elem = copy[i];
          // 3. if found we add +1 to the quantity
          if (elem.title === title) {
            elem.quantity++;
            exist = true;
          }
        }

        // 4. if it wasn't found we add a new product to the basket
        if (!exist) {
          copy.push({ title: title, price: price, quantity: 1 });
        }

        // 5. update the state containing the selected products
        setSelectedProducts(copy);
      }}
    >
      <div>
        <h3 className="meal-title">{title}</h3>
        {description && <p className="meal-desc">{description}</p>}
        <span className="meal-price">{price} €</span>
        {popular && (
          <span className="meal-popular">
            <FontAwesomeIcon icon="star" /> Populaire
          </span>
        )}
      </div>
      <div className="meal-pic">
        {picture && <img src={picture} alt={title} />}
      </div>
    </div>
  );
};

export default Meal;
