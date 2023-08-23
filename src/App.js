import React from "react";
import { Layout, Row, Col } from "antd";

import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard";
const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <div>
      <Layout>
        <Header className="app-header">
          <Row>
            <Col span={24}>
              <div className="head-title">Gama Cart</div>
            </Col>
          </Row>
        </Header>
        <Content className="app-content">
          <Router>
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/productCard/:id" element={<ProductCard />} />
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
