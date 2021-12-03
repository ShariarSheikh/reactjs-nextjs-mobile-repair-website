import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/index";
import LocationsFeed from "../../layouts/stores_layouts/LocationsFeed";
import StoresHero from "../../layouts/stores_layouts/StoresHero";

const Stores = ({ data }) => {
  return (
    <div className="w-full bg-[#ffffff]">
      <Head>
        <title>Stores Repair Mobiles</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />
      <Modal />

      <main className="w-full min-h-screen">
        <div
          className={`relative w-full bg-gradient-to-t from-black via-blue-900 to-transparent pb-11`}
        >
          <StoresHero />
          <LocationsFeed data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const stores = await axios.get(process.env.NEXT_PUBLIC_GET_SERVICES_STORE);

  const { servicesStore } = await stores?.data;

  if (!servicesStore) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: servicesStore,
    },
    revalidate: 60, //in seconds
  };
};

export default Stores;
