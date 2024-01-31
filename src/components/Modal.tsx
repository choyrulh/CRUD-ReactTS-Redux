import { CreateUserRequest, UpdateUserRequest } from "../type/user";

type UserRequest = CreateUserRequest & UpdateUserRequest;

interface Props {
  title: string;
  valueUser: UserRequest;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  buttonTittle: string;
  handleCancel: () => void;
}

export const Modal = ({
  title,
  valueUser,
  onChange,
  onSubmit,
  buttonTittle,
  handleCancel,
}: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#222222] w-1/3 h-auto border m-auto shadow-md rounded-md p-5">
        <h3 className="text-[21px] font-semibold text-center underline mb-10">
          {title}
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
              value={valueUser[field as keyof UserRequest]}
              onChange={onChange}
            />
          ))}
          <div className="flex flex-row">
            <button
              onClick={onSubmit}
              className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-green-500 hover:bg-green-600 hover:transition-all hover:duration-300 hover:ease-in-out m-auto text-center font-medium"
            >
              {buttonTittle}
            </button>
            <button
              onClick={handleCancel}
              className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-red-500 hover:bg-red-600 hover:transition-all hover:duration-300 hover:ease-in-out m-auto text-center font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
