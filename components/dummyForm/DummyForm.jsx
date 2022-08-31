import React from "react";
import { FormInput } from "../form/forminput/FormInput";

export const DummyForm = (props) => {
  const { object, update } = props;

  const updateField = (value, key) => {
    object.key = value;
  };
  const handleSave = () => {
    update(object);
  };

  return (
    <>
      <FormInput
        name="Name"
        value={object.Name}
        onChange={(e) => updateField(e.target.value, "Name")}
      />
      {/* <FormInput />
      <FormInput /> */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleSave}
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Save
        </button>
      </div>
    </>
  );
};
