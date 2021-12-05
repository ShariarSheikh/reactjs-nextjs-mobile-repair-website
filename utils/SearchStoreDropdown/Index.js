import Image from "next/image";
import Link from "next/link";

const Index = ({ data, setSearch }) => {
  return (
    <div className="absolute top-10 w-full h-auto">
      <div className="w-[95%] m-auto bg-white min-h-[100px] p-2 shadow-md">
        <Link href={`/store/${data?._id}`} passHref>
          <div
            onClick={() => setSearch("")}
            className="w-full h-16 sm:px-2 flex justify-start items-center relative border border-gray-200 cursor-pointer"
          >
            {data?.photo && (
              <Image src={data?.photo} alt="location" width={56} height={56} />
            )}

            <div className="h-full pl-3">
              <h1 className="font-medium text-gray-500">
                {data?.locationName}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
