import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import {
  closeModal,
  joinModal,
  loginUser,
  modalSignup,
} from "../../../redux/userSlice/userSlice";
import { LoadingButton } from "../../../utils/Buttons/LoadingBtn";
import { LoginButton } from "../../../utils/Buttons/LoginBtn";

const Login = () => {
  const userLogin = useSelector(joinModal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState(true);

  const dispatch = useDispatch();
  //onsubmit
  const onSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    if (!email || !password) {
      alert(
        `Please enter your ${!email && "email"} ${!password && "password"}`
      );
    } else {
      dispatch(loginUser(user));
    }
  };

  useEffect(() => {
    if (userLogin.status === "success") {
      setEmail("");
      setPassword("");
      dispatch(closeModal());
    }
  }, [userLogin.status, dispatch]);

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[360px] m-auto mt-9 pb-8">
      {userLogin.status === "rejected" && (
        <p className="text-red-500 text-sm">{userLogin.error}</p>
      )}

      <div className="flex flex-col mb-4">
        <label htmlFor="Email">Email</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col mb-4 relative">
        <label htmlFor="Password">Password</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type={passType === false ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <FaRegEye
          onClick={() => setPassType(!passType)}
          className="absolute right-5 top-8 w-6 h-6 text-gray-400 cursor-pointer"
        />
      </div>

      {userLogin.status === "pending" ? <LoadingButton /> : <LoginButton />}

      <div className="w-full mt-6 text-gray-500 font-medium text-center">
        <p
          className="mb-1  cursor-pointer hover:text-blue-400"
          onClick={() => dispatch(modalSignup())}
        >
          {"Don't"} have an account? <span>SignUp</span>
        </p>
        <p className="mb-2 cursor-pointer hover:text-blue-400">
          Forgot password?
        </p>
      </div>
    </form>
  );
};

export default Login;
