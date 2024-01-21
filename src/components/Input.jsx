import React from "react";
import styles from "../style/input.module.css";

export default function Input({ watch = null, register, inputProps, error, handleChange }) {

  let { input, validationHookForm } = inputProps;
  const { label, name, type, tabIndex, placeholder, onKeyDown } = input;

  if (watch) validationHookForm = {
    ...validationHookForm,
    validate: (value) => {
      const year = watch('year');
      const date = new Date(`20${year}/${value}/01`)
      const today = new Date()
      console.log(date.getTime(), today.getTime(), value)
      return (!isNaN(date) && date.getTime() > today.getTime()) || 'Wrong date'
    },
  }

  return (
    <>
      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor={name}>{label}</label>
        <input

          className={`${styles.inputField} ${error[name] && styles.inputError}`}
          {...register(name, { ...validationHookForm })}
          type={type}
          tabIndex={tabIndex}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />
        {error[name] && <span className={styles.spanError}>{error[name].message}</span>}
      </div>


    </>
  );
}
