import { useState } from "react";

const Counts = () => {
  const [count, setcount] = useState(0);
  const handelIncrement = () => {
    const newincrement = count + 1;
    setcount(newincrement);
  };

  const handeldeccrement = () => {
    const newincrement = count - 1;
    setcount(newincrement);
  };

  const handelreset = () => {
    setcount(0);
  };

  return (
    <div className="m-10 flex flex-col text-white font-bold">
      <h1 className="text-center bg-purple-200 p-3">{count}</h1>
      <button
        disabled={count === 5 ? true : false}
        className="m-10 bg-purple-800 p-10 rounded-xl"
        onClick={handelIncrement}
      >
        +
      </button>
      <button
        disabled={count === 0 ? true : false}
        className="m-10 bg-purple-800 p-10 rounded-xl"
        onClick={handeldeccrement}
      >
        -
      </button>

      <button
        // disabled={count === 0 ? true : false}
        className="m-10 bg-purple-800 p-10 rounded-xl"
        onClick={handelreset}
      >
        reset
      </button>
    </div>
  );
};

export default Counts;
