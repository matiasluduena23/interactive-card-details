import React from "react";
import { cardInputProperties } from "../utils/cardInputProperties";
import { useForm } from "react-hook-form";
import Input from "./Input";
import styles from "../style/form.module.css";


export default function Form({ changeNumber, changeCard }) {
  const { name, numberCard, month, year, code } = cardInputProperties;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  //print number in card with spaces
  const handleNumber = (e) => {
    let formatNumber = "";
    for (let index = 0; index < e.target.value.length; index++) {
      formatNumber += e.target.value[index];

      if ((index + 1) % 4 === 0) formatNumber += " ";
      if (index === 15) break;
    }
    changeNumber(formatNumber);
  };

  //print values in card
  const onHandlerChange = (e) => {
    changeCard(e);
  };




  return (
    <section className={styles.section}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Input register={register} inputProps={name} error={errors} handleChange={onHandlerChange} />
        <Input register={register} inputProps={numberCard} error={errors} handleChange={handleNumber} />

        <div className={styles.formGrid}>
          <div className={styles.formGrid}>
            <Input watch={watch} register={register} inputProps={month} error={errors} handleChange={onHandlerChange} />
            <Input register={register} inputProps={year} error={errors} handleChange={onHandlerChange} />
          </div>
          <div className="col-2">
            <Input register={register} inputProps={code} error={errors} handleChange={onHandlerChange} />
          </div>
        </div>


        <input className={styles.formButton} type="submit" value="Confirm" />
      </form>
    </section>
  );
}
