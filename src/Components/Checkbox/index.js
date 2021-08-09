import React, { Component } from "react";
import { Checkbox } from "antd";
import { StyleContainer } from "./style";

export default class Check extends Component {
  render() {
    const { text, onChange } = this.props;
    return (
      <StyleContainer>
        <Checkbox onChange={onChange}>{text}</Checkbox>
      </StyleContainer>
    );
  }
}
