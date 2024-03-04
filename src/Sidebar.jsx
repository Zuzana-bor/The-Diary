const Sidebar = () => {
  return (
    <div className="border-r-4 w-full max-w-96 h-screen ms:hidden bg-stone-300">
      <div className="flex justify-between p-5">
        <h1 className="text-6xl">Notes</h1>

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <div>
        <div className="bg-stone-500">
          <div className="flex justify-between p-5">
            <strong className="text-3xl">TITLE</strong>
            <button className="bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              DELETE
            </button>
          </div>
          <p>Note preview</p>
          <small>Last modified [date]</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
