import { Button, Input, Menu, Modal, Space } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onMenuClick = (items) => {
    navigate(`/${items.key}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container ">
      <Space className="flex justify-end">
        <Search
          className="sm:hidden lg:block"
          placeholder="input search text"
          // onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Menu
          onClick={onMenuClick}
          className="flex justify-end px-10 bg-slate-400"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={[
            { label: "Home", key: "" },
            { label: "Login", key: "Login" },
          ]}
        />

        <Button block="true" type="primary" onClick={showModal}>
          Login Here
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Space>
    </div>
  );
};

export default Navbar;
