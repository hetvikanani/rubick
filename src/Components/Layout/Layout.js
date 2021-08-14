import React, { Component } from "react";
import logo from "./logoKd.svg";
import { LayoutStyle } from "./style";
import Header from "../Header/index";
import {
  Layout,
  Menu
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  BellOutlined,
  HomeOutlined,
} from "@ant-design/icons";


const {  Sider } = Layout;

class MyLayout extends Component {
  render() {
    return (
      <LayoutStyle>
        <div className="mainDiv">
        <Header/>
          <Layout className="layout">        
            <Sider  width={200}>
            
              <div className="myCustomLogo">
                <img src={logo} className="logo"></img>
              </div>
              <Menu
                mode="inline"  
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                className='menu'
              > 
                <Menu.Item key="sub1" icon={<HomeOutlined />}>
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
                </Menu.Item>
              </Menu> 
            </Sider>
          </Layout>
        </div>
      </LayoutStyle>
    );
  }
}

export default MyLayout;
