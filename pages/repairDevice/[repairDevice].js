import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OrderRepair from "../../layouts/repair_device_layouts/OrderRepair";

const Index = ({ data }) => {

  return (
    <div>
      <Head>
        <title>Repair - {data?.device}</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />

      <main className="min-h-[50vh] w-full">
        <section className="flex flex-col md:flex-row w-full max-w-[1024px] m-auto h-auto mt-10 bg-gray-50 p-5">
          <div className="h-[300px] w-full max-w-[300px] relative">
            <Image
              src={data?.photo}
              alt={data?.device}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full bg-white h-auto p-2 rounded-lg">
            <OrderRepair />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const fetchRepairDevices = await axios(
    process.env.NEXT_PUBLIC_GET_REPAIR_DEVICE
  );

  const { repairDevice } = await fetchRepairDevices?.data;
  const paths = repairDevice?.map((x) => ({
    params: { repairDevice: x._id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { repairDevice } = context.params;

  const fetchOne = await axios(
    process.env.NEXT_PUBLIC_GET_REPAIR_DEVICES_SINGLE_ONE + repairDevice
  );

  const data = await fetchOne?.data?.repairDevice;
  if (!data) {
    return {
      redirect: {
        direction: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data,
    },
    revalidate: 50, // in seconds
  };
};

export default Index;
