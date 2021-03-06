import React from "react";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <div className="container cart">
      <h3 className="text-white card-header">Your Cart</h3>
      <ul>
        {cartItem.map((item) => (
          <li key={item.id}>
            <div className="row">
              <div className="col">
                <img height="80px" src={item.mediumImage} />
              </div>
              <div className="col texxt-center">
                <div>
                  <h6 className="text-white">{item.productName}</h6>
                  <p>
                    {" "}
                    <span>{item.productPrice}</span>
                  </p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item)}
                >
                  remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {cartItem.length >= 1 ? (
        <div className="card final-card">
          <div className="card-header">GrandTotal</div>
          <div className="card-body total-body">
            <h6>
              your amount for {cartItem.length} is <span>{amount}</span>
            </h6>
            <button className="btn btn-success buybtn" onClick={buyNow}>
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <h3 className="text-white">cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;
