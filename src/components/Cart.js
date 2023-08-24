import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Card, Button, Empty } from "antd";
import { removeFromCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.cart.cartData);
  return (
    <div>
      {Data.length === 0 ? (
        <div className="empty-cls">
          <Empty description={<span>Your shopping cart is empty</span>} />
        </div>
      ) : (
        <>
          {Data.map((item) => {
            let TotalPrice = parseInt(item.price) * parseInt(item.quantity);
            return (
              <Row>
                <Col span={3}></Col>
                <Col span={18}>
                  <Card className="cart-card">
                    <Row>
                      <Col span={24}>
                        <div className="prod-title">
                          {item.title}{" "}
                          <span className="float-right price-cls">
                            ${item.price}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <div className="product-value">
                          {" "}
                          Quantity : {item.quantity}
                        </div>
                        <div className="product-value">
                          {" "}
                          Total Price : $ {TotalPrice}
                        </div>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <div>
                          <Button
                            type="primary"
                            className="float-right remove-btn"
                            danger
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            <DeleteOutlined /> Remove
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={3}></Col>
              </Row>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
