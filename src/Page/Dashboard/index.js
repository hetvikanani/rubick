import React, { Component } from "react";
import DashboardStyle from "./style";
import { TopRowValue } from "./constant";
import { Row, Col } from "antd";
import Card from "../../Components/shared/Card";

export default class Dashboard extends Component {
  topRowUi = () => {
    try {
      return TopRowValue.map((data, i) => (
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} key={i}>
          <Card data={data}/>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <DashboardStyle>
        <div className="displayDiv">
          <h2 className="title">General Report</h2>
          <Row className="top-row-box">
            {/* <div className="site-card-border-less-wrapper"> */}
            {this.topRowUi()}
            {/* </div> */}
          </Row>
        </div>
      </DashboardStyle>
    );
  }
}
