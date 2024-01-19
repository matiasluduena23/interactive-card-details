import React from "react";

export default function Input({ register, inputProps, error }) {
  // console.log(inputProps);
  const { input, validationHookForm } = inputProps;
  const { name, type, tabIndex, placeholder, onKeyDown } = input;

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        {...register(name, { ...validationHookForm })}
        type={type}
        tabIndex={tabIndex}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      {error[name] && <p>{error[name].message}</p>}
    </>
  );
}
