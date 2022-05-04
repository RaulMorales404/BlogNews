import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import CartList from "../../components/cart";
import Nav from "../../components/nav";
import images from "../../Apis/getImages";
import SimpleImageSlider from "react-simple-image-slider";
import Spiner from "../../components/spiner";

export default function Home() {
  const [isLoadin, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoadin ? (
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
            <CartList></CartList>
          </div>
        </div>
      )}
    </>
  );
}
