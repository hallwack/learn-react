import { useEffect, useState } from "react";

const useCount = (number) => {
  const [count, setCount] = useState(number);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  return { count, handleCountIncrement };
};

export default useCount;
