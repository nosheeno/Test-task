import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import { Wrapper } from "./styles";

const Siderbar = () => {
  return (
    <Wrapper>
      <Menu mode="inline" className="theme" selectedKeys="/">
        <Menu.Item key="/">
          <Link to="/">
            <SolutionOutlined />
            <span>Continents</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
};
export default Siderbar;
