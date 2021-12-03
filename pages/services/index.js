import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/index";
import DevicesFeed from "../../layouts/services_layouts/DevicesFeed";
import HeroSection from "../../layouts/services_layouts/HeroSection";
import { totalServicesList } from "../../products";

const Services = ({ data }) => {
  return (
    <div className="w-full bg-[#ffffff]">
      <Head>
        <title>Service</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />
      <Modal />

      <main className="w-full min-h-[50vh]">
        <div className="relative w-full max-w-7xl m-auto">
          <HeroSection />
          <DevicesFeed data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  if (!totalServicesList) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: totalServicesList,
    },
    revalidate: 60, //in seconds
  };
};

export default Services;
