import Logo from "/img/logo.avif";

const Navbar = () => {
  return (
    <nav className='px-1 py-2 mt-4 sticky z-30 top-4'>
      <div className='container h-auto w-[90%] mx-auto bg-gray-50 px-4 py-1 rounded-full flex items-center justify-between border border-gray-200 shadow-lg'>
        <a href='' className='flex items-center '>
          <img width={50} height={50} src={Logo} alt='Blog Logo' />
          <h1 className='font-semibold text-3xl'>Blog Saas</h1>
        </a>

        <div className='flex items-center'>
          <button className='bg-gray-900 px-5 py-2 rounded-full text-white flex items-center justify-center font-semibold cursor-pointer'>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
