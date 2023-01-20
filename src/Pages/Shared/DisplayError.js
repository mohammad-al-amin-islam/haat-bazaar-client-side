import React from "react";
import { useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();

  return (
    <div>
      {error.message}
      <h1>No page Found</h1>
    </div>
  );
};

export default DisplayError;
