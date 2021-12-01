import Head from "next/head";
import Header from "../components/Header/Header";

const Home = ({ data }) => {
  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#121212]">
      <Head>
        <title>Repair Mobiles</title>
        <meta name="description" content="chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="w-full min-h-screen mt-16"></main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = ["nahid", "shariar"];

  if (!data) {
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
