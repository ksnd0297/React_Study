import React from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>goBack</button>
      <button onClick={goHome}>Home</button>
    </div>
  );
};

export default HistorySample;
