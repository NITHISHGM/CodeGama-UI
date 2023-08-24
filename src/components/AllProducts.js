import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slice/getAllProductsSlice";
import { getAllCategories } from "../redux/slice/categoriesSlice";
import { Row, Col } from "antd";

import ProductList from "./ProductList";
import FilterProducts from "./FilterProducts";

const AllProducts = () => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <div>
      {status ? (
        <>Loading</>
      ) : (
        <>
          <Row>
            <Col span={24}>
              <FilterProducts />
            </Col>
          </Row>
          <Row>
            {data?.map((item, ind) => {
              return (
                <Col span={6} className="product-list-cls">
                  <ProductList item={item} key={ind} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
};

export default AllProducts;
