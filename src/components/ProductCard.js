import React from "react";
import { Card, Image, Row, Col, Rate } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductCard = (itemDetails) => {
  const { id } = useParams();
  const { data, status } = useSelector((state) => state.allProducts);
  const { title, price, description, image, rating } = data[id - 1];
  return (
    <>
      <Card
        title={<span className="prod-title">{title}</span>}
        key={id}
        className="product-card"
      >
        <Row>
          <Col span={6} className="pl-2 pr-2">
            <Image className="img-flex" width="100%" height={300} src={image} />
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
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductCard;