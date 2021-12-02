import Head from "next/head";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import AboutStore from "../../layouts/single_store_layouts/AboutStore";

const Store = ({ store }) => {
  const { id } = useRouter().query;

  const [storeOpen, setStoreOpen] = useState(false);
  const [locationData, setLocationData] = useState();

  // useEffect(() => {
  //   if (location) {
  //     const data = servicesStore.filter(
  //       (x) => x.locationName.toLowerCase() === location.toLowerCase()
  //     );
  //     setLocationData(data[0]);
  //   } else {
  //     setLocationData();
  //   }
  // }, [location, servicesStore]);

  setInterval(() => {
    const now = new Date().getHours();
    if (now >= 9 && now <= 21) {
      setStoreOpen((prevState) => (prevState = true));
    } else {
      setStoreOpen((prevState) => (prevState = false));
    }
  }, 1000);

  return (
    <div>
      <Head>
        <title>Store - {store?.locationName} Repair Mobiles</title>
        <meta id="description" content="chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="min-h-screen max-w-[1366px] m-auto">
        <section className="w-full">
          {/* header container */}
          <header className="relative w-full h-96">
            <Image
              className="absolute w-full h-full"
              layout="fill"
              objectFit="cover"
              src={store?.photo}
              alt={store?.locationName}
            />
            <div
              className="absolute left-0 bottom-0 flex justify-between items-center
             right-0 ml-auto mr-auto w-auto bg-opacity-60 bg-black px-2 md:px-8 py-5"
            >
              <h1 className="text-white md:text-3xl font-semibold">
                {store?.locationName}
              </h1>
              <button
                className={`${
                  storeOpen ? "bg-green-700" : "bg-red-600"
                } text-white py-2 px-2 md:px-7 font-roboto rounded-lg animate-bounce cursor-default`}
              >
                {storeOpen ? "Open Now" : "Closed"}
              </button>
              <button className="bg-blue-700 text-white py-2 px-2 md:px-7 rounded-2xl font-roboto active:scale-105 duration-200">
                Call Store Assistant
              </button>
            </div>
          </header>

          {/* info container */}
          <div className="max-w-7xl m-auto w-full mt-8 px-2">
            <h1 className="text-4xl font-semibold font-roboto text-gray-700">
              Store in: {store?.locationName}
            </h1>
            <p className="text-base text-gray-500 mt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
            <p className="text-base text-gray-500">
              Active 09:00 AM to 09:00 PM
            </p>

            {/* .. */}
            <div className="w-full flex flex-col md:flex-row justify-between mt-5 pb-8">
              <AboutStore location={store?.locationName} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  const stores = await axios.get(
    "https://stormy-woodland-67379.herokuapp.com/api/service-stores/get"
  );

  const { servicesStore } = await stores?.data;

  const paths = servicesStore?.map((store) => ({
    params: { id: store._id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const getStore = await axios.get(
    `https://stormy-woodland-67379.herokuapp.com/api/service-stores/getOne/${id}`
  );

  const { store } = await getStore?.data;

  if (!store) {
    return {
      redirect: {
        description: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { store },
    revalidate: 20, //in seconds
  };
};

export default Store;
