type Props = {};

function Dashboard({}: Props) {
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
              Joined At
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-inherit divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td className="px-6 py-4 text-sm text-white">John Doe</td>
            <td className="px-6 py-4 text-sm text-white">john@example.com</td>
            <td className="px-6 py-4 text-sm text-white">Admin</td>
            <td className="px-6 py-4 text-sm text-white">2022-05-15</td>
            <td className="px-6 py-4 text-sm text-white">
              <button className="text-blue-500 hover:text-blue-700 mr-4">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-white">Jane Smith</td>
            <td className="px-6 py-4 text-sm text-white">jane@example.com</td>
            <td className="px-6 py-4 text-sm text-white">User</td>
            <td className="px-6 py-4 text-sm text-white">2022-07-20</td>
            <td className="px-6 py-4 text-sm text-white">
              <button className="text-blue-500 hover:text-blue-700 mr-4">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-white">Alen doe</td>
            <td className="px-6 py-4 text-sm text-white">alen@example.com</td>
            <td className="px-6 py-4 text-sm text-white">User</td>
            <td className="px-6 py-4 text-sm text-white">2022-07-21</td>
            <td className="px-6 py-4 text-sm text-white">
              <button className="text-blue-500 hover:text-blue-700 mr-4">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
