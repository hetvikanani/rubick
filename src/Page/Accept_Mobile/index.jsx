import React, { Component } from "react";
import { AcceptStyle } from "./style";
import { Switch, Image } from "antd";
import notification from "../../Images/notification.svg";
import avatar from "../../Images/avatar.svg";
import { FormCollapse } from "../../Components/Form";
let array = ["gh", "gh"];


export default class AcceptMob extends Component {

collapse=()=>{
    return array.map((g)=>(
        <FormCollapse
        header={
            <div >
              <h3>{g}</h3>
            </div>
          }></FormCollapse>
    )

    )
}


  render() {
    return (
      <AcceptStyle>
        <div className="mainDiv">
          <div className="header">
            <Switch className="switch"></Switch>
            <Image src={notification} className="notification"></Image>
            <Image src={avatar} className="avatar"></Image>
          </div>
         <div>{this.collapse()}</div> 
        </div>
      </AcceptStyle>
    );
  }
}
