import React from "react";

function Count({ completed, incomplete }) {
  return (
    <React.Fragment>
      <span className="px-1 py-0.5 w-5 inline-block mr-1 rounded-lg bg-green-500 text-white ">
        {completed}
      </span>
      <span className="px-1 py-0.5 w-5 bg-red-500 text-white rounded-lg inline-block rounded-">{incomplete}</span>
    </React.Fragment>
  );
}

export default Count;
