import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
    console.log(count);
  }, [count]);

  return (
    <div>
      <p className="text-lg font-medium">Count: {count}</p>
      <button
        className="bg-blue-400 rounded-md px-3 py-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Effect;
