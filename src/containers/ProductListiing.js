import React, { useEffect } from "react";

import ProductComponents from "./ProductComponents";

import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";

const ProductListiing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("products:", products);
  }, []);

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      <ProductComponents />
    </div>
  );
};

export default ProductListiing;
