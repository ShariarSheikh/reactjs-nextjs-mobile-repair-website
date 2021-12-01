import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { repairDevicesFetch } from "../../redux/repairDevicesSlice/repairDevicesSlice";
import { openUpdateModelRepair } from "../../redux/repairDevicesSlice/updateRepairDeviceSlice";
import CategoryList from "./CategoryList";

//repair device list
const CategorySection = () => {
  const repairDevicesData = useSelector((state) => state.repairDevicesData);
  const isDelete = useSelector((state) => state.repairDevicesDelete);

  const dispatch = useDispatch();

  const [apple, setApple] = useState([]);
  const [samsung, setSamsung] = useState([]);
  const [nokia, setNokia] = useState([]);
  const [redmi, setRedmi] = useState([]);
  const [huawei, setHuawei] = useState([]);
  const [asus, setAsus] = useState([]);

  useEffect(() => {
    if (repairDevicesData.status === "success") {
      const filterCategory = (setData, ctg) => {
        //store data by devices category
        const devicesCategory =
          repairDevicesData.repairDevicesData?.repairDevice.filter(
            (x) => x.category === `${ctg}`
          );

        setData((prevState) => devicesCategory);
      };

      filterCategory(setApple, "Apple");
      filterCategory(setSamsung, "Samsung");
      filterCategory(setRedmi, "Redmi");
      filterCategory(setNokia, "Nokia");
      filterCategory(setHuawei, "Huawei");
      filterCategory(setAsus, "Asus");
    }
  }, [repairDevicesData.status]);

  //update devices data by calling api
  const updateHandler = (id, device, description, photo, category) => {
    const deviceData = {
      id,
      device,
      description,
      photo,
      category,
    };
    dispatch(openUpdateModelRepair(deviceData));
  };

  useEffect(() => {
    isDelete?.status === "success" && dispatch(repairDevicesFetch());
  }, [isDelete, dispatch]);

  return (
    <div
      style={{ maxHeight: "515px" }}
      className="relative text-gray-500 border border-gray-500 rounded-md p-3 max-w-4xl w-full overflow-y-scroll overscroll-x-none"
    >
      <h2 className="font-bold text-gray-500 text-xl">
        Repair Device Data List
      </h2>
      {repairDevicesData.status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <>
          <CategoryList
            deviceCategory="Apple Devices"
            devicesData={apple}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
          <CategoryList
            deviceCategory="Samsung Devices"
            devicesData={samsung}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
          <CategoryList
            deviceCategory="Redmi Devices"
            devicesData={redmi}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
          <CategoryList
            deviceCategory="Nokia Devices"
            devicesData={nokia}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
          <CategoryList
            deviceCategory="Huawei Devices"
            devicesData={huawei}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
          <CategoryList
            deviceCategory="Asus Devices"
            devicesData={asus}
            isDelete={isDelete}
            updateHandler={updateHandler}
          />
        </>
      )}
    </div>
  );
};

export default CategorySection;
