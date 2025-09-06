import React from "react";

const AlertMessage = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`p-3 mb-3 ${type === "success" ? "bg-green-200" : "bg-red-200"}`}>
      {message}
    </div>
  );
};

export default AlertMessage;
