import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import getDataNews from "../../Apis";
import Cart from "./Cart";

export default function CartList({ NumberCarts = false }) {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    getDataNews(setDataNews);
  }, []);

  const listItem = dataNews.reverse()?.map((item, index) => {
    if (NumberCarts === true && index < 3) {
      return (
        <div key={index}>
          <Cart data={item} id={index}></Cart>
        </div>
      );
    } else if (!NumberCarts) {
      return (
        <>
          {index === 3 ? (
            <div className="container-other">
              <div className="row-recent">
                <h4 className="text-recent">TENDENCIAS</h4>
              </div>
            </div>
          ) : (
            ""
          )}
          <div key={index}>
            <Cart data={item} id={index}></Cart>
          </div>
        </>
      );
    }
  });

  return <div className="container-cart">{listItem}</div>;
}
