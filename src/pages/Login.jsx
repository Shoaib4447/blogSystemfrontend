import login from "/img/login.avif";

const Login = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center bg-gray-200'>
      <div className='m-3 md:m-5 bg-white shadow w-[85%] h-[90%] md:w-[70%] md:h-[80%] flex justify-center gap-2 items-center rounded-3xl'>
        <div className='w-full h-full rounded-3xl p-4 flex flex-col items-center mx-1 md:mx-3'>
          <h1 className='text-3xl md:text-4xl  font-semibold'>Log In</h1>
          <form className='w-full space-y-3 md:my-9 my-8'>
            <div className='flex flex-col space-y-2'>
              <label className='text-black font-semibold' htmlFor='email'>
                Your email
              </label>
              <input
                className='border border-gray-200 text-gray-900 bg-gray-50 rounded-full py-2 px-4 focus:outline-none'
                placeholder='Email address'
                type='email'
                name='email'
                id='email'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-black font-semibold' htmlFor='email'>
                Password
              </label>
              <input
                className='border border-gray-200 text-gray-900 bg-gray-50 rounded-full py-2 px-4 focus:outline-none'
                placeholder='At least 8 characters'
                type='email'
                name='email'
                id='email'
              />
            </div>
            <button
              className='mt-4 font-semibold border border-gray-200 text-white   bg-blue-600 rounded-full w-full py-2 px-4 focus:outline-none transform transition duration-200 ease-in-out cursor-pointer hover:bg-blue-800'
              type='submit'
            >
              Log in{" "}
            </button>
            <p className='text-gray-800 text-center '>
              Not registered yet? Create an Account
            </p>
          </form>
        </div>
        <div className=' w-full h-[95%] rounded-3xl m-3 hidden md:block'>
          <img
            className='w-full rounded-2xl bg-no-repeat object-cover h-full mx-auto '
            src={login}
            alt='Login Image not loaded'
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
