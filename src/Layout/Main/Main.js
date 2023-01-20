import { Input, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Footer from "../../Pages/Shared/Footer";
import Navbar from "../../Pages/Shared/Navbar";
import Banner from "../../Pages/Home/Banner";

const Main = () => {
  const navigate = useNavigate();
  const onSelect = (items) => {
    navigate(`/${items.key}`);
  };
  return (
    <div>
      <Layout>
        <Sider
          style={{ background: "#ffffff" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="bg-slate-400 text-white text-center py-4">
            <Link to="/">
              <h1 className="text-2xl">Haat Bazaar</h1>
            </Link>
          </div>
          <Menu
            theme="light"
            mode="inline"
            onClick={onSelect}
            defaultSelectedKeys={["4"]}
            items={[
              { label: "All Categories", key: "allCategories" },
              { label: "Eggs", key: "eggs" },
              { label: "Fresh Fruits", key: "freshFruits" },
              { label: "Fish", key: "fish" },
              { label: "Cooking Items", key: "cookingItems" },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              backgroundColor: "#8394a5",
            }}
            className="bg-slate-500"
          >
            <Navbar></Navbar>
          </Header>
          <Content
            style={{
              margin: "0px 0px 4px 4px",
            }}
          >
            <div>
              <Outlet></Outlet>
            </div>
          </Content>

          <Footer></Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
