import React, { Component } from "react";
import { FarmStyle } from "./style";
import {
  Input,
  Space,
  Row,
  Col,
  Menu,
  Button,
  Image,
  Card,
  Divider,
} from "antd";
// import FarmImg from "farm.png";

const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = (value) => console.log(value);

export default class Farm extends Component {
  render() {
    return (
      <div>
        <FarmStyle>
          <nav>
            <Row gutter={24} className="RowNav">
              <Col>
                <h2 className="header">crunchbase</h2>
              </Col>

              <Col>
                <Space direction="vertical">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{ width: 200 }}
                  />
                </Space>
              </Col>
              <Col>
                <Menu
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <SubMenu key="sub4" title="Advanced Search">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Col>
              <Col>
                <Button className="BtnTry">TRY FOR FREE</Button>
              </Col>
              <Col>
                <Menu
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <SubMenu key="sub4" title="Resources">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Col>
              <Col>
                <Button className="BtnLog">Log In</Button>
              </Col>
            </Row>
          </nav>
          <Row gutter={24} className="aboutRow">
            <Col span={7}>
              <Card style={{ width: 400 }}>
                <h1>About</h1>
                <p>
                  FarmLead is North America's grain marketplace. Changing the
                  way farmers sell grain.
                </p>
                <p>Ottawa, Ontario, Canada</p>
                <p>11-50</p>
                <p>Series A</p>
                <p>Private</p>
                <p>FarmLead.com</p>
                <p>25,679</p>
              </Card>
            </Col>
            <div className="verticalLine"></div>
            <Col span={8}>
              <Card style={{ width: 400 }}>
                <h1>Highlights</h1>
                <p>
                  FarmLead is North America's grain marketplace. Changing the
                  way farmers sell grain.
                </p>
                <p>Ottawa, Ontario, Canada</p>
                <p>11-50</p>
              </Card>
            </Col>
            <div className="verticalLine"></div>s
            <Col span={8}>
              <Card style={{ width: 400 }}>
                <h1>Recent News & Activity </h1>
                <p>
                  News • Aug 19, 2020 <br />
                  Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                  Data Packs
                </p>
                <Divider style={{ backgroundColor: "#d3d3d3" }} />
                <p>
                  News • Aug 19, 2020 <br />
                  Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                  Data Packs
                </p>
                <Divider style={{ backgroundColor: "#d3d3d3" }} />
                <p>
                  News • Aug 19, 2020 <br />
                  Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                  Data Packs
                </p>
                <a href="#">VIEW ALL</a>
              </Card>
            </Col>
            

          </Row>
          <Row>
          <Card title="Default size card"  style={{ width: 300,border:"1px solid" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
          </Row>
        </FarmStyle>
      </div>
    );
  }
}
