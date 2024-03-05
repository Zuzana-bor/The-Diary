const MainArea = () => {
  return (
    <div className=" center w-full ">
      <div
        className="w-9/8
       m-5  "
      >
        <input
          type="text"
          id="title"
          autoFocus
          className="w-full  border h-20"
        />
        <textarea
          id="body"
          placeholder="write your note here"
          className="w-full min-h-80 border mt-5"
        />
      </div>
      <div className="bg-stone-100 min-h-dvh p-5">
        <h1 className="text-4xl font-bold">TITLE</h1>
        <div className="">note preview</div>
      </div>
    </div>
  );
};

export default MainArea;
