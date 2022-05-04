import React from "react";
import "./style.css";
import getDate from "./formatHours";
import { Link } from "react-router-dom";

export default function Cart({ data, id = 3 }) {
  if (data.urlToImage?.substr(0, 2) && data.urlToImage?.substr(0, 1) === "h") {
    return (
      <Link to={`/details/${data.urlToImage?.substr(-10)}`}>
        <div className="col-cart">
          <div>
            <img className="img-cart" src={data.urlToImage}></img>
          </div>
          <div>
            <div>
              <h4 className={id < 3 ? "text-category" : "text-categoryTwo"}>
                {getDate(data.publishedAt)}
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
}
