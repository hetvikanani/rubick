import React, { Component } from "react";
import { Card } from "antd";
import Header from "./Header";
import { CardStyle } from "./style";

class CardDashboard extends Component {
  render() {
    const { value, per, name } = this.props.data;
    return (
      <CardStyle>
        
        <Card className="reportBox zoomIn">
        <Card className="card">
          <Header per={per} />
          <div>
            <h1 className="head">{value}</h1>
            <div className="tag">{name}</div>
          </div>
          </Card>
        </Card>
         
        
      </CardStyle>
    );
  }
}

export default CardDashboard;
