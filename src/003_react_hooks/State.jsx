import React from "react";
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  console.log(useState());

  return (
    <div>
      <p>Nilai : {count}</p>
      <button
        className="bg-blue-400 rounded-sm px-3 py-2 mr-2"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
      <button
        className="bg-blue-400 rounded-sm px-3 py-2"
        onClick={() => setCount(count - 1)}
      >
        Kurang
      </button>
    </div>
  );
};

export default State;
