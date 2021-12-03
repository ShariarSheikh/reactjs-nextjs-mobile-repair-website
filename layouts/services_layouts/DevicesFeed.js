import DevicesCart from "./DevicesCart";

const DevicesFeed = ({ data }) => {
  return (
    <div className="w-full bg-gray-50 my-20 py-2 px-2">
      <h1 className="font-semibold text-gray-600 text-xl text-center">
        All Devices We Repair
      </h1>

      <div className="w-full flex justify-center items-center mt-6 flex-wrap">
        {data?.map(
          (x) => x?.category !== "all" && <DevicesCart key={x.id} device={x} />
        )}
      </div>
    </div>
  );
};

export default DevicesFeed;
