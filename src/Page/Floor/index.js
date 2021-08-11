import { Col, Row } from "antd";
import React, { Component } from "react";
import { FloorStyle } from "./style";

export default class Floor extends Component {
  render() {
    return (
      <FloorStyle>
        <div className="mainDiv">
        <div className="header">
            <h1>Floor/ Location Master</h1>
          </div>
          <div>
              <Row>
                  <Col></Col>
              </Row>
          </div>
        </div>
      </FloorStyle>
    );
  }
}
