import React, { useState, useEffect } from "react";
import "./reset.css";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import Basket from "./components/Basket";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
library.add(faStar, faPlusSquare, faMinusSquare);

function App() {
  const [data, setData] = useState({});
  const [isLoaded, SetIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-project-backend.herokuapp.com"
      );
      setData(response.data);
      SetIsLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const restaurant = data.restaurant;
  const categories = data.categories;

  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="App">
      <Header />
      {isLoaded && (
        <div className="main">
          <Restaurant restaurant={restaurant}></Restaurant>
          <div className="container">
            <section>
              {categories.map((category, index) => {
                // some categories may not have meals data
                if (category.meals.length !== 0) {
                  return (
                    <Category
                      name={category.name}
                      meals={category.meals}
                      key={index}
                      selectedProducts={selectedProducts}
                      setSelectedProducts={setSelectedProducts}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </section>
            <Basket
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default App;
