import React, { FC } from "react";
import styles from "./Card.module.scss";

interface ICardProps {
  title: string;
  description: string;
  stars: number;
  className?: string;
}

const Card: FC<ICardProps> = ({ title, description, stars, className }) => {
  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.stars}>{stars}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export { Card };
