import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRepairDevice } from "../../redux/repairDevicesSlice/createRepairDeviceSlice";
import { repairDevicesFetch } from "../../redux/repairDevicesSlice/repairDevicesSlice";
import RepairDeviceApiForm from "./RepairDeviceForm";

//create repair device data
const CreateNew = () => {
  const isCreate = useSelector((state) => state.repairDevicesCreate);

  const [repairDevice, setRepairDevice] = useState({
    device: "",
    description: "",
    category: "Apple",
    photo: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("photo", repairDevice.photo);
    data.append("device", repairDevice.device.toUpperCase());
    data.append("description", repairDevice.description);
    data.append("category",repairDevice.category);

    if (
      repairDevice.device &&
      repairDevice.description &&
      repairDevice.category &&
      repairDevice.photo
    ) {
      dispatch(createRepairDevice(data));
    } else {
      alert("Please select Category");
    }
  };

  useEffect(() => {
    if (isCreate?.status === "success") {
      dispatch(repairDevicesFetch());
      setRepairDevice({
        device: "",
        description: "",
        category: "Apple",
        photo: "",
      });
    }
  }, [isCreate, dispatch]);

  return (
    <RepairDeviceApiForm
      repairDevice={repairDevice}
      setRepairDevice={setRepairDevice}
      isDone={isCreate}
      successMessage={"Device created successfully"}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateNew;
