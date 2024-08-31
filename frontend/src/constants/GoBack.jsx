import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

export default function GoBack() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <button onClick={back} className="bg-inherit">
      <FaArrowLeft className="h-7 w-7 mr-2" />
    </button>
  );
}
