import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { createUser } from "../store/features/createUserSlice";
import { CreateUserRequest } from "../type/user";
import { fetchUsers } from "../store/features/userSlice";
import { Modal } from "./Modal";
import { closeModal } from "../store/Modal/modalSlice";

const Create = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<CreateUserRequest>({
    name: "",
    email: "",
    phone: 0,
    role: "",
  });

  const handleAddUser = async () => {
    if (Object.values(user).some((field) => field.trim() === "")) {
      console.log("Please fill in all fields");
    } else {
      try {
        const result = await dispatch(createUser(user));
        if (result.meta?.requestStatus === "fulfilled") {
          console.log("User created successfully");
          setUser({ name: "", email: "", phone: 0, role: "" });
          dispatch(fetchUsers());
          dispatch(closeModal());
        }
      } catch (error) {
        toast.error("An error occurred: " + error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      title="Add User"
      valueUser={user}
      onChange={handleChange}
      onSubmit={handleAddUser}
      buttonTittle="Add User"
      handleCancel={() => dispatch(closeModal())}
    />
  );
};

export default Create;
