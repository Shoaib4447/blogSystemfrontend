import { useState } from "react";
import login from "/img/login.avif";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginUser } from "../../api/authApiService";
import { setLoading } from "../../rtk/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };
    LoginUser(credentials, dispatch, navigate);
  };
  return (
    <section className='h-screen w-full flex justify-center items-center bg-gray-200'>
      <div className='m-3 md:m-5 bg-white shadow w-[85%] h-[90%] md:w-[70%] md:h-[80%] flex justify-center gap-2 items-center rounded-3xl'>
        <div className='w-full h-full rounded-3xl p-4 flex flex-col items-center mx-1 md:mx-3'>
          <h1 className='text-3xl md:text-4xl  font-semibold'>Log In</h1>
          <form
            onSubmit={handleSubmit}
            className='w-full space-y-3 md:my-9 my-8'
          >
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={setLoading}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-black font-semibold' htmlFor='password'>
                Password
              </label>
              <input
                className='border border-gray-200 text-gray-900 bg-gray-50 rounded-full py-2 px-4 focus:outline-none'
                placeholder='At least 8 characters'
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={setLoading}
              />
            </div>
            <button
              className='mt-4 font-semibold border border-gray-200 text-white   bg-blue-600 rounded-full w-full py-2 px-4 focus:outline-none transform transition duration-200 ease-in-out cursor-pointer hover:bg-blue-800'
              type='submit'
              disabled={setLoading}
            >
              Log in{" "}
            </button>
            <p className='text-gray-800 text-center '>
              Not registered yet?{" "}
              <Link className='text-blue-600 underline' to={"/register"}>
                Create an Account
              </Link>
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
