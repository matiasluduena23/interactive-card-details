import React from "react";
import styles from "../style/card.module.css";

import cardFront from "../assets/bg-card-front.png";
import cardLogo from "../assets/card-logo.svg";
import cardBack from "../assets/bg-card-back.png";

export default function Card({ card }) {
  const { name, number, month, year, code } = card;

  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <div className="container">
          <div className={styles.cardFront}>
            <div className={styles.cardLogo}>
              <img src={cardLogo} alt="card logo circle" />
            </div>

            <img src={cardFront} alt="card front side" />
            <span className={styles.cardFrontName}>{name}</span>

            <span className={styles.cardFrontNumber}> {number}</span>

            <span className={styles.cardFrontDate}>
              {month}/{year}
            </span>
          </div>
          <div className={styles.cardBack}>
            <img src={cardBack} alt="card back side" />

            <span className={styles.cardBackCode}>{code}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
