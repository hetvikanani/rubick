import React, { Component } from "react";
import { Collapse } from "antd";
import { CollapseStyle } from "./style";

const { Panel } = Collapse;



export default class FormCollapse extends Component {
  render() {
      const {collapseKd,data}=this.props;
    return (
      <CollapseStyle>
        
       
        <Collapse accordion  bordered={false} defaultActiveKey={["1"]} onChange={collapseKd} expandIconPosition="right"  >
        
        {data &&
            data.length > 0 &&
            data.map((a, i) => (
              <Panel header={a.header} key={i}>
                {a.body}
              </Panel>
            ))}
        
         
        
          

        </Collapse>
       
      </CollapseStyle>
    );
  }
}




