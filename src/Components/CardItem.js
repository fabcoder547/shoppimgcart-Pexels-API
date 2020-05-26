import React, { useState } from "react";

const CardItem = ({ product, addItemInCart }) => {
  return (
    <div className="card">
      <img src={product.smallImage} width="100%" height="200px" />
      <div className="card-body">
        <h5 className="card-header">{product.productName}</h5>
        <p className="product-price text-danger">{product.productPrice}</p>
        <button
          className="btn btn-success"
          onClick={() => addItemInCart(product)}
        >
          Purchase Now!
        </button>
      </div>
    </div>
  );
};
export default CardItem;
