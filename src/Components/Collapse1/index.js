import React, { Component } from "react";
import { Collapse } from "antd";
import { CollapseStyle } from "./style";

const { Panel } = Collapse;



export default class FormCollapse extends Component {
  render() {
      const {body,key,header,collapseKd}=this.props;
    return (
      <CollapseStyle>
        <Collapse defaultActiveKey={["1"]} onChange={collapseKd} expandIconPosition="right">
          <Panel header={header} key={key}>
            {body}
          </Panel>

        </Collapse>
      </CollapseStyle>
    );
  }
}




