import React from "react";
import { cardInputProperties } from "../utils/cardInputProperties";
import { useForm } from "react-hook-form";
import Input from "./Input";
import styles from "../style/form.module.css";

export default function Form({ changeNumber, changeCard }) {
  const { nameProps, numberProps, monthProps, yearProps, codeProps } =
    cardInputProperties;

  const handleNumber = (e) => {
    let formatNumber = "";

    for (let index = 0; index < e.target.value.length; index++) {
      formatNumber += e.target.value[index];

      if ((index + 1) % 4 === 0) formatNumber += " ";
      if (index === 15) break;
    }
    changeNumber(formatNumber);
  };

  const onHandlerChange = (e) => {
    changeCard(e);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validate = {
    required: {
      value: true,
      message: "nombre es requerido",
    },
    minLength: {
      value: 4,
      message: "minimo 4 char",
    },
    pattern: /[A-Za-z ]/,
  };

  const funcInput = (e) => !e.key.match("[A-Za-z ]") && e.preventDefault();

  return (
    <section className={styles.section}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Input
          label="name"
          register={register}
          validate={validate}
          handleClick={funcInput}
          error={errors}
        />
        {/* <input {...register("firstName", {})} /> */}

        {/* <label htmlFor="username" className={styles.formLabel}>
          cardholder name
        </label>
        <Input inputProp={nameProps} handleChange={onHandlerChange} />
        <label htmlFor="number" className={styles.formLabel}>
          card number
        </label>
        <Input inputProp={numberProps} handleChange={handleNumber} />
        <div className={styles.formGrid}>
          <div className="col-date">
            <label htmlFor="number" className={styles.formLabel}>
              exp. date(mm/yy)
            </label>
            <div className={styles.formGrid}>
              <Input inputProp={monthProps} handleChange={onHandlerChange} />
              <Input inputProp={yearProps} handleChange={onHandlerChange} />
            </div>
          </div>
          <div className="col-code">
            <label htmlFor="number" className={styles.formLabel}>
              cvc
            </label>
            <Input inputProp={codeProps} handleChange={onHandlerChange} />
          </div>
        </div> */}

        <input className={styles.formButton} type="submit" value="Confirm" />
      </form>
    </section>
  );
}
