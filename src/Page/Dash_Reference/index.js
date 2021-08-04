import React, { Component } from "react";
import { Row, Col, Card, Image } from "antd";

import { Menu, Header } from "components/Form";
import { TopRowValue } from "./constant";
import { DashbordStyle } from "./style";
import { flow, four, mount } from "components/Images";

class DashBoard extends Component {
  topRowUi = () => {
    try {
      return TopRowValue.map((a, i) => (
        <Col xs={24} sm={24} md={24} lg={12} xl={6} key={i}>
          <Card className="box">
            <div className="content1">
              <h1 className="number">{a}</h1>
              <h2 className="name">Lorem ipsum</h2>
            </div>
            <Image src={four} preview={false} className="topImg" />
          </Card>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  bottomRowUi = () => {
    try {
      let array = [1, 2];
      return array.map((a, i) => (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} key={i}>
          <Card className="box">
            <h3 className="name">Lorem ipsum</h3>
            <h1 className="number">23,000</h1>
            <h3 className="name">Lorem ipsum dolar</h3>
            <Image src={flow} preview={false} className="topImg" />
          </Card>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Row>
        {/* <Col xs={24} sm={10} md={8} lg={6} xl={5} className="menuItems">
          <Menu />
        </Col> */}
        <Col xs={24} sm={14} md={16} lg={18} xl={19} className="dataItems">
          <DashbordStyle>
            <Header />
            <div className="displayDiv">
              <h2 className="title">Hello,Admin</h2>
              <Row className="top-row-box">{this.topRowUi()}</Row>
              <Card className="middle-box">
                <h3 className="name">Lorem ipsum</h3>
                <h1 className="number">23,000</h1>
                <Image src={mount} preview={false} className="topImg" />
              </Card>
              <Row className="bottom-row-box" gutter={20}>
                {this.bottomRowUi()}
              </Row>
            </div>
          </DashbordStyle>
        </Col>
      </Row>
    );
  }
}
export default DashBoard;
