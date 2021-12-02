function AboutStore({location}) {
  return (
    <div className="max-w-sm w-full">
      <p className="text-base font-semibold mt-4 font-roboto">
        Services Available
      </p>
      <div className="w-full flex flex-row justify-between">
        <ul className="pl-4">
          <li className="list-disc">Sell Old Phone</li>
          <li className="list-disc">Repair Phone</li>
        </ul>
        <ul>
          <li className="list-disc">Sell Old Phone</li>
          <li className="list-disc">Repair Phone</li>
        </ul>
      </div>
      <p className="text-base font-semibold mt-8 font-roboto">About Store</p>
      <ul>
        <li>Located at {location} Metro Station</li>
        <li>Open all days 9:00 am to 9:00 pm</li>
        <li>Sell/Buy/Repair</li>
      </ul>
    </div>
  );
}

export default AboutStore;
