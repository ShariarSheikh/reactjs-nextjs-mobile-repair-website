import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { servicesStoreFetch } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import { openUpdateServiceStore } from "../../redux/servicesStoreSlice/updateServicesStoreSlice";
import LocationCart from "./LocationCart";

//repair device list
const CategorySection = () => {
  const servicesStore = useSelector((state) => state.servicesStore);
  const isDelete = useSelector((state) => state.servicesStoreDelete);
  const dispatch = useDispatch();

  //update devices data by calling api
  const updateHandler = (id, locationName, description, photo, lat, long) => {
    const deviceData = {
      id,
      locationName,
      description,
      photo,
      lat,
      long,
    };
    dispatch(openUpdateServiceStore(deviceData));
  };

  useEffect(() => {
    if (isDelete?.status === "success") {
      dispatch(servicesStoreFetch());
      alert("deleted");
    }
  }, [isDelete, dispatch]);

  return (
    <div
      style={{ maxHeight: "515px" }}
      className="relative text-gray-500 border border-gray-500 rounded-md p-3 max-w-4xl w-full overflow-y-scroll overscroll-x-none"
    >
      <h2 className="font-bold text-gray-500 text-xl">Total stores location</h2>
      {servicesStore.status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <LocationCart
          devicesData={servicesStore?.servicesStore}
          isDelete={isDelete}
          updateHandler={updateHandler}
        />
      )}
    </div>
  );
};

export default CategorySection;
