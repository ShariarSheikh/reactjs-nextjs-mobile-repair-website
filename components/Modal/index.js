import { useDispatch, useSelector } from "react-redux";
import { closeModal, joinModal } from "../../redux/userSlice/userSlice";
import { AiOutlineClose } from "react-icons/ai";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Index = () => {
  const {
    modal: { type, isOpen },
  } = useSelector(joinModal);

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div
      className={`w-full min-h-screen flex justify-center bg-black bg-opacity-30 fixed top-0 left-0 z-50 overflow-hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="mt-28 max-w-[500px] w-full h-auto relative overflow-hidden">
        <div className="px-6 w-full min-h-[500px] bg-white rounded-lg absolute overflow-hidden">
          <div className="relative w-full h-full">
            <div className="w-16 h-16 m-auto -mt-4 rounded-full overflow-hidden flex justify-center items-center bg-gray-50">
              <AiOutlineClose
                onClick={closeHandler}
                className="cursor-pointer text-gray-500 top-5 w-6 h-6 mt-3"
              />
            </div>

            <div className="pt-6 w-full">
              <h1 className="text-center font-bold uppercase text-[#a5a50d] text-xl">
                MobileR
                <span className="text-black">
                  {type === "login" ? " Login" : " SignUp"}
                </span>
              </h1>
              {isOpen && type === "login" && <Login />}
              {isOpen && type === "signup" && <SignUp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
