import Logo from "/img/logo.avif";
import { logoutSuccess } from "../../rtk/slices/authSlice";
import { useDispatch } from "react-redux";
import { showToast } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutSuccess());
    showToast.success("Successfully logged out");
    navigate("/login");
  };
  return (
    <nav className=''>
      <div className='mx-auto bg-white  px-4 py-1  flex items-center justify-between shadow border border-gray-200'>
        <a href='' className='flex items-center '>
          <img width={50} height={50} src={Logo} alt='Blog Logo' />
          <h1 className='font-semibold text-3xl'>Blog Saas</h1>
        </a>

        <div className='flex items-center'>
          <button
            className='bg-gray-900 px-5 py-2 rounded-full text-white flex items-center justify-center font-semibold cursor-pointer'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
