import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space, Button } from "antd";
import { checkDeleteCurrentUser } from "../../redux/userManagement/actions";
import useAddSearch from "./dataTable/useAddSearch";
import { Layout } from "antd";
import CreateUserModal from "./addModal/CreateUserModal";
import useEditModalHook from "./editModal/useEditModalHook";
import CreateEditModal from "./editModal/CreateEditModal";

const { Content } = Layout;
const { Column } = Table;

const formatDate = (createAt) => {
  const date = new Date(createAt);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
const getUsersData = (state) =>
  state.usr.users.map(({ username, phone, id, createAt }) => ({
    username,
    phone,
    key: id,
    createAt: formatDate(createAt),
  }));

const UserContent = () => {
  const dispatch = useDispatch();
  const {
    handleCancel,
    handleOk,
    handleClick,
    userId,
    isVisible,
  } = useEditModalHook();

  const users = useSelector(getUsersData);

  const getColumnSearchProps = useAddSearch();

  return (
    <Content
      className='site-layout-background'
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <CreateUserModal />
      <CreateEditModal
        cockpit={{ handleOk, handleCancel, userId, isVisible }}
      />
      <Table dataSource={users}>
        <Column
          title='Username'
          dataIndex='username'
          key='username'
          width='30%'
          {...getColumnSearchProps("username")}
        />
        <Column
          title='Phone'
          dataIndex='phone'
          key='phone'
          width='30%'
          {...getColumnSearchProps("phone")}
        />
        <Column
          title='CreateAt'
          dataIndex='createAt'
          key='createAt'
          width='30%'
          {...getColumnSearchProps("createAt")}
        />
        <Column
          title='Action'
          key='action'
          render={(text, record) => (
            <Space size='middle'>
              <Button onClick={() => handleClick(record.key)}>Edit</Button>
              <Button
                onClick={() => dispatch(checkDeleteCurrentUser(record.key))}
              >
                Remove user
              </Button>
            </Space>
          )}
        />
      </Table>
    </Content>
  );
};

export default UserContent;
