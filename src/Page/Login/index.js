import React, { Component } from 'react'
import LoginStyle from "./style";
import FormInput from "../../Components/Input";
import ButtonCom from '../../Components/Button';

import { Formik, Form } from "formik";
import * as Yup from "yup";

const loginValidation = Yup.object().shape({
    username: Yup.string().trim().required(" "),
    password: Yup.string().trim().required("")
      .min(6, "Password must be at least 6 characters")
      .max(25, "Must be 25 or less")
      ,
  });

 class Login extends Component {
    constructor() {
        super();
        this.state = {
            disable:false,
            initial: {
              username: "",
              password: "",
            },
          };
      }


      handleSubmit=async(value , {Submiting})=>{
        try {
          this.setState({disable:true});
          setInterval(() => {
            this.setState({disable:false});        
          }, 5000);
          let data = {
            username: value.username.trim(),
            password:value.password.trim(),
           };
        //  await this.props.loginData(data);
          Submiting(false);
        } catch (error) {
          console.log(error, "handle error");
        }
      }
    
    render() {
        const {initial ,disable} = this.state;
        return (
            <LoginStyle>
             <div className="ParentDiv">
              <div className="form-div">
                  <Formik
                   initialValues={initial}
                   validationSchema={loginValidation}
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
              <Form onSubmit={handleSubmit} noValidate>


                  <label className="header">Login</label>
                      <div>
                        <label  className={errors.password && touched.password ? "error" : "labelUse"}>UserName</label>
                    </div>
                    <div>
                     <FormInput 
                      onBlur={handleBlur}
                      name="username"
                      value={values.username.trim()}
                      handleChange={handleChange}
                      className={errors.username && touched.username ? "error" : ""}/>
                    </div> 
                     <div>
                     <label className={errors.password && touched.password ? "error" : "labelPass"}>Password</label>
                    </div> 
                    <div>
                        <FormInput
                         max={25}
                         onBlur={handleBlur}
                         name="password"
                         value={values.password.trim()}
                         handleChange={handleChange}
                         className={errors.password && touched.password ? "error" : ""}
                         type="password"/>
                    </div> 
                     <div className="btnMrg">
                       <ButtonCom type="sumbit" disable={disable}>Submit</ButtonCom>
                    </div> 
                    </Form>
                     )}
             </Formik>
        
             </div>  
             </div>
            </LoginStyle>
        )
    }
}

export default Login;












{/* <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={loginValidation}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <Form
                        name="basic"
                        className="form-props"
                        onSubmit={handleSubmit}
                      >
             
                        <Divider /> 
                         <div className="">
                          <label className="header mb-2">Login</label>
                        </div>
                        <div>
                          <label
                            className={
                              errors.username && touched.username
                                ? "empty"
                                : "form-label"
                            }
                          >
                            User Name
                          </label>
                        </div>
                        <div>
                          <FormInput
                            onBlur={handleBlur}
                            name="username"
                            value={values.username.trim()}
                            handleChange={handleChange}
                            className={
                              errors.username && touched.username ? "empty" : ""
                            }
                          />
                        </div>
                        <div className="mt-3">
                          <label
                            className={
                              errors.username && touched.username
                                ? "empty"
                                : "form-label"
                            }
                          >
                            Password
                          </label>
                        </div>
                        <div>
                          <FormInput 
                            password={true}
                            max={25}
                            onBlur={handleBlur}
                            name="password"
                            value={values.password.trim()}
                            handleChange={handleChange}
                            className={
                              errors.password && touched.password ? "empty" : ""
                            }
                          />
                          {errors.password && touched.password ? (
                            <div className="form-error">{errors.password}</div>
                          ) : null}
                        </div>
                        <div className="mt-5">
                          <button disabled={this.state.disable}
                            className="btn  btn-primary text-white"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik> */}