import React from "react";
import { useSelector } from "react-redux";
import { Table, Space, Button } from "antd";

import useAddSearch from "./TableUltilities/useAddSearch";
import { Layout } from "antd";
import CreateUserModal from "./addModal/CreateUserModal";
import useEditModalHook from "./editModal/useEditModalHook";
import useDeleteModal from "./deleteModal/useDeleteModal";
import EditModal from "./editModal/EditModal";
import DeleteModal from "./deleteModal/DeleteModal";

const { Content } = Layout;
const { Column } = Table;

const getCurrentUserId = (state) => state.auth.currentUserId;

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
  const editUltilities = useEditModalHook();

  const deleteUltilities = useDeleteModal();

  const users = useSelector(getUsersData);

  const getColumnSearchProps = useAddSearch();

  const currentLoginUserId = useSelector(getCurrentUserId);

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
      <EditModal cockpit={{ ...editUltilities }} />
      <DeleteModal cockpit={{ ...deleteUltilities }}></DeleteModal>
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
              {currentLoginUserId !== record.key ? (
                <Button
                  onClick={() =>
                    editUltilities.handleClick({
                      userId: record.key,
                      username: record.username,
                      phone: record.phone,
                    })
                  }
                >
                  Edit
                </Button>
              ) : (
                <Button disabled>Edit</Button>
              )}

              {currentLoginUserId !== record.key ? (
                <Button
                  danger
                  onClick={() =>
                    deleteUltilities.handleClick({
                      userId: record.key,
                      username: record.username,
                    })
                  }
                >
                  Delete
                </Button>
              ) : (
                <Button disabled>Delete</Button>
              )}
            </Space>
          )}
        />
      </Table>
    </Content>
  );
};

export default UserContent;
