import React, { Component } from "react";
import { Badge, Tooltip } from "antd";
import { CardStyle } from "./style";

// import { DownOutlined, UpOutlined } from "@ant-design/icons";

class Header extends Component {
  render() {
    const { per } = this.props;
    let isLess = true;

    if (per > 3) isLess = false;

    return (
      <div >
        {/* <div>icon</div> */}
        <div className="headerDiv">
          <Tooltip
            title={`${per}% ${isLess ? "Lower" : "Higher"} than last month`}
          >
            <Badge
              count={`${per}%`}
              style={{ background: `${isLess ? "red" : "green"}` }}
              className="badge"
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default Header;
