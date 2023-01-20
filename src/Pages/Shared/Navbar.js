import { Input, Menu, Space } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onMenuClick = (items) => {
    navigate(`/${items.key}`);
  };
  return (
    <div className="container">
      <Menu
        onClick={onMenuClick}
        className="bg-slate-400 flex justify-end px-10"
        mode="horizontal"
        defaultSelectedKeys={["Home"]}
        items={[
          { label: "Home", key: "" },
          { label: "Login", key: "Login" },
        ]}
      />
    </div>
  );
};

export default Navbar;
