const RepairDeviceForm = ({
  isDone,
  repairDevice,
  setRepairDevice,
  handleSubmit,
  successMessage,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-500 bg-gray-900 border border-gray-500 rounded-md p-3 w-80 z-30"
    >
      <h2 className="text-xl font-bold">Upload Repairing new device</h2>

      {isDone?.status === "success" && (
        <p className="text-green-500">{successMessage}</p>
      )}
      {isDone?.status === "rejected" && (
        <p className="text-red-500">"something is wrong </p>
      )}

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Select Category">Select Category</label>
        <select
          required
          className="bg-gray-500 text-gray-200 py-2 outline-none"
          value={repairDevice?.category}
          onChange={(e) =>
            setRepairDevice({ ...repairDevice, category: e.target.value })
          }
        >
          <option value="Apple">Apple</option>
          <option value="Redmi">Redmi</option>
          <option value="Samsung">Samsung</option>
          <option value="Nokia">Nokia</option>
          <option value="Huawei">Huawei</option>
          <option value="Asus">Asus</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Device Name">Device Name</label>
        <input
          required
          value={repairDevice?.device}
          onChange={(e) =>
            setRepairDevice({ ...repairDevice, device: e.target.value })
          }
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          type="text"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Device Description">Device Description</label>
        <textarea
          required
          cols="20"
          rows="5"
          value={repairDevice?.description}
          onChange={(e) =>
            setRepairDevice({
              ...repairDevice,
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
            setRepairDevice({ ...repairDevice, photo: e.target.files[0] })
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

export default RepairDeviceForm;
