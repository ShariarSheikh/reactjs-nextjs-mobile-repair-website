import { useSelector } from "react-redux";
import CategorySection from "./CategorySection";
import CreateNew from "./CreateNew";
import UpdateRepairDevice from "./UpdateRepairDevice";

const RepairDeviceSection = () => {
  const repairDevicesUpdate = useSelector((state) => state.repairDevicesUpdate);
  const { openModel } = repairDevicesUpdate;
  return (
    <section className="w-full max-w-7xl flex flex-row flex-wrap py-6 space-x-5">
      <CreateNew />
      <CategorySection />

      {/* repair device update form model  */}
      {openModel && <UpdateRepairDevice />}
    </section>
  );
};

export default RepairDeviceSection;
