import React, { Component } from "react";
import { Card } from "antd";
import Header from "./Header";

class CardDashboard extends Component {
  render() {
    const { value, per, name } = this.props.data;
    return (
      <Card hoverable style={{ width: 200 }}>
        <Header per={per} />
        <div style={{ textAlign: "left", marginTop:"1rem" }}>
          <div>{value}</div>
          <div>{name}</div>
        </div>
      </Card>
    );
  }
}

export default CardDashboard;
