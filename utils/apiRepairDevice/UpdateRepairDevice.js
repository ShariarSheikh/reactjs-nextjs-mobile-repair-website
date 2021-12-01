import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { repairDevicesFetch } from "../../redux/repairDevicesSlice/repairDevicesSlice";
import {
  closeUpdateModelRepair,
  openUpdateModelRepair,
} from "../../redux/repairDevicesSlice/updateRepairDeviceSlice";
import RepairDeviceForm from "./RepairDeviceForm";

const UpdateRepairDevice = () => {
  const isUpdate = useSelector((state) => state.repairDevicesUpdate);
  const repairDevicesUpdate = useSelector((state) => state.repairDevicesUpdate);

  const [repairDevice, setRepairDevice] = useState({
    device: "",
    description: "",
    category: "",
    photo: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const { updateDevice } = repairDevicesUpdate;
    setRepairDevice({
      id: updateDevice?.id,
      device: updateDevice?.device,
      description: updateDevice?.description,
      category: updateDevice?.category,
      photo: updateDevice?.photo,
    });
  }, [repairDevicesUpdate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openUpdateModelRepair(repairDevice));
    setRepairDevice({
      device: "",
      description: "",
      category: "",
      photo: "",
    });
  };

  //if device is updated successfully ? then call closeUpdateModel func after 4s
  useEffect(() => {
    if (isUpdate.status === "success") {
      dispatch(repairDevicesFetch());
      setTimeout(() => {
        dispatch(closeUpdateModelRepair());
      }, 1000);
    }
  }, [isUpdate, dispatch]);

  return (
    <div className="w-full h-auto bg-black bg-opacity-60 fixed right-0 top-0 z-40">
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute right-10 top-20 p-5">
          <AiOutlineClose
            className="text-white cursor-pointer h-6 w-6"
            onClick={() => dispatch(closeUpdateModelRepair())}
          />
        </div>
        <RepairDeviceForm
          repairDevice={repairDevice}
          setRepairDevice={setRepairDevice}
          isDone={isUpdate}
          successMessage={"Device updated successfully"}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateRepairDevice;
