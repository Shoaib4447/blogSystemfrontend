import { FaBook, FaEdit, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
    { path: "/blogs", label: "My Blogs", icon: <FaBook /> },
    { path: "/blogs/create", label: "Create Blog", icon: <FaEdit /> },
  ];

  return (
    <aside className='w-64  bg-white h-full shadow-lg p-6 flex flex-col justify-between overflow-y-auto '>
      <div className='space-y-2'>
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition  ${
                isActive
                  ? "bg-blue-600 text-white font-semibold p-3"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Stats Section */}
      <div className='mt-10 p-4 bg-gray-50 rounded-lg'>
        <p className='text-sm text-gray-600 mb-2'>Total Blogs</p>
        <p className='text-3xl font-bold text-gray-800'>24</p>
      </div>
    </aside>
  );
};

export default Sidebar;
