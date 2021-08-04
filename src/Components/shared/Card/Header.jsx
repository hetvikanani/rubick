import React, { Component } from "react";
import { Badge, Tooltip } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

class Header extends Component {
  render() {
    const { per } = this.props;
    let isLess = true;

    if (per > 50) isLess = false;

    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>ison</div>
        <div>
          <Tooltip
            title={`${per}% ${isLess ? "Lower" : "Higher"} than last month`}
          >
            <Badge
              count={`${per}%`}
              style={{ background: `${isLess ? "red" : "green"}` }}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default Header;
