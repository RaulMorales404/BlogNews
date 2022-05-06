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
    if (results.length === 0) {
      getNewsResults();
    }
  }, []);
  console.log(results);

  const news = results.map((item, index) => {
    if (data === item.image_url?.substr(-10)) {
      return (
        <div key={index} className="row-details">
          <img src={item.image_url}></img>
          <div className="info">
            <div>
              <h4 className="text-title-detail">{item.title}</h4>
            </div>
            <div>
              <h4 className={index < 2 ? "text-category" : "text-categoryTwo"}>
                {getDate(item.pubDate)}
              </h4>
            </div>
            <div>
              <p className="desc-details">
                Autor: {item.creator ? item.creator : "Sin autor"}
              </p>
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
