import React, { Component } from "react";
import RequestStyle from "./style";
import { Label, Input, Select, Button,Check } from "../../Components/Form";
import { Col, Row} from "antd";
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


const to = ["ramn", "ishita", "ruhi"];

class Request extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      storefloor: "",
      storelocation: "",

      initState: {
        floor: "",
        location: "",
        floor1: "",
        location1: "",
        floorId:0,
        locationId:0,
        floor1Id:0,
        location1Id:0,
      },
    };
  }
  async componentDidMount() {
    try {
      await this.props.getFloorList();
    } catch (error) {
      console.log(error);
    }
  }
  handleSubmit = () => {};

  onChange = (val) => {
    const { count } = this.state;
    this.setState({ count: val ? count + 1 : count !== 1 ? count - 1 : count });
  };



  render() {
    console.log("floor", this.props.floor);
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
                    {/* <Select>
                      {this.props.floor &&
                        this.props.floor.map((gmete) => (
                          <Select.Option>{gmete.floorname}</Select.Option>
                        ))}
                    </Select> */}
                    <Select
                      data={this.props.floor.map((g) => g.floorname)}
                      placeholder="Floor"
                      className="floorSelect"
                      selectClass={
                        errors.floor && touched.floor ? "empty" : "floorSelect"
                      }
                      name="floor"
                      value={values.floor}
                      onChange={(value) => {
                        this.setState({ from: value });
                        setFieldValue("floor", value);
                        setFieldValue("Location", " ");
                        console.log("onchange value and id", value);
                        this.setState({ storefloor: value });
                      }}
                    />
                  </div>

                  <div>
                    <Select
                      data={
                        this.props.floor.filter(
                          (g) => g.floorname === this.state.storefloor
                        )[0] &&
                        this.props.floor
                          .filter(
                            (g) => g.floorname === this.state.storefloor
                          )[0]
                          .locations.map((g) => g.location)
                      }
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
                      data={this.props.floor.map((g) => g.floorname)}
                      placeholder="Floor"
                      className="locationSelect"
                      selectClass={
                        errors.floor1 && touched.floor1
                          ? "empty"
                          : "locationSelect"
                      }
                      name="floor1"
                      value={values.floor1}
                      onChange={(value) => {
                        setFieldValue("floor1", value);
                        setFieldValue("Location1", " ");
                        console.log("onchange value", value);
                        this.setState({ storelocation: value });
                      }}
                    />
                  </div>
                  <div>
                    <Select
                      data={
                        this.props.floor.filter(
                          (g) => g.floorname === this.state.storelocation
                        )[0] &&
                        this.props.floor
                          .filter(
                            (g) => g.floorname === this.state.storelocation
                          )[0]
                          .locations.map((g) => g.location)
                      }
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
                      
                      <Check/>
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
  loading: state.request.loading,
  message: state.request.message,
  error: state.request.error,
  floor: state.request.floor,
});

const mapStateToDispatch = (dispatch) => ({
  getFloorList: (payload) => {
    dispatch(getFloorList(payload));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(Request);
