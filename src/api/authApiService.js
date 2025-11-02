import { authAPI } from "./apiEndPoints";
import { showToast } from "../utils/toast";
import {
  setLoading,
  loginSuccess,
  setError,
  clearError,
  registerSuccess,
} from "../rtk/slices/authSlice";

const SignUpUser = async (data, dispatch, navigate) => {
  try {
    setLoading(true);
    const response = await authAPI.signUp(data);
    console.log("signUpResponse=>", response);
    showToast.success(response.message);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    console.log("Error SignUp=>", error);
    dispatch(setError(error));
    showToast.error(error.message);
  }
};

const LoginUser = async (Credential, dispatch, navigate) => {
  try {
    setLoading(true);
    const response = await authAPI.Login(Credential);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    dispatch(
      loginSuccess({ token: response.data.token, user: response.data.user })
    );
    showToast.success(response.message);
    navigate("/dashboard");
  } catch (error) {
    console.log("Login Error", error);
    dispatch(setError(error));
  }
};

export { SignUpUser, LoginUser };
