import { configureStore } from "@reduxjs/toolkit";
//repair device slice import
import createRepairDeviceSlice from "./repairDevicesSlice/createRepairDeviceSlice";
import repairDevicesDeleteSlice from "./repairDevicesSlice/repairDevicesDeleteSlice";
import repairDevicesSlice, {
  repairDevicesFetch,
} from "./repairDevicesSlice/repairDevicesSlice";
import updateRepairDeviceSlice from "./repairDevicesSlice/updateRepairDeviceSlice";
//service store slice import
import createServiceStoreSlice from "./servicesStoreSlice/createServiceStoreSlice";
import servicesStoreDeleteSlice from "./servicesStoreSlice/servicesStoreDeleteSlice";
import servicesStoreSlice, {
  servicesStoreFetch,
} from "./servicesStoreSlice/servicesStoreSlice";
import  servicesStoreUpdateSlice  from "./servicesStoreSlice/updateServicesStoreSlice";
//user slice
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    //repair device action start
    repairDevicesData: repairDevicesSlice,
    repairDevicesCreate: createRepairDeviceSlice,
    repairDevicesUpdate: updateRepairDeviceSlice,
    repairDevicesDelete: repairDevicesDeleteSlice,
    //repair device action end

    //service store action start
    servicesStore: servicesStoreSlice,
    servicesStoreCreate: createServiceStoreSlice,
    servicesStoreDelete:servicesStoreDeleteSlice,
    servicesStoreUpdate:servicesStoreUpdateSlice
    //service store action end
  },
});

//repair devices data calling
store.dispatch(repairDevicesFetch());

//service store data calling
store.dispatch(servicesStoreFetch());
