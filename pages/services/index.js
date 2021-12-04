import Head from "next/head";
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

      <main className="w-full min-h-[50vh]">
        <div className="relative w-full max-w-7xl m-auto">
          <HeroSection />
          <DevicesFeed data={data} />
        </div>
      </main>
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
