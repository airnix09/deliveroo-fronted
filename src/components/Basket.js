import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Basket.css";

const Basket = ({ selectedProducts, setSelectedProducts }) => {
  // fixed delivery charge
  const deliveryFee = 2.5;

  // check if the basket is empty
  let selectionExists = false;
  if (selectedProducts.length > 0) {
    selectionExists = true;
  }

  const calcSubTotal = () => {
    if (selectionExists) {
      let total = 0;
      for (let i = 0; i < selectedProducts.length; i++) {
        total =
          total +
          Number(selectedProducts[i].price) * selectedProducts[i].quantity;
      }
      // limit the numbers after the decimal point to 2
      total = Math.round(total * 100) / 100;
      return total;
    } else {
      return 0;
    }
  };

  if (selectionExists) {
    return (
      <div className="sidebasket">
        <div className="basket">
          <button className="basket-btn">Valider mon panier</button>
          <div className="basket-content">
            {selectedProducts.map((elem, index) => {
              return (
                <div className="selected-meal" key={index}>
                  <div className="selected-meal-info">
                    <div className="selected-meal-total">
                      <span
                        className="meal-operator"
                        onClick={() => {
                          const copy = [...selectedProducts];
                          elem.quantity--;
                          if (elem.quantity === 0) {
                            copy.splice(index, 1);
                          }
                          setSelectedProducts(copy);
                        }}
                      >
                        <FontAwesomeIcon icon="minus-square" />
                      </span>
                      <span className="selected-meal-qty">{elem.quantity}</span>
                      <span
                        className="meal-operator"
                        onClick={() => {
                          const copy = [...selectedProducts];
                          elem.quantity++;
                          setSelectedProducts(copy);
                        }}
                      >
                        <FontAwesomeIcon icon="plus-square" />
                      </span>
                    </div>
                    <div className="selected-meal-desc">
                      <span className="selected-meal-name">{elem.title}</span>
                    </div>
                  </div>
                  <div className="selected-meal-price">
                    <span>{elem.price} €</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bill-desc">
            <div className="subtotal">
              <span>Sous-total</span>
              <span>{calcSubTotal()} €</span>
            </div>
            <div className="delivery-fee">
              <span>Frais de livraison</span>
              <span>{deliveryFee} €</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{calcSubTotal() + deliveryFee} €</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebasket">
        <div className="basket">
          <button className="basket-btn-empty">Valider mon panier</button>
          <div className="basket-empty">
            <span>Votre panier est vide</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Basket;
