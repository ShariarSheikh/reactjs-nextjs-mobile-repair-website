const SelectRepairLocation = ({ location, setLocation, storeData }) => {
  return (
    <div className="w-full h-10 flex flex-row items-center justify-start md:pl-3 border-b border-gray-00 my-3 pb-1">
      <label
        htmlFor="stores"
        className="text-base text-gray-700 font-medium font-roboto"
      >
        Choose your near location for your service :
      </label>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="md:ml-4 md:px-4 h-full outline-none font-medium text-gray-600"
      >
        {storeData?.map((x) => (
          <option
            key={x._id}
            value={x.locationName.toLocaleLowerCase()}
            className="font-medium mb-2"
          >
            {x.locationName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectRepairLocation;
