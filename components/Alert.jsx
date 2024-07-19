import React from "react";

const Alert = ({ type, message, onClose }) => {
  // Define clases Tailwind para diferentes tipos de alerta
  const alertStyles = {
    success: "bg-green-500 border-green-700 text-white",
    error: "bg-red-500 border-red-700 text-white",
    info: "bg-blue-500 border-blue-700 text-white",
    warning: "bg-yellow-500 border-yellow-700 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 border rounded shadow-lg z-50 ${alertStyles[type]}`}
    >
      <span>{message}</span>
      <button className="ml-4 text-xl font-semibold" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
