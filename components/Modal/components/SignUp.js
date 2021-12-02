import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalLogin } from "../../../redux/userSlice/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  const dispatch = useDispatch();
  //onsubmit
  const onSubmit = (e) => {
    e.preventDefault();

    const user = { name, number, email, password };
    if (!email || !password || !name || !number) {
      alert(
        `Please enter your ${!email && "email"} ${!password && "password"} ${
          !name && "name"
        } ${!number && "number"}`
      );
    } else {
      alert(user);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[360px] m-auto mt-9 pb-8">
      <div className="flex flex-col mb-4">
        <label htmlFor="Name">Name</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type="name"
          placeholder="Enter your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="Mobile Number">Mobile Number</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700 input_arrow_hide"
          type="number"
          placeholder="Enter your mobile number"
          value={number}
          required
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="Email">Email</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type="email"
          placeholder="Enter your email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="Password">Password</label>
        <input
          className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
          type="password"
          placeholder="Enter your password"
          value={password}
          minLength={6}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {false ? <LoadingButton /> : <LoginButton />}

      <div className="w-full mt-6 text-gray-500 font-medium text-center">
        <p
          className="mb-1  cursor-pointer hover:text-blue-400"
          onClick={() => dispatch(modalLogin())}
        >
          Already have an account? <span>Login</span>
        </p>
      </div>
    </form>
  );
};

export default SignUp;

const LoginButton = () => {
  return (
    <button
      className="w-full mt-5 h-10 rounded-sm cursor-pointer
     bg-black text-yellow-400 font-medium active:scale-105 duration-200"
      type="submit"
    >
      SignUp
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
