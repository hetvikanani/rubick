import { Col, Row } from "antd";
import React, { Component } from "react";
import { FloorStyle } from "./style";
import { Input, FormCollapse } from "../../Components/Form";
// import { SearchOutlined } from "@ant-design/icons";
// import Vector from "./Vector.svg";
// import Map from "./Group 33.svg";
const headerArr = ["Floor-1", "Floor-2", "Floor-3", "Floor-4", "Floor-5"];

export default class Floor extends Component {
  collapse = () => {
    // let array = [];
    return headerArr.map((g, i) => (
      <FormCollapse
        header={
          <div style={{ margin: "10px" }}>
            <h3 className="headerCol">{g}</h3>
          </div>
        }
        body={
          <>
            <p>Location : Lorem ipsum</p>
            <p>Location : Lorem ipsum</p>
            <p>Location : Lorem ipsum</p>
          </>
        }
      ></FormCollapse>
    ));
  };

  render() {
    return (
      <FloorStyle>
        <div className="mainDiv">
          <div className="header">
            <h1>Floor/ Location Master</h1>
          </div>
          <div>
            <Row>
              <Col>
                <Input
                  className="input"
                  style={{ border: "1px solid red" }}
                ></Input>
              </Col>
            </Row>
          </div>
          <div>{this.collapse()}</div>
        </div>
      </FloorStyle>
    );
  }
}
