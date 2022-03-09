import React, { useState } from "react";

function Temp() {
  const [page, setPage] = useState(0);
  console.log(setPage);

  return <button onClick={() => setPage(0)}>버튼</button>;
}

export default Temp;
