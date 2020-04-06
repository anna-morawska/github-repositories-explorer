import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../store/reducers/rootReducer";
import { fetchUsersData, clearData } from "../../store/actions/data";
import { statusAction } from "../../store/actions/status";
import {
  Dropdown,
  Card,
  Input,
  Button,
  Message,
  MessageType,
} from "../../components";
import styles from "./Main.module.scss";

interface IMainProps {}

const Main: FC<IMainProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [openedDropdownIndex, setOpenedDropdownIndex] = useState<number | null>(
    null
  );
  const dispatch = useDispatch();
  const status = useSelector((store: IStore) => store.status);
  const loading = useSelector((store: IStore) => store.loading);
  const users = useSelector((store: IStore) => store.users);

  const onValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchHandler = () => {
    dispatch(fetchUsersData(inputValue));
  };

  const toggleDropdown = (index: number) => () => {
    setOpenedDropdownIndex(openedDropdownIndex === index ? null : index);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const clearDataHandler = () => {
    dispatch(statusAction(null, null));
    dispatch(clearData());
    setInputValue("");
    setOpenedDropdownIndex(null);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <Input
          clear={clearDataHandler}
          value={inputValue}
          onChange={onValueChangeHandler}
          placeholder="Enter username"
          onSubmit={searchHandler}
        />
        <Button
          type="submit"
          className={styles.button}
          disabled={loading || inputValue.trim() === ""}
          loading={loading}
          onClick={searchHandler}
        >
          Search
        </Button>
      </form>
      <Message type={status.status} text={status.message} />
      <div className={styles.resultsContainer}>
        {users.map((user, index) => (
          <Dropdown
            key={user.login}
            isOpen={openedDropdownIndex === index}
            title={user.login}
            onClick={toggleDropdown(index)}
          >
            {user.repos.length !== 0 ? (
              user.repos.map((repo, index) => (
                <Card
                  key={index}
                  title={repo.name}
                  description={repo.description}
                  stars={repo.stargazers_count}
                />
              ))
            ) : (
              <Message
                type={MessageType.WARNING}
                text={`Sorry, we couldn't find any results`}
              />
            )}
          </Dropdown>
        ))}
      </div>
    </main>
  );
};

export { Main };
