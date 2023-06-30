import React from "react";

function IconButton({ children, className, ...rest }) {
  return (
    <button
      className={`p-2 bg-black text-white rounded text-2xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
