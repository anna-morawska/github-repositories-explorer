import React, { FC } from "react";
import classNames from "classnames";
// import { CSSTransition } from "react-transition-group";
import styles from "./Dropdown.module.scss";
import "./DropdownTransitions.scss";

interface IDropdownProps {
  title: string;
  isOpen: boolean;
  onClick?: (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
}

const Dropdown: FC<IDropdownProps> = ({ title, isOpen, children, onClick }) => {
  return (
    <div className={styles.dropdownWrapper}>
      <div
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyPress={onClick}
        className={styles.dropdown}
      >
        <p className={styles.title}>{title}</p>
        <div
          className={classNames(styles.arrow, {
            [styles.isOpen]: isOpen,
          })}
        />
      </div>
      {isOpen && <div className={styles.contentWrapper}>{children}</div>}
    </div>
  );
};

export { Dropdown };
