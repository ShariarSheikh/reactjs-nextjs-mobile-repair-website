import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/index";
import Section1 from "../layouts/home_layouts/Section1";
import Section2 from "../layouts/home_layouts/Section2";
import Section3 from "../layouts/home_layouts/Section3";
import Section4 from "../layouts/home_layouts/Section4";
import Section5 from "../layouts/home_layouts/Section5";
import Section6 from "../layouts/home_layouts/Section6";

const Home = () => {
  return (
    <div className="w-full bg-[#ffffff] relative">
      <Head>
        <title>Repair Mobiles</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />
      <Modal />

      <main className="w-full min-h-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
