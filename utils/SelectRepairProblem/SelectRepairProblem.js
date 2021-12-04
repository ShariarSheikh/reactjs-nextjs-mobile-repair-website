import { BsCheck2 } from "react-icons/bs";

const SelectRepairProblem = ({ repairProblemsList, problem, setProblem }) => {
  return (
    <div className="w-full h-auto flex flex-row flex-wrap items-center justify-start md:pl-3 border-b border-gray-00 my-3 pb-1">
      {repairProblemsList?.map((x) => (
        <div
          key={x.id}
          className="h-12 px-4 bg-white shadow-md flex justify-center items-center m-3 relative active:scale-110 duration-200 cursor-pointer"
          onClick={() => setProblem(x.problem)}
        >
          <p>{x.problem}</p>
          <div
            className={`${
              problem === x.problem ? "bg-blue-500 " : "bg-gray-400"
            } w-[20px] h-[20px] ml-2 overflow-hidden rounded-full flex justify-center items-center cursor-pointer`}
          >
            <BsCheck2 className="text-white w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectRepairProblem;
