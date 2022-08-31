import React from "react";

export const FormInput = (props) => {
  const { name, handleChange } = props;
  return (
    <div>
      <label
        htmlFor={name.toLowerCase()}
        className="block mb-2 text-md font-medium text-black dark:text-black"
      >
        {name}
      </label>
      <input
        type="text"
        id={name.toLowerCase()}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};
