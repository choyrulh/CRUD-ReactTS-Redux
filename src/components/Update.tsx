import React, { useState } from "react";
import { Modal } from "./Modal";
import { closeModal } from "../store/Modal/modalSlice";
import { fetchUsers } from "../store/features/userSlice";
import { updateUser } from "../store/features/updateUserSlice";
import { useAppDispatch } from "../store/hooks";
import { UpdateUserRequest, User } from "../type/user";

function Update() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UpdateUserRequest>({
    userId: 0,
    updateUserData: {
      name: "",
      email: "",
      phone: 0,
      role: "",
    },
  });

  const handleEdit = (userId: number, updateUserData: Partial<User>) => {
    dispatch(updateUser({ userId, updateUserData }))
      .unwrap()
      .then(() => {
        dispatch(fetchUsers());
        dispatch(closeModal());
        console.log("User updated successfully");
      })
      .catch((error) => {
        // Handle update error
        console.error("Failed to update user: " + error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      updateUserData: {
        ...user.updateUserData,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Modal
      title="Edit User"
      valueUser={user?.updateUserData}
      onChange={handleChange}
      onSubmit={() => handleEdit(user.userId, user.updateUserData)}
      buttonTittle="Update User"
      handleCancel={() => dispatch(closeModal())}
    />
  );
}

export default Update;
