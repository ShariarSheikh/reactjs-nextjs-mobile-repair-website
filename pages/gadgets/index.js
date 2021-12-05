import Head from "next/head";
import GadgetsFeed from "../../layouts/gadgets_layouts/GadgetsFeed";
import GadgetsModal from "../../layouts/gadgets_layouts/GadgetsModal";
import { gadgets } from "../../products";

const Index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Gadgets</title>
      </Head>

      <main className="w-full min-h-[50vh]">
        <div className="relative w-full max-w-7xl m-auto">
          <GadgetsFeed data={data} />
          <GadgetsModal />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  if (!gadgets) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: gadgets,
    },
    revalidate: 60, //in seconds
  };
};

export default Index;
