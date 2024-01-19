import React from "react";
import { cardInputProperties } from "../utils/cardInputProperties";
import { useForm } from "react-hook-form";
import Input from "./Input";
import styles from "../style/form.module.css";

export default function Form({ changeNumber, changeCard }) {
  const { name, numberCard, month, year, code } = cardInputProperties;

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

  return (
    <section className={styles.section}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Input register={register} inputProps={name} error={errors} />
        <Input register={register} inputProps={numberCard} error={errors} />
        <Input register={register} inputProps={month} error={errors} />
        <Input register={register} inputProps={year} error={errors} />
        <Input register={register} inputProps={code} error={errors} />

        <input className={styles.formButton} type="submit" value="Confirm" />
      </form>
    </section>
  );
}
