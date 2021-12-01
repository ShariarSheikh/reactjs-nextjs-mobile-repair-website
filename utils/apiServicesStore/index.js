import { useSelector } from "react-redux";
import CreateNew from "./CreateNew";
import StoresSection from "./StoresSection";
import UpdateStore from "./UpdateStore";

const RepairStoreSection = () => {
  const servicesStoreUpdate = useSelector((state) => state.servicesStoreUpdate);
  const { openModel } = servicesStoreUpdate;

  return (
    <section className="w-full max-w-7xl flex flex-row flex-wrap py-6 space-x-5">
      <CreateNew />
      <StoresSection />

      {/* repair device update form model  */}
      {openModel && <UpdateStore/>}
    </section>
  );
};

export default RepairStoreSection;
