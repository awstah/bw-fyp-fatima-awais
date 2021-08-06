import React from "react";

function Field({ Icon, type, placeholder, value, change }) {
  return (
    <div className="inputdiv ">
      <Icon className="text-gray-600" />
      <input
        type={type}
        placeholder={placeholder}
        className="inputfield"
        required
        value={value}
        onChange={change}
      />
    </div>
  );
}

export default Field;
