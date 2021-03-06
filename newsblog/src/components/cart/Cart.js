import React from "react";
import "./style.css";
import getDate from "./formatHours";
import { Link } from "react-router-dom";

const Cart = ({ data, id = 3, count }) => {
  if (data.image_url?.substr(0, 2) && data.image_url?.substr(0, 1) === "h") {
    return (
      <Link to={`/details/${data.image_url?.substr(-10)}`}>
        <div className="col-cart">
          <div>
            <img className="img-cart" src={data.image_url}></img>
          </div>
          <div>
            <div>
              <h4
                className={id <= count ? "text-category" : "text-categoryTwo"}
              >
                {getDate(data.pubDate)}
              </h4>
            </div>
            <div>
              <h4 className="text-title">{data.title}</h4>
            </div>
            <div className="col-desc">
              <p className="desc">{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};
export default Cart;
