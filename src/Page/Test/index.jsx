import React, { Component } from "react";
import { TestStyle } from "./style";
import { Row, Col } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

import MyLayout from "../../Components/Layout/Layout";
import Header from "../../Components/Header";
import { Label, Input, Select, Button, Check } from "../../Components/Form";

let floor = ["floor1", "floor2"];
let location = ["location1", "location2"];
export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  onChange = (val) => {
    const { count } = this.state;
    this.setState({ count: val ? count + 1 : count !== 1 ? count - 1 : count });
  };
  render() {
    return (
      <TestStyle>
        <Row>
          <Col xs={24} sm={10} md={8} lg={6} xl={5}>
            <MyLayout></MyLayout>
          </Col>

          <Col xs={24} sm={14} md={16} lg={18} xl={19}>
            <Header></Header>
            <div className="mainDiv">
              <div className="header">
                <h3>Add New Request</h3>
              </div>
              <div className="pick">
                <Label title="PickUp" className="label"></Label>
                <div>
                  <Select
                    data={floor}
                    placeholder="Floor"
                    className="floorSelect"
                    name="floor"
                  />
                </div>

                <div>
                  <Select
                    data={location}
                    placeholder="Location"
                    className="locationSelect"
                    withID
                    name="location"
                  />
                </div>
              </div>
              <div className="destination">
                <Label title="Destination" className="label"></Label>
                <div>
                  <Select
                    placeholder="To"
                    className="toSelect"
                    name="employee"
                  />
                </div>
                <div>
                  <Select
                    data={floor}
                    placeholder="Floor"
                    className="floor1Select"
                    name="floor1"
                  />
                </div>
                <div>
                  <Select
                    data={location}
                    placeholder="Location"
                    className="location1Select"
                    name="location1"
                  />
                </div>
              </div>
              <div>
                <Row className="row">
                  <Col xs={24} sm={10} md={8} lg={6} xl={5}>
                    <Label title="Proters" className="proters"></Label>
                    <div>
                      <span>
                        <PlusCircleOutlined
                          onClick={() => this.onChange(true)}
                        />
                      </span>
                      <span className="count">{this.state.count}</span>
                      <span>
                        <MinusCircleOutlined
                          onClick={() => this.onChange(false)}
                        />
                      </span>
                    </div>
                  </Col>
                  <Col
                    className="priorityCol"
                    xs={24}
                    sm={14}
                    md={16}
                    lg={18}
                    xl={19}
                  >
                    <Label title="Priority" className="priority"></Label>

                    <Check
                      onChange={() =>
                        this.setState({ priority: !this.state.priority })
                      }
                    />
                  </Col>
                </Row>
              </div>
              <div className="remarkDiv">
                <Label title="Remark" className="remark "></Label>
                <Input row={3} className="textarea" />
              </div>
              <div className="button">
                <Button htmlType="submit">Start Job</Button>
              </div>
            </div>
          </Col>
        </Row>
      </TestStyle>
    );
  }
}
