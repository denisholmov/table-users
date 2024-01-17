import React from "react";

import styles from "./styles.module.scss";

export const SearchTable = () => {
  const [searchTermLastName, setSearchTermLastName] = React.useState("");
  const [searchTermFirstName, setSearchTermFirstName] = React.useState("");
  const [searchTermMaidenName, setSearchTermMaidenName] = React.useState("");

  const [searchTermAge, setSearchTermAge] = React.useState(0);
  const [searchTermGender, setSearchTermGender] = React.useState("");
  const [searchTermPhone, setSearchTermPhone] = React.useState("");
  const [searchTermCity, setSearchTermCity] = React.useState("");
  const [searchTermStreet, setSearchTermStreet] = React.useState("");

  const [searchTermAllCharacteristic, setSearchTermAllCharacteristic] =
    React.useState({});

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

    setSearchTermAllCharacteristic({
      searchTermLastName,
      searchTermFirstName,
      searchTermMaidenName,
      searchTermAge,
      searchTermGender,
      searchTermPhone,
      searchTermCity,
      searchTermStreet,
    });

    setSearchTermLastName("");
    setSearchTermFirstName("");
    setSearchTermMaidenName("");
    setSearchTermAge(0);
    setSearchTermGender("");
    setSearchTermPhone("");
    setSearchTermCity("");
    setSearchTermStreet("");

    //  // Отправка запроса
    //  fetch("https://dummyjson.com/users/search", {
    //    method: "POST",
    //    body: JSON.stringify({ inputValue }),
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //  })
    //    .then((response) => response.json())
    //    .then((data) => {
    //      console.log(data);
    //      // Действия после получения ответа
    //    })
    //    .catch((error) => {
    //      console.error(error);
    //    });
  };

  React.useEffect(() => {
    console.log(searchTermAllCharacteristic, "searchTermAllCharacteristic");
  }, [searchTermAllCharacteristic]);

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
