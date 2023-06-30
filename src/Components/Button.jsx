import React from "react";

function Button({ value, className, ...rest }) {
  return (
    <button
      className={`border-2 w-[25%] border-black p-2 flex justify-center items-center bg-black text-white ${className}`}
      {...rest}
    >
      {value}
    </button>
  );
}

export default Button;
