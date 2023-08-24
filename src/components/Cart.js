import React from "react";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const Data = useSelector((state) => state);
  return <div>{console.log("Data", Data)}</div>;
};

export default Cart;
