import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Card, Button, Empty, Radio } from "antd";
import { removeFromCart } from "../redux/slice/cartSlice";
import { addToCart, removeQty } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [TotalCartPrice, setTotalCartPrice] = useState(0);
  const Data = useSelector((state) => state.cart.cartData);
  const handleQty = (item, symbol) => {
    if (symbol === "+") {
      dispatch(addToCart(item));
    } else {
      dispatch(removeQty(item));
    }
  };
  useEffect(() => {
    let sum = Data.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    Number(sum).toFixed(2);
    setTotalCartPrice(sum);
  }, [Data]);
  return (
    <div>
      {Data.length === 0 ? (
        <div className="empty-cls">
          <Empty description={<span>Your shopping cart is empty</span>} />
        </div>
      ) : (
        <>
          {Data.map((item) => {
            let TotalPrice = Number(item.price) * Number(item.quantity);
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
                          Quantity : {item.quantity}{" "}
                          <span className="ml-1">
                            <Radio.Group size="small">
                              <Radio.Button
                                value="-"
                                disabled={item.quantity <= 1}
                                onClick={() => handleQty(item, "-")}
                              >
                                -
                              </Radio.Button>
                              <Radio.Button
                                value="+"
                                onClick={() => handleQty(item, "+")}
                              >
                                +
                              </Radio.Button>
                            </Radio.Group>
                          </span>
                        </div>
                        <div className="product-value">
                          {" "}
                          Total Price : $ {Number(TotalPrice).toFixed(2)}
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
          <Row>
            <Col span={3}></Col>
            <Col span={18}>
              <Card>
                <div className="float-right price-cls">
                  {" "}
                  Total Price : $ {TotalCartPrice}
                </div>
              </Card>
            </Col>
            <Col span={3}></Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Cart;
