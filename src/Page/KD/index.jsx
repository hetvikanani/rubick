import React, { Component } from "react";
import EmployeeStyle from "./style";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Label from "../../Components/Label";
import FormInput from "../../Components/Input";
import FormButton from "../../Components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  fName: Yup.string().trim().required(" "),
  lName: Yup.string().trim(),
  email: Yup.string().trim().email(),
  mobile: Yup.string().trim().min(10).max(10),
  username: Yup.string().trim().min(3).required(" "), 
  password: Yup.string().trim().min(4).required(" "),
});

export default class KdEmployee extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        fName: "",
        lName: " ",
        email: "",
        mobile: "",
        username: "",
        password: "",
      },
    };
  }
  handleSubmit = () => {};

  render() {
    const { initState } = this.state;

    return (
      <EmployeeStyle>
        <div className="mainDiv">
          <div className="header">
            <h3>Add New Employee</h3>
          </div>
          <div className="pro-pics bgimg-main relative">
            <Avatar size={100} icon={<UserOutlined />} />
            <button className="edit">
              {/* <i className="fa fa-pencil" aria-hidden="true" ></i> */}
            </button>
          </div>

          <Formik
            initialValues={initState}
            validationSchema={ValidationSchema}
            onSubmit={this.handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              onBlur,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form">
                  <Row gutter={24}>
                    <Col span={12}>
                      <Label
                        title="First Name"
                        className={
                          errors.fName && touched.fName
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        className={
                          errors.fName && touched.fName
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="fName"
                        value={values.fName}
                        handleChange={handleChange}
                      ></FormInput>
                    </Col>
                    <Col span={12}>
                      <Label
                        title="Last Name"
                        className={
                          errors.lName && touched.lName
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        className={
                          errors.lName && touched.lName
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="lName"
                        value={values.lName}
                        handleChange={handleChange}
                      ></FormInput>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Label
                        title="Email id"
                        className={
                          errors.email && touched.email
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        className={
                          errors.email && touched.email
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                      ></FormInput>
                      {errors.email && touched.email && (
                        <div className="form-error">{errors.email}</div>
                      )}
                    </Col>
                    <Col span={12}>
                      <Label
                        title="Mobile No"
                        className={
                          errors.mobile && touched.mobile
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        type="number"
                        className={
                          errors.mobile && touched.mobile
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="mobile"
                        value={values.mobile}
                        handleChange={handleChange}
                      ></FormInput>
                      {errors.mobile && touched.mobile && (
                        <div className="form-error">{errors.mobile}</div>
                      )}
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Label
                        title="Username"
                        className={
                          errors.username && touched.username
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        className={
                          errors.username && touched.username
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="username"
                        value={values.username}
                        handleChange={handleChange}
                      ></FormInput>
                      {errors.username && touched.username && (
                        <div className="form-error">{errors.username}</div>
                      )}
                    </Col>
                    <Col span={12}>
                      <Label
                        title="Password"
                        className={
                          errors.password && touched.password
                            ? "empty"
                            : "labelDesign"
                        }
                      ></Label>
                      <FormInput
                        size={12}
                        password={true}
                        className={
                          errors.password && touched.password
                            ? "empty"
                            : "inputDesign"
                        }
                        onBlur={handleBlur}
                        name="password"
                        value={values.password}
                        handleChange={handleChange}
                      ></FormInput>
                      {errors.password && touched.password && (
                        <div className="form-error">{errors.password}</div>
                      )}
                    </Col>
                  </Row>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <FormButton htmlType="submit">Save</FormButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </EmployeeStyle>
    );
  }
}

{
  /* <div className="pro-pics-main">
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
            </div> */
}
