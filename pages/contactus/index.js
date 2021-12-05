import Head from "next/head";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    alert(
      "Thank for your Message = " +
        `   Name: ${name} Email: ${email} Message: ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      <main className="w-full min-h-[50vh] bg-[#ffffff]">
        <section className="w-full flex flex-col lg:flex-row justify-start items-start min-h-[70vh]">
          <div className="w-full lg:w-[40%] bg-[#f5f5dc] p-10 flex flex-col justify-center items-center min-h-[20vh] lg:min-h-[70vh] ">
            <div className="flex items-center h-10 mb-4">
              <IoMdCall className="w-7 h-7" />
              <p className="font-medium ml-2 text-xl sm:text-3xl">
                +011324*****
              </p>
            </div>

            <div className="flex items-center h-10 mb-4">
              <GrMail className="w-7 h-7" />
              <p className="font-medium ml-2 text-xl sm:text-3xl">
                shariar.dev@gmail.com
              </p>
            </div>
            <div className="flex items-center h-10">
              <IoLocationSharp className="w-7 h-7" />
              <p className="font-medium ml-2 text-xl sm:text-3xl">
                Bangladesh,Dhaka
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[60%] flex justify-center items-center  lg:h-[70vh] p-10">
            <form
              onSubmit={submitForm}
              className="md:max-w-3xl m-auto min-w-[98%] w-full border border-gray-200 p-5 rounded-md"
            >
              <div className="flex flex-col w-full mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 mt-2 px-2 py-3 rounded-md overflow-hidden outline-none"
                  placeholder="Enter your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-100 mt-2 px-2 py-3 rounded-md overflow-hidden outline-none"
                  placeholder="Enter your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  className="w-full bg-gray-100 mt-2 px-2 py-3 rounded-md overflow-hidden outline-none min-h-[150px]"
                  placeholder="Enter your Email"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="uppercase font-medium text-xl bg-blue-500 outline-none active:scale-105 duration-200 rounded-md text-white w-full h-10"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
