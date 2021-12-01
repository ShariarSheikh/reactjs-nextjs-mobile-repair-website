import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="w-full h-auto bg-indigo-900">
      <div
        className={`flex flex-col max-w-5xl w-full m-auto h-auto pt-12 ${
          location.pathname === "/login" || location.pathname === "/signup"
            ? `hidden`
            : `block`
        }`}
      >
        {/* all links container start */}
        <div className="flex flex-row justify-between flex-wrap px-3">
          {/* container 1 start */}
          <div>
            <div className="mb-4">
              <h2 className="text-gray-100 text-base font-bold">Stores</h2>
            </div>
            <ul className="p-0">
              <li className="list-none text-sm text-gray-300 mb-2">Dhaka</li>
              <li className="list-none text-sm text-gray-300 mb-2">
                Kishoreganj
              </li>
              <li className="list-none text-sm text-gray-300 mb-2">
                Kuliarchar
              </li>
              <li className="list-none text-sm text-gray-300 mb-2">Bhairab</li>
              <li className="list-none text-sm text-gray-300 mb-2">Sylhet</li>
              <li className="list-none text-sm text-gray-300 mb-2">Cumilla</li>
              <li className="list-none text-sm text-gray-300 mb-2">Sadekpur</li>
            </ul>
          </div>
          {/* container 1 end */}
          {/* container 2 start */}
          <div>
            <div className="mb-4">
              <h2 className="text-gray-100 text-base font-bold">
                BD.MobileRepair
              </h2>
            </div>
            <ul className="p-0">
              <li className="list-none text-sm text-gray-300 mb-2">Service</li>
              <li className="list-none text-sm text-gray-300 mb-2">Stores</li>
              <li className="list-none text-sm text-gray-300 mb-2">About us</li>
              <li className="list-none text-sm text-gray-300 mb-2">
                Contact us
              </li>
              <li className="list-none text-sm text-gray-300 mb-2">Support</li>
              <li className="list-none text-sm text-gray-300 mb-2">Account</li>
            </ul>
          </div>

          {/* container 2 end */}
          {/* container 3 start */}
          <div>
            <div className="mb-4">
              <h2 className="text-gray-100 text-base font-bold">Company</h2>
            </div>
            <ul className="p-0">
              <li className="list-none text-sm text-gray-300 mb-2">About Us</li>
              <li className="list-none text-sm text-gray-300 mb-2">Careers</li>
              <li className="list-none text-sm text-gray-300 mb-2">Articles</li>
              <li className="list-none text-sm text-gray-300 mb-2">
                Press Releases
              </li>
            </ul>
          </div>
          {/* container 3 end */}
          {/* container 4 start */}
          <div>
            <div className="mb-4 text-right">
              <h2 className="text-gray-100 text-base font-bold">
                Social Media
              </h2>
            </div>
            <ul className="p-0 text-right flex flex-row">
              <li className="text-sm  mb-2 mr-3">
                <a
                  href="https://devex.vercel.app/"
                  id="iconIdentify_f"
                  className="text-white rounded w-9 h-9 leading-9 flex justify-center items-center list-none "
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="text-sm  mb-2 mr-3">
                <a
                  href="https://devex.vercel.app/"
                  id="iconIdentify_t"
                  className="text-white rounded w-9 h-9 leading-9 flex justify-center items-center list-none "
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="text-sm  mb-2">
                <a
                  href="https://devex.vercel.app/"
                  id="iconIdentify_y"
                  className="text-white rounded w-9 h-9 leading-9 flex justify-center items-center list-none "
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          {/* container 4 end */}
        </div>
        {/* all links container end */}
        {/* join container start */}
        <div className="max-w-xs m-auto pb-4 self-start relative flex w-full justify-center flex-col mt-12">
          <div>
            <h1 className="text-gray-100 text-2xl mb-3 ">
              Subscribe to our newsletter
            </h1>
          </div>
          <div className="flex flex-row ">
            <input type="text" className="pl-2 pt-2 pb-2 w-9/12 rounded" />
            <button className="bg-green-500 pl-2 pr-2 pt-2 pb-2 ml-3 rounded cursor-pointer">
              Submit
            </button>
          </div>
        </div>
        {/* join container end */}
      </div>
    </div>
  );
};

export default Footer;
