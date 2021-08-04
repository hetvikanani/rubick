import React, { Component } from 'react'
import  DashboardStyle  from "./style";
import { TopRowValue } from "./constant";
import { Row, Col, Card} from 'antd';




export default class Dashboard extends Component {
    topRowUi = () => {
        try {
          return TopRowValue.map((a, i) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i} style={{border:"1px solid green"}}>

           <Card className="box">
           <h1>dfgmkdfg</h1>
          
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
                 <Col xs={24} sm={14} md={16} lg={18} xl={19} >
                    <DashboardStyle>
                    <div className="displayDiv">
                    <h2 className="title">General Report</h2>
                    <Row className="top-row-box">{this.topRowUi()}</Row>
                    </div>
                    </DashboardStyle>
                 </Col>
            </Row>
        )
    }
}
