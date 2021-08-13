import React, { Component } from "react";
import { DashEmpStyle } from "./style";
import { Button, FormCollapse } from "../../Components/Form";

let toArr = [{ to: "To",gupta:"gupta" }, { to: "To",gupta:"gupta" }, { to: "To",gupta:"gupta"  }];

export default class DashEmp extends Component {
  dashboard = () => {
    let array = [];
    toArr.forEach((e, i) => {
      array.push({
        header: (
          <div className="headerDiv">
            <p className="pTag1">
              {e.to}
              <span className="spanTag1">:{e.gupta}</span>
            </p>

            <p className="pTag2">
              Status <span className="spanTag2">:Finished</span>
            </p>

            <p className="pTag3">
              Destination <span className="spanTag3">:3rd Floor </span>
            </p>
          </div>
        ),
        body: (
          <div className="headerDiv">
            <p className="pTag4">
              Porter <span className="spanTag4">2</span>
            </p>
          </div>
        ),
      });
    });
    return <FormCollapse data={array} />;
  };

  //   return toArr.map((g) => (
  //     <FormCollapse
  //       header={

  //       }
  //       body={

  //       }
  //     ></FormCollapse>
  //   ));
  // };

  render() {
    return (
      <DashEmpStyle>
        <div className="mainDiv">
          <h2>Dashboard</h2>
          <div className="btn">
            <Button>Add New Request</Button>
          </div>
          <div>{this.dashboard()}</div>
        </div>
      </DashEmpStyle>
    );
  }
}
