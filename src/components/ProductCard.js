import React, { useEffect } from "react";
import { Card, Image, Row, Col, Rate, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../redux/slice/cartSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { getProductsBasedOnID } from "../redux/slice/getProductsBasedOnIDSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductsBasedOnID(id));
  }, [id, dispatch]);

  const { data, status } = useSelector((state) => state.singleProduct);

  const { title, price, description, image, rating } = data;
  return (
    <>
      {status ? (
        <>Loading...</>
      ) : (
        <>
          {" "}
          <Card
            title={
              <span className="prod-title">
                {title}{" "}
                <span className="float-right">
                  <Button>
                    <Link to={"/"}>
                      <ArrowLeftOutlined /> Back
                    </Link>
                  </Button>
                </span>
              </span>
            }
            key={id}
            className="product-card"
          >
            <Row>
              <Col span={6} className="pl-2 pr-2">
                <Image
                  className="img-flex"
                  width="100%"
                  height={300}
                  src={image}
                />
              </Col>
              <Col span={18} className="product-details">
                <div className="desc-cls">{description}</div>
                <div>
                  <Rate allowHalf defaultValue={rating.rate} /> {rating.count}{" "}
                  Ratings
                </div>
                <div className="price-tag">Special Price</div>
                <div className="price-cls">
                  ${price}{" "}
                  <span className="price-overline pl-2"> $ {price * 2}</span>
                </div>
                <div>
                  <Button
                    type="primary"
                    onClick={() => dispatch(addToCart(data))}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </>
      )}
    </>
  );
};

export default ProductCard;
