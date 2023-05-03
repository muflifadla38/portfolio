import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  peer,
  className = "",
}) => {
  return (
    <>
      <div className="mb-6 xs:mb-4">
        <label className="text-sm font-bold">{label}</label>
        <input
          className={`w-full dark:bg-slate-700 border-transparent text-slate-700 dark:text-slate-200 mt-2 rounded-md focus:outline-none focus:shadow-outline peer ${className}`}
          type={type}
          placeholder={placeholder}
        />
        {peer && (
          <p className="my-2 hidden peer-invalid:block text-pink-600 text-sm">
            {peer}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
