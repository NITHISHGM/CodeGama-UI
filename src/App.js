import React from "react";
import { Layout, Row, Col, Space, Badge } from "antd";

import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";
const { Header, Footer, Content } = Layout;
const App = () => {
  const data = useSelector((state) => state.cart.cartData);
  return (
    <div>
      <Router>
        <Layout>
          <Header className="app-header">
            <Row>
              <Col span={24}>
                <div className="head-title">
                  Gama Cart
                  <span className="float-right">
                    <Space size={[20, 16]}>
                      {" "}
                      <Link to="/">
                        <HomeOutlined />
                      </Link>
                      <Link to="/cart">
                        <Badge size="small" count={data?.length}>
                          <ShoppingCartOutlined />
                        </Badge>
                      </Link>
                    </Space>
                  </span>
                </div>
              </Col>
            </Row>
          </Header>
          <Content className="app-content">
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/productCard/:id" element={<ProductCard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Content>
          <Footer className="app-footer">
            <div className="footer-title">
              Gama Cart ©2023 Created by CODEGAMA
            </div>
          </Footer>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
