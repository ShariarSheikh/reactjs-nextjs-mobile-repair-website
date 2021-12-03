import Image from "next/image";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/userSlice/userSlice";

const About = ({ user }) => {
  const { name, profileImg, email, isAdmin } = user;

  const dispatch = useDispatch();

  return (
    <div className="mt-10 min-h-[400px] overflow-hidden rounded-md bg-gray-50 p-2">
      <div className="w-full min-h-[400px] h-full">
        <div className="relative max-w-xs w-[100px] h-[100px] m-auto overflow-hidden rounded-full flex justify-center items-center">
          {profileImg && (
            <Image
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80"
              layout="fill"
              objectFit="cover"
              alt="user profile"
            />
          )}

          {!profileImg && (
            <div className="w-full h-full bg-blue-500 flex justify-center items-center">
              <p className="text-white font-bold text-xl">{name[0]}</p>
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <h1 className="font-semibold text-xl">{name}</h1>
          <p className="font-normal text-lg">{email}</p>
          <p className="mt-10 font-medium">
            Account Type:{isAdmin ? " Admin" : " Member"}
          </p>

          <p
            className="w-auto mt-10 px-3 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
            onClick={() => dispatch(logOutUser())}
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
