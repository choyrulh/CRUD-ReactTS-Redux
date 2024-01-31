import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchUsers } from "../store/features/userSlice";
import toast from "react-hot-toast";
import { deleteUser } from "../store/features/deleteUserSlice";
import { openModal } from "../store/Modal/modalSlice";
import { User } from "../type/user";
import { updateUser } from "../store/features/updateUserSlice";
function Dashboard() {
  const user = useSelector((state: RootState) => state.user.users);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(user);

  const handleAddUser = () => {
    dispatch(openModal());
    console.log("open modal, " + isModalOpen);
  };

  const handleDeleteUser = (userId: number) => {
    // Dispatch the delete action
    dispatch(deleteUser({ userId }))
      .unwrap()
      .then(() => {
        // Handle successful deletion if needed
        toast.success("User deleted successfully");
        dispatch(fetchUsers());
        console.log("User deleted successfully");
      })
      .catch((error) => {
        // Handle deletion error
        console.error("Failed to delete user: " + error);
      });
  };

  const handleOpenModalUpdate = (userId: number) => {
    dispatch(openModal());
    console.log("open modal" + userId);
  };

  const handleEdit = (userId: number, updateUserData: Partial<User>) => {
    dispatch(updateUser({ userId, updateUserData }));
    console.log("open modal" + userId);
  };

  return (
    <div className="bg-[#222222] overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-gray-200 font-[sans-serif]">
        <thead className="bg-inherit whitespace-nowrap">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-inherit divide-y divide-gray-200 whitespace-nowrap">
          {user?.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-4 py-8 text-sm">
                No User Found!
              </td>
            </tr>
          ) : (
            user.map((item) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 text-sm text-white">{item?.name}</td>
                <td className="px-6 py-4 text-sm text-white">{item?.email}</td>
                <td className="px-6 py-4 text-sm text-white">{item?.role}</td>
                <td className="px-6 py-4 text-sm text-white">{item?.phone}</td>
                <td className="px-6 py-4 text-sm text-white">
                  <button
                    onClick={() => handleOpenModalUpdate(item?.id)}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(item?.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button
        onClick={handleAddUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add User
      </button>
    </div>
  );
}

export default Dashboard;
