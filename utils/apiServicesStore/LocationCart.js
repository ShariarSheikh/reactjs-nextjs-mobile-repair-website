import { useDispatch } from "react-redux";
import { serviceStoreDelete } from "../../redux/servicesStoreSlice/servicesStoreDeleteSlice";

// Location section component
const LocationCart = ({ devicesData, isDelete, updateHandler, isUpdate }) => {
  const dispatch = useDispatch();
  return (
    <>
      {devicesData.length > 0 ? (
        <div className="flex flex-wrap flex-row justify-start ">
          {devicesData?.map(({ _id, locationName, description, photo,lat,long }) => (
            <div
              key={_id}
              className="w-48 h-auto text-gray-300 overflow-hidden bg-gray-700 pt-2 mt-2 ml-2"
            >
              <img
                className="h-32 w-full object-contain"
                src={photo}
                alt={description}
              />
              <div className="py-2">
                <p className="font-bold text-center line-clamp-1">{locationName}</p>
              </div>
              {isDelete?.status === "pending" ? (
                <div className="w-full flex justify-center bg-gray-800 py-3 px-2">
                  Waiting for delete...
                </div>
              ) : (
                <div className="w-full flex justify-between bg-gray-800 py-3 px-2">
                  <button
                    onClick={() =>
                      updateHandler(_id, locationName, description, photo, lat,long)
                    }
                  >
                    Update
                  </button>
                  <button onClick={() => dispatch(serviceStoreDelete(_id))}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl">0 Store</div>
      )}
    </>
  );
};

export default LocationCart;
