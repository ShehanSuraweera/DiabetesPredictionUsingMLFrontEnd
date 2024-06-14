import { useRouter } from "next/router";
import React from "react";

const Popup = ({ message, isSuccess, onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="p-6 text-center bg-white rounded-lg">
        <p className="mb-5">{message}</p>
        <button
          onClick={onClose}
          className={`px-4 py-2 border-none rounded-lg text-white cursor-pointer ${
            isSuccess
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          {isSuccess ? "See Results" : "OK"}
        </button>
      </div>
    </div>
  );
};

export default Popup;
