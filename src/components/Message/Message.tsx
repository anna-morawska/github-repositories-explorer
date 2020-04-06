import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Message.module.scss";

enum MessageType {
  INFO = "INFO",
  ERROR = "ERROR",
  WARNING = "WARNING"
}

interface IMessageProps {
  type: MessageType | null;
  text: string | null;
  className?: string;
}

const Message: FC<IMessageProps> = ({ type, text, className }) => {
  const classList = classNames(styles.message, {
    [styles.info]: type === MessageType.INFO,
    [styles.warning]: type === MessageType.WARNING,
    [styles.error]: type === MessageType.ERROR,
    className: !!className
  });

  return type === null || text === null ? null : (
    <p className={classList}>{text}</p>
  );
};

export { Message, MessageType };
