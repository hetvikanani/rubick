import React, { Component } from "react";
import RequestStyle from "./style";
<<<<<<< HEAD
import { Label, Input, Select, Button,Check } from "../../Components/Form";
import { Col, Row} from "antd";
=======
import { Label, Input, Select, Button, Check } from "../../Components/Form";
import { Col, Row } from "antd";
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
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
<<<<<<< HEAD
=======
      myData: [],
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2

      initState: {
        floor: "",
        location: "",
        floor1: "",
        location1: "",
        floorId: 0,
        locationId: 0,
        floor1Id: 0,
        location1Id: 0,
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

  componentDidUpdate() {
    if (
      this.props.floor &&
      this.props.floor.length > 0 &&
      this.state.myData.length === 0
    ) {
      const data = this.props.floor.map((g) => ({
        ...g,
        id: g.floorid,
        value: g.floorname,
        locations: g.locations.map((x) => ({
          ...x,
          id: x.locationid,
          value: x.location,
        })),
      }));
      this.setState({ myData: data });
      console.log(data, "data");
    }
  }
  handleSubmit = () => {};

  onChange = (val) => {
    const { count } = this.state;
    this.setState({ count: val ? count + 1 : count !== 1 ? count - 1 : count });
  };

  render() {
<<<<<<< HEAD
    console.log("floor", this.props.floor);
=======
    console.log(
      "floor",
      this.props.floor,
      this.state.floorId,
      this.state.locationId,
      this.state.floor1Id,
      this.state.location1Id
    );
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
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
<<<<<<< HEAD
                      data={this.props.floor.map((g) => g.floorname)}
=======
                      data={this.state.myData}
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
                      placeholder="Floor"
                      className="floorSelect"
                      withID
                      selectClass={
                        errors.floor && touched.floor ? "empty" : "floorSelect"
                      }
                      name="floor"
                      value={values.floor}
<<<<<<< HEAD
                      onChange={(value) => {
                        setFieldValue("floor", value);
                        setFieldValue("Location", " ");
                        console.log("onchange value and id", value);
                        this.setState({ storefloor: value });
=======
                      onChange={(value, data) => {
                        this.setState({ from: value });
                        setFieldValue("floor", value);
                        setFieldValue("Location", " ");
                        console.log("onchange value and id", value, data);
                        this.setState({ storefloor: value, floorId: data.id });
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
                      }}
                    />
                  </div>

                  <div>
                    <Select
                      data={
                        this.state.myData.filter(
                          (g) => g.floorname === this.state.storefloor
                        )[0] &&
                        this.state.myData.filter(
                          (g) => g.floorname === this.state.storefloor
                        )[0].locations
                      }
                      placeholder="Location"
                      className="locationSelect"
                      withID
                      selectClass={
                        errors.location && touched.location
                          ? "empty"
                          : "locationSelect"
                      }
                      name="location"
                      value={values.location}
                      onChange={(value, data) => {
                        setFieldValue("location", value);
                        this.setState({ locationId: data.id });
                      }}
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
<<<<<<< HEAD
                      data={this.props.floor.map((g) => g.floorname)}
=======
                      data={this.state.myData}
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
                      placeholder="Floor"
                      className="locationSelect"
                      withID
                      selectClass={
                        errors.floor1 && touched.floor1
                          ? "empty"
                          : "locationSelect"
                      }
                      name="floor1"
                      value={values.floor1}
<<<<<<< HEAD
                      onChange={(value) => {
                        setFieldValue("floor1", value);
                        setFieldValue("Location1", " ");
                        console.log("onchange value", value);
                        this.setState({ storelocation: value });
=======
                      onChange={(value, data) => {
                        setFieldValue("floor1", value);
                        setFieldValue("Location1", " ");
                        console.log("onchange value", value, data);
                        this.setState({
                          storelocation: value,
                          floor1Id: data.id,
                        });
>>>>>>> bb34255e8a2bebb3f88ecf1cda8117836163dfb2
                      }}
                    />
                  </div>
                  <div>
                    <Select
                      data={
                        this.state.myData.filter(
                          (g) => g.floorname === this.state.storelocation
                        )[0] &&
                        this.state.myData.filter(
                          (g) => g.floorname === this.state.storelocation
                        )[0].locations
                      }
                      placeholder="Location"
                      className="locationSelect"
                      withID
                      selectClass={
                        errors.location1 && touched.location1
                          ? "empty"
                          : "locationSelect"
                      }
                      name="location1"
                      value={values.location1}
                      onChange={(value, data) => {
                        setFieldValue("location1", value);
                        this.setState({ location1Id: data.id });
                      }}
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

                      <Check />
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
