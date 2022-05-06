import React from "react";
import "./style.css";
import { useEffect } from "react";
import CartList from "../../components/cart";
import Nav from "../../components/nav";
import images from "../../images/getImages";
import SimpleImageSlider from "react-simple-image-slider";
import Spiner from "../../components/spiner";
import shallow from "zustand/shallow";
import useResultsNews from "../../zustand/resultsNews";

const Home = () => {
  const { isLoading, results, getNewsResults } = useResultsNews(
    (state) => ({
      isLoading: state.isLoading,
      results: state.results,
      getNewsResults: state.getNewsResults,
    }),
    shallow
  );
  useEffect(() => {
    if (results.length === 0) {
      getNewsResults();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner></Spiner>
      ) : (
        <div className="container">
          <Nav></Nav>
          <div className="col-slider">
            <SimpleImageSlider
              className="your-app"
              width={"71%"}
              autoPlay={true}
              height={300}
              images={images()}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <div className="row-recent">
            <h4 className="text-recent">RECIENTES</h4>
          </div>
          <div className="cart-list">
            <CartList data={results}></CartList>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
