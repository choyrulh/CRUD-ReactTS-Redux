import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { createUser } from "../store/features/createUserSlice";
import { CreateUserRequest } from "../type/user";
import { Navigate } from "react-router-dom";

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
      toast.error("All fields are required");
    } else {
      try {
        const result = await dispatch(createUser(user));
        if (result.meta?.requestStatus === "fulfilled") {
          toast.success("User created successfully");
          setUser({ name: "", email: "", phone: 0, role: "" });
          setTimeout(() => <Navigate to={"/"} />, 1000);
        }
      } catch (error: any) {
        toast.error("An error occurred: " + error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  return (
    <div className="w-full min-h-[calc(100vh-70px)] pt-8">
      <div className="pl-10"></div>
      <div className="w-1/3 h-auto border m-auto  shadow-md rounded-md p-5">
        <h3 className="text-[21px] font-semibold text-center underline mb-10">
          Create New User
        </h3>
        <div className="w-11/12 grid grid-cols-1 gap-5 m-auto">
          {["name", "email", "phone", "role"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={`${
                field.charAt(0).toUpperCase() + field.slice(1)
              }...`}
              className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
              value={user[field as keyof CreateUserRequest]}
              onChange={handleChange}
            />
          ))}
          <button
            onClick={handleAddUser}
            className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-green-500 hover:bg-green-600 hover:transition-all hover:duration-300 hover:ease-in-out m-auto text-center font-medium"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
