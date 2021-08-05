import React, { Component } from "react";
import DashboardStyle from "./style";
import { TopRowValue } from "./constant";
import { Row, Col } from "antd";
import Card from "../../Components/shared/Card";
import ChartDraw from "../../Components/Chart";

export default class Dashboard extends Component {
  topRowUi = () => {
    try {
      return TopRowValue.map((data) => (
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
          <Card data={data} />
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
            <DashboardStyle>
          <div className="displayDiv" >
            <h2 className="title">General Report</h2>
            <Row className="top-row-box">{this.topRowUi()}</Row>
            <div className="graphDiv">
              <h2>Customer connection graph</h2>
              </div>
              <div className='graph'>
              <ChartDraw/>
              </div>
            </div>
       
        </DashboardStyle>

        
     
      
    );
  }
}
