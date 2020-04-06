import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

interface IInputProps {
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  clear?: (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
  onSubmit?: (event: React.FormEvent) => void;
}

const Input: FC<IInputProps> = ({
  placeholder,
  className,
  onChange,
  value,
  clear,
  onSubmit,
}) => {
  const classList = classNames(styles.input, {
    [`${className}`]: !!className,
  });

  return (
    <div className={styles.inputWrapper}>
      <input
        tabIndex={1}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classList}
        onSubmit={onSubmit}
      />
      {clear && (
        <div
          tabIndex={0}
          onClick={clear}
          onKeyPress={clear}
          className={styles.clear}
        />
      )}
    </div>
  );
};

export { Input };
