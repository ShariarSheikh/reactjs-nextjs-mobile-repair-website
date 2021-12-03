import Link from "next/link";
import Image from "next/image";

const DevicesCart = ({ device }) => {
  return (
    <Link
      href={
        device?.category === "all"
          ? "/services/all"
          : `/services/${device?.category}`
      }
      passHref
    >
      <div className="md:w-[30%] w-[44%] md:h-60 h-48 relative mx-2 mb-4 group cursor-pointer">
        <Image src={device?.photo} alt={device?.device} layout="fill" />
        <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-white font-semibold text-xl group-hover:scale-125 transition duration-200">
            {device?.device}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default DevicesCart;
