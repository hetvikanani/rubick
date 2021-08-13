import React, { Component } from "react";
import { siderMenuStyle } from "./style";
// import {logo} from '/logoKd.svg'
import { Menu,Image } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

export default class SideMenu extends Component {
  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <siderMenuStyle>
        <div>
          <Menu defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
             {/* <Image src={logo}></Image> */}
            <SubMenu key="sub1" title="Dashboard"></SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Porter Master"
            ></SubMenu>
            <SubMenu key="sub4" title="Employee Master"></SubMenu>
            <SubMenu key="sub5" title="Floor/ Location Master"></SubMenu>
            <SubMenu key="sub6" title="Reports"></SubMenu>

          </Menu>
        </div>
      </siderMenuStyle>
    );
  }
}
