import React, { Component } from "react";
import RequestStyle from "./style";
import { Label, Input, Select, Button, Check } from "../../Components/Form";
import { Col, Row } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getEmployee, getFloorList } from "../../Redux/Request/action";

const ValidationSchema = Yup.object().shape({
  floor: Yup.string().trim().required(" "),
  location: Yup.string().trim().required(" "),
  floor1: Yup.string().trim().required(" "),
  location1: Yup.string().trim().required(" "),
});



class Request extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      storefloor: "",
      storelocation: "",
      myData: [],
      priority: false,

      initState: {
        floor: "",
        location: "",
        floor1: "",
        location1: "",
        floorId: 0,
        locationId: 0,
        floor1Id: 0,
        location1Id: 0,
        employee:"",
      },
    };
  }
  async componentDidMount() {
    try {
      await this.props.getFloorList();
      await this.props.getEmployee();
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
  handleSubmit = (value) => {
    console.log("pickup floor is",value.floor,"pickup location is",value.location)
    console.log("destination floor is",value.floor1,"destination location is",value.location1)

    console.log("checkbox is:",this.state.priority,"employee name is",value.employee)
  };

  onChange = (val) => {
    const { count } = this.state;
    this.setState({ count: val ? count + 1 : count !== 1 ? count - 1 : count });
  };

  // check = (e) => {
  //  this.setState({ priority: !this.state.priority });
  // };

  render() {
    // console.log(
    //   "floor kro",
    //   // this.props.floor,
    //   // this.state.floorId,
    //   // this.state.locationId,
    //   // this.state.floor1Id,
    //   // this.state.location1Id,
    //   // this.state.priority
    // );
    // console.log("checkbox is:", this.state.priority);
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
                      data={this.state.myData}
                      placeholder="Floor"
                      className="floorSelect"
                      withID
                      selectClass={
                        errors.floor && touched.floor ? "empty" : "floorSelect"
                      }
                      name="floor"
                      value={values.floor}
                      onChange={(value, data) => {
                        this.setState({ from: value });
                        setFieldValue("floor", value);
                        setFieldValue("Location", " ");
                        console.log("pickup floor  is", value);
                        this.setState({ storefloor: value, floorId: data.id });
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
                      data={this.props.employees.map((g) => g.name)}
                      placeholder="To"
                      className="toSelect"
                      name="employee"
                      value={values.employee}
                      onChange={(value,data)=>{
                        setFieldValue("employee",value);
                      }}
                    />
                  </div>
                  <div>
                    <Select
                      data={this.state.myData}
                      placeholder="Floor"
                      className="floor1Select"
                      withID
                      selectClass={
                        errors.floor1 && touched.floor1
                          ? "empty"
                          : "floor1Select"
                      }
                      name="floor1"
                      value={values.floor1}
                      onChange={(value, data) => {
                        setFieldValue("floor1", value);
                        setFieldValue("Location1", " ");
                     
                        this.setState({
                          storelocation: value,
                          floor1Id: data.id,
                        });
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
                      className="location1Select"
                      withID
                      selectClass={
                        errors.location1 && touched.location1
                          ? "empty"
                          : "location1Select"
                      }
                      name="location1"
                      value={values.location1}
                      onChange={(value, data) => {
                        setFieldValue("location1", value);
                        this.setState({ location1Id: data.id });
                        console.log("destination location is", value);
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

                      <Check
                        onChange={() =>
                          this.setState({ priority: !this.state.priority })
                        }
                      />
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
  employees: state.request.employees,
});

const mapStateToDispatch = (dispatch) => ({
  getFloorList: (payload) => {
    dispatch(getFloorList(payload));
  },
  getEmployee: (payload) => {
    dispatch(getEmployee(payload));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(Request);
