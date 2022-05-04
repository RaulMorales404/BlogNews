import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../../components/nav";
import getDate from "../../components/cart/formatHours";
import getDataNews from "../../Apis";
import CartList from "../../components/cart";
import Spiner from "../../components/spiner";

export default function Details() {
  let { data } = useParams();
  const [isLoadin, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getDataNews(setNewsData);
  }, []);
  console.log("number----", newsData.length);
  const news = newsData.map((item, index) => {
    if (data === item.urlToImage?.substr(-10)) {
      return (
        <div key={index} className="row-details">
          <img src={item.urlToImage}></img>
          <div className="info">
            <div>
              <h4 className="text-title">{item.title}</h4>
            </div>
            <div>
              <h4 className={index < 2 ? "text-category" : "text-categoryTwo"}>
                {getDate(item.publishedAt)}
              </h4>
            </div>
            <div>
              <p className="desc-details">{item.content}</p>
              <p className="desc-details">{item.description}</p>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      {newsData.length ? (
        <div className="container">
          <Nav back="true"></Nav>
          {news}
          <div className="row-details">
            <CartList NumberCarts={true}></CartList>
          </div>
        </div>
      ) : (
        <Spiner></Spiner>
      )}
    </>
  );
}
