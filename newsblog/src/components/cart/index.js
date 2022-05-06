import React from "react";
import "./style.css";
import Cart from "./Cart";

export default function CartList({ data, NumberCarts = false }) {
  let counter = 0;
  let i = 0;

  const listItem = data?.map((item, index) => {
    if (NumberCarts === true && item.image_url !== null && counter < 3) {
      counter++;
      return (
        <div key={index}>
          <Cart data={item} id={index} count={counter}></Cart>
        </div>
      );
    } else if (!NumberCarts && item.urlToImage !== null ) {
      i++;
      if (i === 4 ) {
        return (
          <div key={index + 50} className="container-other">
            <div className="row-recent">
              <h4 className="text-recent">TENDENCIAS</h4>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <Cart data={item} id={index} count={3}></Cart>
          </div>
        );
      }
    }
  });

  return <div className="container-cart">{listItem}</div>;
}
