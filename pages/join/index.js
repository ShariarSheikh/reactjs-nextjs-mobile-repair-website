import Head from "next/head";
import Header from "../../components/Header/Index";

const Index = () => {
  return (
    <div className="w-full bg-white dark:bg-[#121212]">
      <Head>
        <title>ASK ME</title>
        <meta name="description" content="chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="w-full min-h-screen">
        <section className="w-full flex flex-row justify-center">
          
        </section>
      </main>
    </div>
  );
};




export default Index;
