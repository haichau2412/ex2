import { useState } from "react";
import { checkDeleteCurrentUser } from "../../../redux/userManagement/actions";
import { useDispatch } from "react-redux";

const useDeleteModal = () => {
  const dispatch = useDispatch();

  const [isVisible, setVisible] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");

  const handleClick = ({ userId, username }) => {
    setCurrentUserId(userId);
    setCurrentUsername(username);
    setVisible(true);
  };
  const handleOk = (e) => {
    dispatch(checkDeleteCurrentUser(currentUserId));
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return {
    handleClick,
    isVisible,
    handleOk,
    handleCancel,
    currentUsername,
  };
};

export default useDeleteModal;
