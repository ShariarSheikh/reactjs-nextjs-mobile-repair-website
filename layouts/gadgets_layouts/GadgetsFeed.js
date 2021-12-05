import GadgetsCart from "./GadgetsCart";

const GadgetsFeed = ({ data }) => {
  return (
    <div className="w-full my-20 py-2 px-2">
      <h1 className="font-semibold text-gray-600 text-xl text-center">
        Our Gadgets
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center mt-6">
        {data?.map((x) => (
          <GadgetsCart key={x.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default GadgetsFeed;
