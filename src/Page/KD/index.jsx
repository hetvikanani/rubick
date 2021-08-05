import React, { Component } from "react";
import EmployeeStyle from "./style";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import {FormButton,Label,FormInput} from '../../Components'

import Label from "../../Components/Label"
// import FormInput from "../../Components/Input";

export default class KdEmployee extends Component {
  render() {
    return (
      <EmployeeStyle>
        <div>
          <h3 className="header">Add New Employee</h3>
        </div>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div>
            <Row>
                <Col>
                <Label title="First Name"></Label>
                {/* <FormInput></FormInput> */}

                </Col>
            </Row>
        </div>
      </EmployeeStyle>
    );
  }
}
