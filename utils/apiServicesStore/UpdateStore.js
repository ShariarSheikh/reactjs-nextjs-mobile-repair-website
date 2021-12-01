import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { servicesStoreFetch } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import {
  closeUpdateServiceStore,
  updateServicesStore,
} from "../../redux/servicesStoreSlice/updateServicesStoreSlice";
import StoreForm from "./StoreForm";

const UpdateStore = () => {
  const updateStores = useSelector((state) => state.servicesStoreUpdate);

  const [locationStore, setLocationStore] = useState({
    locationName: "",
    description: "",
    lat: 0,
    long: 0,
    photo: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const { updateStore } = updateStores;

    setLocationStore({
      id: updateStore.id,
      locationName: updateStore?.locationName,
      description: updateStore?.description,
      lat: updateStore?.lat,
      long: updateStore?.long,
      photo: updateStore?.photo,
      imagesFileName: updateStore?.imagesFileName,
    });
  }, [updateStores, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("photo", locationStore.photo);
    data.append("locationName", locationStore.locationName.toLocaleUpperCase());
    data.append("description", locationStore.description);
    data.append("lat", Number(locationStore.lat));
    data.append("long", Number(locationStore.long));
    data.append("imagesFileName", locationStore.imagesFileName);

    if (
      locationStore.locationName &&
      locationStore.description &&
      locationStore.lat &&
      locationStore.long &&
      locationStore.photo &&
      locationStore.imagesFileName
    ) {
      const updateData = { data: data, id: locationStore.id };
      dispatch(updateServicesStore(updateData));
      setLocationStore({
        locationName: "",
        description: "",
        lat: 0,
        long: 0,
        photo: "",
      });
    } else {
      alert("Please fullfil all input");
    }
  };

  //if device is updated successfully ? then call closeUpdateModel func after 4s
  useEffect(() => {
    if (updateStores.status === "success") {
      dispatch(servicesStoreFetch());
      setTimeout(() => {
        dispatch(closeUpdateServiceStore());
      }, 1000);
    }
  }, [updateStores, dispatch]);

  return (
    <div className="w-full h-auto bg-black bg-opacity-60 fixed right-0 top-0 z-40">
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute right-10 top-20 p-5">
          <AiOutlineClose
            className="text-white cursor-pointer h-6 w-6"
            onClick={() => dispatch(closeUpdateServiceStore())}
          />
        </div>
        <StoreForm
          locationStore={locationStore}
          setLocationStore={setLocationStore}
          isDone={updateStores}
          successMessage={"Device updated successfully"}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateStore;
