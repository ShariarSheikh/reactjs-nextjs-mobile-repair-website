import { useDispatch } from "react-redux";
import { deleteRepairDevice } from "../../redux/repairDevicesSlice/repairDevicesDeleteSlice";

// category section component
const CategoryList = ({
  deviceCategory,
  devicesData,
  isDelete,
  updateHandler,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="mt-5 text-gray-400 font-xl font-bold border-b border-gray-500 pl-2">
        {deviceCategory}
      </h1>
      {devicesData.length > 0 ? (
        <div className="flex flex-wrap flex-row justify-start ">
          {devicesData?.map(({ _id, device, description, photo, category }) => (
            <div
              key={_id}
              className="w-48 h-52 text-gray-300 overflow-hidden bg-gray-700 pt-2 mt-2 ml-2"
            >
              <img
                className="h-32 w-full object-contain"
                src={photo}
                alt={description}
              />
              <div className="mt-2">
                <p className="font-bold text-center line-clamp-1">{device}</p>
              </div>
              {isDelete?.status === "pending" ? (
                <div className="w-full flex justify-center bg-gray-800 py-3 px-2">
                  Waiting for delete...
                </div>
              ) : (
                <div className="w-full flex justify-between bg-gray-800 py-3 px-2">
                  <button
                    onClick={() =>
                      updateHandler(_id, device, description, photo, category)
                    }
                  >
                    Update
                  </button>
                  <button onClick={() => dispatch(deleteRepairDevice(_id))}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl">0 Devices</div>
      )}
    </>
  );
};

export default CategoryList;
