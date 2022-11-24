import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button>
      <div onClick={onClick}>{label}</div>
    </button>
  );
};

export default Button;

