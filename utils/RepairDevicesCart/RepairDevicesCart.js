import Link from "next/link";
import Image from "next/image";

const RepairDevicesCart = ({ photo, category, device, id }) => {
  return (
    <Link href={`/repairDevice/${id}`} passHref>
      <div className="sm:w-[200px] w-[150px] pt-4 mx-2 mb-4 h-[200px] overflow-hidden bg-white shadow-md cursor-pointer">
        <div className="w-24 h-24 relative m-auto">
          <Image src={photo} alt="repair devices" layout="fill" />
        </div>
        <h1 className="text-center font-semibold mt-3">{device}</h1>
      </div>
    </Link>
  );
};

export default RepairDevicesCart;
