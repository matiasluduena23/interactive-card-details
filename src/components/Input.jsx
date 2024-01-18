import React from "react";

export default function Input({
  label,
  register,
  validate,
  handleClick,
  error,
}) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input {...register(label, { ...validate })} onKeyDown={handleClick} />
      {error.name && <p>{error.name.message}</p>}
    </>
  );
}
