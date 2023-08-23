import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductList = (itemDetails) => {
  const { id, title, price, description, category, image, rating } =
    itemDetails.item;
  return (
    <div>
      <Link to={`/productCard/${id}`}>
        <Card
          hoverable
          style={{
            height: 470,
            padding: 10,
            margin: 10,
          }}
          cover={
            <img
              alt={`${category}-${title}`}
              src={image}
              height={250}
              width={250}
            />
          }
        >
          <Meta title={title} description={description} />
          <div>
            <Rate allowHalf defaultValue={rating.rate} /> {rating.count} Ratings
          </div>
          <div className="price-tag">Special Price</div>
          <div className="price-cls">
            ${price} <span className="price-overline pl-2"> $ {price * 2}</span>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductList;
