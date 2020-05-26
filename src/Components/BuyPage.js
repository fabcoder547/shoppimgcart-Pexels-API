import React, { useState, useEffect } from "react";
// https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json
import CardItem from "./CardItem";
import Axios from "axios";
import { random, commerce } from "faker";

const localurl =
  "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addItemInCart }) => {
  // console.log(localurl);
  const [products, setProduct] = useState([]);
  const [Iserror, setIserror] = useState(false);
  const fetchPhotos = () => {
    Axios.get(localurl, {})
      .then(({ data }) => {
        const { photos } = data;

        const allProducts = photos.map((photo) => ({
          mediumImage: photo.src.medium,
          smallImage: photo.src.tiny,
          photographer: photo.photographer,
          productName: random.word(),
          productPrice: commerce.price(),
          id: random.uuid(),
        }));
        setIserror(false);
        console.log(allProducts);
        setProduct(allProducts);
      })
      .catch((err) => {
        setIserror(true);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <h1 className="card-header header">Shooping cart</h1>
      <div className="row">
        {Iserror === false ? (
          products.map((product) => (
            <div className="col col-md-4" key={product.id}>
              <CardItem product={product} addItemInCart={addItemInCart} />
            </div>
          ))
        ) : (
          <p>Error is here</p>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
