import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import ActualComponent from "./ActualComponent";

const YourComponent = dynamic(() => import("./ActualComponent"), {
  ssr: false,
});

export default YourComponent;
