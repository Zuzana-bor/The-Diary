const Sidebar = () => {
  return (
    <div className="border-r-4 w-full max-w-96 h-screen ms:hidden bg-stone-300">
      <div className="flex justify-between mx-5">
        <h1 className="text-6xl">Notes</h1>

        <button className="text-cyan-500 text-2xl border-solid border-2 border-sky-500 ">
          Add
        </button>
      </div>
      <div>
        <div className="bg-stone-500">
          <div>
            <strong>TITLE</strong>
            <button>DELETE</button>
          </div>
          <p>Note preview</p>
          <small>Last modified [date]</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
