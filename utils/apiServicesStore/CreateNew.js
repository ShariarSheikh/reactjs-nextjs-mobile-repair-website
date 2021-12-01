import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createServiceStore } from "../../redux/servicesStoreSlice/createServiceStoreSlice";
import { servicesStoreFetch } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import StoreForm from "./StoreForm";

//create repair device data
const CreateNew = () => {
  const isCreate = useSelector((state) => state.servicesStoreCreate);

  const [locationStore, setLocationStore] = useState({
    locationName: "",
    description: "",
    lat: 0,
    long: 0,
    photo: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("photo", locationStore.photo);
    data.append("locationName", locationStore.locationName.toLocaleUpperCase());
    data.append("description", locationStore.description);
    data.append("lat", Number(locationStore.lat));
    data.append("long", Number(locationStore.long));

    if (
      locationStore.locationName &&
      locationStore.description &&
      locationStore.lat &&
      locationStore.long &&
      locationStore.photo
    ) {
      dispatch(createServiceStore(data));
    } else {
      alert("Please fullfil all input");
    }
  };

  useEffect(() => {
    if (isCreate?.status === "success") {
      dispatch(servicesStoreFetch());
      setLocationStore({
        locationName: "",
        description: "",
        lat: 0,
        long: 0,
        photo: "",
      });
    }
  }, [isCreate, dispatch]);

  return (
    <StoreForm
      locationStore={locationStore}
      setLocationStore={setLocationStore}
      isDone={isCreate}
      successMessage={"Device created successfully"}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateNew;
