import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/index";
import { totalServicesList } from "../../products";
import RepairDevicesCart from "../../utils/RepairDevicesCart/RepairDevicesCart";

const Devices = ({ data }) => {
  const { devices } = useRouter().query;

  return (
    <div className="w-full bg-[#ffffff]">
      <Head>
        <title>Repair - {devices}</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />
      <Modal />

      <main className="w-full min-h-[50vh]">
        <div className="relative w-full max-w-7xl m-auto">
          <div className="h-52 w-full flex flex-col justify-center items-center mt-10 bg-gray-50 rounded-md overflow-hidden">
            <h1 className="text-center uppercase font-semibold text-gray-600 text-2xl">
              Find Your {devices} Devices
            </h1>
            <div className="max-w-xs w-full px-2 h-10 mt-6 bg-blue-100 relative rounded-lg overflow-hidden flex justify-center items-center">
              <input
                type="text"
                placeholder="Search Your Device"
                className="w-full h-full border-none outline-none bg-transparent text-black"
              />
              <AiOutlineSearch className="text-gray-500 cursor-pointer absolute right-5 w-[20px] h-[20px] active:scale-125 duration-200 hover:text-gray-900" />
            </div>
          </div>

          {/* devices container */}
          <div className="w-full h-auto flex justify-center items-center my-20 flex-wrap">
            {data.map((x) => (
              <RepairDevicesCart
                key={x._id}
                id={x._id}
                photo={x.photo}
                category={x.category}
                device={x.device}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = totalServicesList?.map((x) => ({
    params: { devices: x.category },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { devices } = context.params;

  // make fist character uppercase
  const devicesName = devices.charAt(0).toUpperCase() + devices.slice(1);

  const devicesListFetch = await axios(
    process.env.NEXT_PUBLIC_GET_REPAIR_DEVICES_CATEGORY + devicesName
  );

  const { repairDevice } = await devicesListFetch?.data;

  if (!repairDevice) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: repairDevice,
    },
    revalidate: 60, //in seconds
  };
};

export default Devices;
