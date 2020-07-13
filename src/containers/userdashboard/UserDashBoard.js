import React from "react";
import UsersContent from "../../components/userDashboard/Content";
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

const { Header, Sider } = Layout;

const getCurrentuser = (state) => state.auth.currentUser;

const UserDashBoard = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = React.useState(false);

  const currentUser = useSelector(getCurrentuser);

  const toggle = () => {
    setCollapsed((pre) => !pre);
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh" }}
      >
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Users
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{
            padding: "0px",
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className='trigger'
              style={{
                alignSelf: "center",
                marginLeft: " 1rem",
              }}
              onClick={toggle}
            />
          ) : (
            <MenuFoldOutlined
              className='trigger'
              style={{
                alignSelf: "center",
                marginLeft: " 1rem",
              }}
              onClick={toggle}
            />
          )}
          <div>
            <span
              style={{
                marginRight: " 1rem",
              }}
            >
              {currentUser}
            </span>
            <Button
              style={{
                marginRight: " 1rem",
              }}
              onClick={() => dispatch({ type: "LOG_OUT" })}
            >
              Logout
            </Button>
          </div>
        </Header>
        <UsersContent />
      </Layout>
    </Layout>
  );
};

export default UserDashBoard;
