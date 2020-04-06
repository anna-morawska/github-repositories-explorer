import React, { FC } from "react";
import classNames from "classnames";
import { CircleLoader } from "../";
import styles from "./Button.module.scss";

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<IButtonProps> = ({
  onClick,
  children,
  disabled = false,
  loading = false,
  className,
  type,
}) => {
  const classList = classNames(styles.button, {
    [styles.disabled]: disabled,
    [`${className}`]: !!className,
  });

  return (
    <button
      tabIndex={1}
      type={type ? type : undefined}
      onClick={onClick}
      className={classList}
    >
      {loading ? <CircleLoader /> : children}
    </button>
  );
};

export { Button };
