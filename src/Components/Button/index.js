import React, { Component } from 'react';
// import { Button } from 'antd';
import {BtnStyle} from './style';

class ButtonCom extends Component
{
     constructor(){
         super();
         this.state={

         }
     }
     render(){
         const {type}  = this.props;
         return(
             <>
             <BtnStyle>
              <button className="Button-prop" type={type? type:"button"} onClick={this.props.onClick}>
               {this.props.children}
              </button>
             </BtnStyle>
             </>
         )
     }
}
export default ButtonCom;