import React from "react";
import { Layout, Row, Col } from "antd";

import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Cart from "./components/Cart";
const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Header className="app-header">
            <Row>
              <Col span={24}>
                <div className="head-title">
                  <Link to="/">Gama Cart </Link>
                  <span className="float-right">
                    <Link to="/cart">
                      <ShoppingCartOutlined />
                    </Link>
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
