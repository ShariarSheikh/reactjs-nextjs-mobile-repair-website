import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { repairProblemsList } from "../../products";
import { servicesStore } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import SelectRepairLocation from "../../utils/SelectRepairLocation/SelectRepairLocation";
import SelectRepairProblem from "../../utils/SelectRepairProblem/SelectRepairProblem";

const OrderRepair = () => {
  const [storeData, setStoreData] = useState([]);
  const [location, setLocation] = useState("");
  const [problem, setProblem] = useState("");
  const { servicesStoreData, status, error } = useSelector(servicesStore);

  useEffect(() => {
    status === "success" && setStoreData(servicesStoreData);
  }, [servicesStoreData, status]);

  return (
    <div>
      <form className="w-full relative h-auto mt-5 md:mt-0 bg-white overflow-hidden">
        {status === "success" && (
          <SelectRepairLocation
            location={location}
            setLocation={setLocation}
            storeData={storeData}
          />
        )}
        <h1 className="font-semibold text-gray-600 mt-6 pl-4">
          Select Problem
        </h1>
        {repairProblemsList && (
          <SelectRepairProblem
            repairProblemsList={repairProblemsList}
            problem={problem}
            setProblem={setProblem}
          />
        )}
        <h1 className="font-semibold mt-10 text-center">Coming Soon!</h1>
      </form>
    </div>
  );
};

export default OrderRepair;
