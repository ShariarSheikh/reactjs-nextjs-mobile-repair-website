import Head from "next/head";
import Image from "next/image";
import { aboutUsPeople } from "../../products";

const Index = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      <main className="w-full min-h-[50vh] bg-[#f5f5dc]">
        <section className="w-full max-w-7xl m-auto pt-10 flex flex-wrap justify-center items-center space-x-3">
          {aboutUsPeople.map((x) => (
            <div
              key={x.id}
              className="w-52 h-auto py-3 rounded-2xl shadow-sm bg-white relative mb-3"
            >
              <div className="w-24 h-24 m-auto overflow-hidden rounded-full relative">
                <Image
                  src={x.photo}
                  alt={x.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-3 w-full text-center">
                <h1 className="font-medium text-gray-600 text-xl">{x.name}</h1>
                <p className="mt-2 font-medium text-blue-500 absolute top-2 right-2 text-sm">
                  {x.type}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-5 max-w-4xl m-auto w-full pb-4">
            <h1 className="mt-5 font-bold text-3xl uppercase">
              We are the largest mobile repairing team in Bangladesh
            </h1>
            <p className="text-xl mt-3 text-gray-600">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
