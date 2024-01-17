import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../../../../../redux/slices/usersInfTableSlice";

import styles from "./styles.module.scss";
import {
  setEntireListUsers,
  setFilterUsers,
  setSearchTermAllCharacteristic,
} from "../../../../../../redux/slices/usersInfTableSlice";

export const SearchTable = () => {
  const dispatch = useDispatch();
  const { entireListUsers, filteredUsers, searchTermAllCharacteristic } =
    useSelector(usersSelector);

  const [searchTermLastName, setSearchTermLastName] = React.useState("");
  const [searchTermFirstName, setSearchTermFirstName] = React.useState("");
  const [searchTermMaidenName, setSearchTermMaidenName] = React.useState("");

  const [searchTermAge, setSearchTermAge] = React.useState(0);
  const [searchTermGender, setSearchTermGender] = React.useState("");
  const [searchTermPhone, setSearchTermPhone] = React.useState("");
  const [searchTermCity, setSearchTermCity] = React.useState("");
  const [searchTermStreet, setSearchTermStreet] = React.useState("");

  const handleChangeLastName = (event) => {
    setSearchTermLastName(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setSearchTermFirstName(event.target.value);
  };

  const handleChangeMaidenName = (event) => {
    setSearchTermMaidenName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setSearchTermAge(event.target.value);
  };

  const handleChangeGender = (event) => {
    setSearchTermGender(event.target.value);
  };

  const handleChangePhone = (event) => {
    setSearchTermPhone(event.target.value);
  };

  const handleChangeCity = (event) => {
    setSearchTermCity(event.target.value);
  };

  const handleChangeStreet = (event) => {
    setSearchTermStreet(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    dispatch(
      setSearchTermAllCharacteristic({
        lastName: searchTermLastName,
        firstName: searchTermFirstName,
        maidenName: searchTermMaidenName,
        age: searchTermAge,
        gender: searchTermGender,
        phone: searchTermPhone,
        city: searchTermCity,
        address: searchTermStreet,
      })
    );

    setSearchTermLastName("");
    setSearchTermFirstName("");
    setSearchTermMaidenName("");
    setSearchTermAge(0);
    setSearchTermGender("");
    setSearchTermPhone("");
    setSearchTermCity("");
    setSearchTermStreet("");
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearchSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Фамилия"
          value={searchTermLastName}
          onChange={handleChangeLastName}
        />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Имя"
          value={searchTermFirstName}
          onChange={handleChangeFirstName}
        />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Отчество"
          value={searchTermMaidenName}
          onChange={handleChangeMaidenName}
        />

        <input
          className={`${styles.searchInput} ${styles.searchAge}`}
          type="number"
          placeholder="Возраст"
          value={searchTermAge}
          onChange={handleChangeAge}
        />

        <select
          value={searchTermGender}
          onChange={handleChangeGender}
          className={`${styles.searchInput} ${styles.searchGender}`}
        >
          <option value=""></option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <input
          value={searchTermPhone}
          onChange={handleChangePhone}
          className={styles.searchInput}
          type="tel"
          placeholder="Номер телефона"
        />

        <input
          value={searchTermCity}
          onChange={handleChangeCity}
          className={styles.searchInput}
          type="text"
          placeholder="Город"
        />

        <input
          value={searchTermStreet}
          onChange={handleChangeStreet}
          className={styles.searchInput}
          type="text"
          placeholder="Улица"
        />

        <button className={styles.btn} type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
};
