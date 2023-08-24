import React from "react";
import { Layout, Row, Col } from "antd";

import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Cart from "./components/Cart";
const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <div>
      <Layout>
        <Header className="app-header">
          <Row>
            <Col span={24}>
              <div className="head-title">
                Gama Cart{" "}
                <span className="float-right">
                  <ShoppingCartOutlined />
                </span>
              </div>
            </Col>
          </Row>
        </Header>
        <Content className="app-content">
          <Router>
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/productCard/:id" element={<ProductCard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </Content>
        <Footer className="app-footer">
          <div className="footer-title">
            Gama Cart ©2023 Created by CODEGAMA
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
