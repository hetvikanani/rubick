import React, { Component } from "react";
import { Input } from "antd";

import { InputWrapper } from "./style";
const { TextArea } = Input;
class FormInput extends Component {
  render() {
    const {
      handleChange,
      className,
      size,
      formClass,
      row,
      password,
      max,
      ...props
    } = this.props;
    let length = max ? max : 45;
    return (
      <InputWrapper className={formClass ? formClass : ""}>
        {row ? (
          <TextArea
            rows={row}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={length}
            {...props}
          />
        ) : password ? (
          <Input.Password
            size={size}
            onChange={handleChange}
            className={className}
            autoComplete="off"
            maxLength={length}
            {...props}
          />
        ) : (
          <Input
            size={size}
            onChange={handleChange}
            className={className}
            maxLength={length}
            {...props}
          />
        )}
      </InputWrapper>
    );
  }
}
FormInput.defaultProps = {
  size: "middle",
  placeholder: "",
  tabIndex: "1",
  className: "",
  readOnly: false,
};
export default FormInput;
