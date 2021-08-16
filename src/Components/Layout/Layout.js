import React, { Component } from "react";
import logo from "./logoKd.svg";
import { LayoutStyle } from "./style";
import Header from "../Header/index";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  BellOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import options from "./Options";

const { Sider } = Layout;

class MyLayout extends Component {
  render() {
    return (
      <LayoutStyle>
        <div className="mainDiv">
          {/* <Header  xs= {24} sm= {14} md={16} lg= {18} xl={19}/> */}
          <Layout className="layout">
            <Sider>
              <div className="myCustomLogo">
                <img src={logo} className="logo"></img>
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                className="menu"
              >
                {options.map((data) => (
                  <Menu.Item key={data.key}>
                    <div>
                      <i style={{ padding: "10px" }} className={data.icon}></i>
                      <span>{data.label}</span>
                    </div>
                  </Menu.Item>
                ))}
                {/* <Menu.Item key="sub1" icon={<A />}>
                  Dashboard
                </Menu.Item>
                <Menu.Item key="sub2" icon={<LaptopOutlined />}>
                  Porter Master
                </Menu.Item>
                <Menu.Item key="sub3" icon={<NotificationOutlined />}>
                  Employee Master
                </Menu.Item>
                <Menu.Item key="sub4" icon={<NotificationOutlined />}>
                  Floor/ Location Master
                </Menu.Item>
                <Menu.Item key="sub5" icon={<NotificationOutlined />}>
                  Reports
                </Menu.Item> */}
              </Menu>
            </Sider>
          </Layout>
        </div>
      </LayoutStyle>
    );
  }
}

export default MyLayout;
