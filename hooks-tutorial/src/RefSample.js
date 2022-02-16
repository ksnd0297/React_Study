import { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  console.log("aaa");
  return (
    <div>
      refsample
      <button onClick={() => setId(id.current + 1)}>+1</button>
      <button onClick={() => printId()}>버튼</button>
      <b>{id.current}</b>
    </div>
  );
};

export default RefSample;
