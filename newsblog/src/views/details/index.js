import React from "react";
import "./style.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/nav";
import getDate from "../../components/cart/formatHours";
import CartList from "../../components/cart";
import Spiner from "../../components/spiner";
import shallow from "zustand/shallow";
import useResultsNews from "../../zustand/resultsNews";
import scroll from "../../components/cart/scroll";
const Details = () => {
  let { data } = useParams();
  const { results, getNewsResults } = useResultsNews(
    (state) => ({
      isLoading: state.isLoading,
      results: state.results,
      getNewsResults: state.getNewsResults,
    }),
    shallow
  );

  useEffect(() => {
    scroll();
  }, [data]);

  useEffect(() => {
    if (results.length == 0) {
      getNewsResults();
    }
  }, []);

  const news = results.map((item, index) => {
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
      {results.length ? (
        <div className="container">
          <Nav back="true"></Nav>
          {news}
          <div className="row-details">
            <CartList data={results} NumberCarts={true}></CartList>
          </div>
        </div>
      ) : (
        <Spiner></Spiner>
      )}
    </>
  );
};

export default Details;
