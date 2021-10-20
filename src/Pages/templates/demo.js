import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/latestworkdata";

const Demo = () => {
  const { projectid } = useParams();
  console.log(projectid);
  const filteredData = Data.filter((item) => item.name === projectid);
  console.log(filteredData);
  return <div>{filteredData[0].name}</div>;
};

export default Demo;
