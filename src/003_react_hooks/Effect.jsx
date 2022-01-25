import React, { useEffect, useState } from "react";
import useCount from "./Count";

const Effect = () => {
  /* const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
    console.log(count);
  }, [count]); */

  const { count, handleCountIncrement } = useCount(0);

  return (
    <div>
      <p className="text-lg font-medium">Count: {count}</p>
      <button
        className="bg-blue-400 rounded-md px-3 py-2"
        onClick={handleCountIncrement}
      >
        Increment
      </button>
    </div>
  );
};

export default Effect;
