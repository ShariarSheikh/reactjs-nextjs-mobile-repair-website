import { useDispatch, useSelector } from "react-redux";
import { changeNavigationState, userProfileNavigation } from "../../redux/profileNavigationSlice/profileNavigationSlice";

const Navigation = () => {
  const {state} = useSelector(userProfileNavigation)
  const dispatch = useDispatch();
  return (
    <nav className="w-full h-14 flex items-center rounded-md mt-10 bg-[#1e3a8a]">
      <ul className="h-full flex items-center">
        <li className={`profile-navigation-btn ${state === "about" ? "text-white":"text-gray-300"}`} onClick={() => dispatch(changeNavigationState('about'))}>About</li>
        <li className={`profile-navigation-btn ${state === "activity" ? "text-white":"text-gray-300"}`} onClick={() => dispatch(changeNavigationState('activity'))}>Activity</li>
        <li className={`profile-navigation-btn ${state === "order history" ? "text-white":"text-gray-300"}`} onClick={() => dispatch(changeNavigationState('order history'))}>Order History</li>
        <li className={`profile-navigation-btn ${state === "notification" ? "text-white":"text-gray-300"}`} onClick={() => dispatch(changeNavigationState('notification'))}>Notifications</li>
        <li className={`profile-navigation-btn ${state === "account" ? "text-white":"text-gray-300"}`} onClick={() => dispatch(changeNavigationState('account'))}>Account</li>
      </ul>
    </nav>
  );
};

export default Navigation;
