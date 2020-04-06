import React, { FC } from "react";
import styles from "./CircleLoader.module.scss";

interface ICircleLoaderProps {}

const CircleLoader: FC<ICircleLoaderProps> = () => (
  <div className={styles.circleLoader}>
    {[...Array(10).keys()].map(index => (
      <div key={index} className={styles.dot}></div>
    ))}
  </div>
);

export { CircleLoader };
