const StoreForm = ({
  isDone,
  locationStore,
  setLocationStore,
  handleSubmit,
  successMessage,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-500 bg-gray-900 border border-gray-500 rounded-md p-3 w-80 z-30"
    >
      <h2 className="text-xl font-bold">Upload Stores new Location</h2>

      {isDone?.status === "success" && (
        <p className="text-green-500">{successMessage}</p>
      )}
      {isDone?.status === "rejected" && (
        <p className="text-red-500">"something is wrong </p>
      )}

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Location Name">Location Name</label>
        <input
          required
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          value={locationStore?.locationName}
          onChange={(e) =>
            setLocationStore({ ...locationStore, locationName: e.target.value })
          }
          type="text"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Location Latitude">Location Latitude</label>
        <input
          required
          value={locationStore?.lat}
          onChange={(e) =>
            setLocationStore({ ...locationStore, lat: e.target.value })
          }
          step="any"
          min="0"
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2 hide-arrow-number"
          type="number"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Location longitude">Location longitude</label>
        <input
          required
          value={locationStore?.long}
          onChange={(e) =>
            setLocationStore({ ...locationStore, long: e.target.value })
          }
          step="any"
          min="0"
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2 hide-arrow-number"
          type="number"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Store Description">Store Description</label>
        <textarea
          required
          cols="20"
          rows="5"
          value={locationStore?.description}
          onChange={(e) =>
            setLocationStore({
              ...locationStore,
              description: e.target.value,
            })
          }
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          type="text"
        />
      </div>

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Device Image">Device Image</label>
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          onChange={(e) =>
            setLocationStore({ ...locationStore, photo: e.target.files[0] })
          }
        />
      </div>

      {isDone?.status === "pending" ? (
        <div className="bg-blue-500 text-gray-200 py-2 rounded-lg outline-none pl-2 w-full">
          Waiting for uploading...
        </div>
      ) : (
        <button
          type="submit"
          className="bg-blue-500 text-gray-200 py-2 rounded-lg outline-none pl-2 w-full"
        >
          Upload
        </button>
      )}
    </form>
  );
};

export default StoreForm;
