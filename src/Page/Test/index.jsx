import React, { Component } from "react";
import { Row, Col } from "antd";
import MyLayout from "../../Components/Layout/Layout";
import Header from "../../Components/Header";

export default class Test extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} sm={10} md={8} lg={6} xl={5}>
            <MyLayout></MyLayout>
          </Col>

          <Col xs={24} sm={10} md={8} lg={6} xl={5}>
            <Header></Header>
            <p>ghfdiygh</p>
          </Col>
        </Row>
      </div>
    );
  }
}
