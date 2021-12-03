import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="md:w-full w-[95%] m-auto relative h-80 mt-6 rounded-md overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="bg image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
        <div>
          <h1 className="uppercase font-medium text-gray-200 text-2xl md:text-4xl text-center">
            we have top-level mechanics <br /> and technology for your devices
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
