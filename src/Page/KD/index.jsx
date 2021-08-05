import React, { Component } from "react";
import EmployeeStyle from "./style";
import { Avatar, Col, Row, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import {FormButton,Label,FormInput} from '../../Components'
import dummy from "../../Images/dummy.png";

import Label from "../../Components/Label";
import FormInput from "../../Components/Input";
import FormButton from "../../Components/Button";

function getBase64(file) {
  if (file)
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  else new Promise((resolve, reject) => reject());
}
export default class KdEmployee extends Component {
  dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  render() {
    return (
      <EmployeeStyle>
        <div className="mainDiv">
          <div className="header">
            <h3>Add New Employee</h3>
          </div>
          <div>
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}

            <div className="pro-pics-main">
              <Upload
                customRequest={this.dummyRequest}
                onChange={(e, b) => {
                  this.setState({ file: e.file.originFileObj });
                  getBase64(e.file.originFileObj)
                    .then((data) => this.setState({ newImage: data }))
                    .catch((e) => console.log(e));
                }}
                accept="image/*"
                showUploadList={false}
                name="file"
              >
                <div
                  className="pro-pics bgimg-main relative"
                  style={{
                    backgroundImage: `url("/Images/dummy.png")`,
                  }}
                >
                  <button className="edit">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </div>
              </Upload>
            </div>
          </div>
          <div>
            <Row gutter={24}>
              <Col span={12}>
                <Label title="First Name" className="labelDesign"></Label>
                <FormInput size={12}></FormInput>
              </Col>
              <Col span={12}>
                <Label title="First Name" className="labelDesign"></Label>
                <FormInput size={12}></FormInput>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Label title="First Name" className="labelDesign"></Label>
                <FormInput size={12}></FormInput>
              </Col>
              <Col span={12}>
                <Label title="First Name" className="labelDesign"></Label>
                <FormInput size={12} password={true}></FormInput>
              </Col>
            </Row>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <FormButton>Save</FormButton>
          </div>
        </div>
      </EmployeeStyle>
    );
  }
}
