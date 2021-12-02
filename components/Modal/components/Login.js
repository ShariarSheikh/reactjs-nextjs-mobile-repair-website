import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalSignup } from "../../../redux/userSlice/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      alert(user);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[360px] m-auto mt-9 pb-8">
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
      <div className="flex flex-col mb-4">
        <label htmlFor="Password">Password</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
      </div>

      {false ? <LoadingButton /> : <LoginButton />}

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

const LoginButton = () => {
  return (
    <button
      className="w-full mt-5 h-10 rounded-sm cursor-pointer
     bg-black text-yellow-400 font-medium active:scale-105 duration-200"
      type="submit"
    >
      Login
    </button>
  );
};

const LoadingButton = () => {
  return (
    <button
      className="w-full mt-5 h-10 rounded-sm cursor-wait
     bg-gray-400 text-gray-800 font-medium active:scale-105 duration-200"
    >
      Loading...
    </button>
  );
};
