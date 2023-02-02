import React from "react";

const TextArea = ({ label, placeholder = "", peer, className = "" }) => {
  return (
    <>
      <div className="mb-6">
        <label className="text-sm font-bold">{label}</label>
        <textarea
          className={`w-full bg-slate-200 dark:bg-slate-800 border-transparent text-slate-900 dark:text-slate-100 mt-2 rounded-lg focus:outline-none focus:shadow-outline peer ${className}`}
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

export default TextArea;
