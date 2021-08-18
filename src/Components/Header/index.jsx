import React, { Component } from "react";
import { HeaderStyle } from "./style";
import { Image, Popover } from "antd";
import notification from "../../Images/notification.svg";
import avatar from "../../Images/avatar.svg";
import vector from "../../Images/Vector.svg";

const content = (
  <div>
    <div style={{display:"flex",cursor:"pointer"}} >
      <Image src={vector} width={20} style={{position:"relative",display:"inline-block"}}></Image>
      <span style={{marginLeft:"10px"}}>Change Password</span>
    </div>
    <div style={{display:"flex",cursor:"pointer"}} >
      <Image src={vector} width={20} style={{position:"relative",display:"inline-block"}}></Image>
      <span style={{marginLeft:"10px"}}>Log Out</span>
    </div>
  </div>
);

export default class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <div className="subDiv">
          <div className="headIcon">
            <Image
              className="avatar"
              src={notification}
              preview={false}
              width={24}
            />
          </div>

          <Popover placement="bottomRight" content={content} trigger="click">
            <div className="headIcon">
              <Image src={avatar} preview={false} width={24} />
            </div>
          </Popover>
          <h3 className="header">Hi, Admin</h3>
        </div>
      </HeaderStyle>
    );
  }
}
