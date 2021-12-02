import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";

const Index = () => {
  const router = useRouter();
  const { store } = useRouter().query;

  return (
    <div className="w-full bg-[#ffffff]">
      <Head>
        <title>Search Store - {store && store}</title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />

      <main className="w-full min-h-[80vh] flex justify-center items-center">
        <div className="relative w-full u-p-h flex flex-col justify-center items-center">
          <Image
            width={320}
            height={288}
            className="object-contain"
            src="/images/notFound.gif"
            alt="not found location"
          />
          <h2 className="text-black text-5xl">
            No Store Found at this location
            <span className="text-blue-600"> {store}</span>
          </h2>
          <p
            className="text-gra-600 cursor-pointer mt-6 font-roboto font-semibold"
            onClick={() => router.back()}
          >
            Go back
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
