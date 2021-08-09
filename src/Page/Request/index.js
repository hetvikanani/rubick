import React, { Component } from "react";
import RequestStyle from "./style";
import { Label, Input, Select, Button } from "../../Components/Form";
import { Col, Row, Checkbox } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getFloorList } from "../../Redux/Request/action";

const ValidationSchema = Yup.object().shape({
  floor: Yup.string().trim().required(" "),
  location: Yup.string().trim().required(" "),
  floor1: Yup.string().trim().required(" "),
  location1: Yup.string().trim().required(" "),
});

const floor = ["floor1", "floor2"];
const location = ["location1", "location2"];
const to = ["iscon", "proex"];

class Request extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,

      initState: {
        floor: "",
        location: "",
        floor1: "",
        location1: "",
      },
    };
  }

  handleSubmit = () => {};

  onChange = (val) => {
    const { count } = this.state;
    this.setState({ count: val ? count + 1 : count !== 1 ? count - 1 : count });
  };

  async componentDidMount() {
    try {
      await this.props.getFloorList();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { initState } = this.state;
    return (
      <RequestStyle>
        <div className="mainDiv">
          <div className="header">
            <h1>Add New Request</h1>
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
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="pick">
                  <Label title="PickUp" className="label"></Label>
                  <div>
                    <Select
                      data={floor}
                      placeholder="Floor"
                      className="floorSelect"
                      selectClass={
                        errors.floor && touched.floor ? "empty" : "floorSelect"
                      }
                      name="floor"
                      value={values.floor}
                      onChange={(value) => {
                        setFieldValue("floor", value);
                        setFieldValue("Location", " ");
                      }}
                    />
                  </div>

                  <div>
                    <Select
                      data={location}
                      placeholder="Location"
                      className="locationSelect"
                      selectClass={
                        errors.location && touched.location
                          ? "empty"
                          : "locationSelect"
                      }
                      name="location"
                      value={values.location}
                      onChange={(value) => setFieldValue("location", value)}
                    />
                  </div>
                </div>
                <div className="destination">
                  <Label title="Destination" className="label"></Label>
                  <div>
                    <Select
                      data={to}
                      placeholder="To"
                      className="floorSelect"
                    />
                  </div>
                  <div>
                    <Select
                      data={floor}
                      placeholder="Floor"
                      className="locationSelect"
                      selectClass={
                        errors.floor1 && touched.floor1
                          ? "empty"
                          : "locationSelect"
                      }
                      name="floor1"
                      value={values.floor1}
                      onChange={(value) => setFieldValue("floor1", value)}
                    />
                  </div>
                  <div>
                    <Select
                      data={location}
                      placeholder="Location"
                      className="locationSelect"
                      selectClass={
                        errors.location1 && touched.location1
                          ? "empty"
                          : "locationSelect"
                      }
                      name="location1"
                      value={values.location1}
                      onChange={(value) => setFieldValue("location1", value)}
                    />
                  </div>
                </div>
                <div>
                  <Row className="row">
                    <Col>
                      <Label title="Proters" className="proters"></Label>
                      <div>
                        <span>
                          <PlusCircleOutlined
                            onClick={() => this.onChange(true)}
                          />
                        </span>
                        <span className="count">{this.state.count}</span>
                        <span>
                          <MinusCircleOutlined
                            onClick={() => this.onChange(false)}
                          />
                        </span>
                      </div>
                    </Col>
                    <Col className="priorityCol">
                      <Label title="Priority" className="priority"></Label>
                      <Checkbox />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Label title="Remark" className="remark"></Label>
                  <Input row={3} className="textarea" />
                </div>
                <div className="button">
                  <Button htmlType="submit">Start Job</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </RequestStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.Request.loading,
  message: state.Request.message,
  error: state.Request.error,
  floor: state.Request.floor,
});

const mapStateToDispatch = (dispatch) => ({
  getFloorList: (payload) => {
    dispatch(getFloorList(payload));
  },
});

export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(Request)
);
