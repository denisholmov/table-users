import React from "react";
import { SearchTable } from "./RowTableUser/components/SearchTable";
import { RowTableUser } from "./RowTableUser";

import { useSelector, useDispatch } from "react-redux";

import {
  setEntireListUsers,
  setSearchTermAllCharacteristic,
  setFilterUsers,
  setSortAge,
} from "../../../redux/slices/usersInfTableSlice";
import { usersSelector } from "../../../redux/slices/usersInfTableSlice";

import styles from "./styles.module.scss";

export const InfTable = () => {
  const dispatch = useDispatch();
  const { entireListUsers, searchTermAllCharacteristic, filterUsers, sortAge } =
    useSelector(usersSelector);

  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const json = await response.json();
        dispatch(setEntireListUsers(json));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Функция для сортировки по возрастанию
  const sortAscendingAge = () => {
    const sortedPeople = [...filterUsers].sort((a, b) => a.age - b.age);
    dispatch(setFilterUsers(sortedPeople));
  };

  // Функция для сортировки по убыванию
  const sortDescendingAge = () => {
    const sortedPeople = [...filterUsers].sort((a, b) => b.age - a.age);
    dispatch(setFilterUsers(sortedPeople));
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    if (sortValue === "asc") {
      sortAscendingAge();
    } else if (sortValue === "des") {
      sortDescendingAge();
    }
  };

  React.useEffect(() => {
    console.log(searchTermAllCharacteristic);
    if (entireListUsers && entireListUsers.users) {
      // Проверяем существуют ли данные
      const filteredItems = entireListUsers.users
        .filter((item) => {
          if (searchTermAllCharacteristic.firstName) {
            return item.firstName
              .toLowerCase()
              .includes(searchTermAllCharacteristic.firstName.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.lastName) {
            return item.lastName
              .toLowerCase()
              .includes(searchTermAllCharacteristic.lastName.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.maidenName) {
            return item.maidenName
              .toLowerCase()
              .includes(searchTermAllCharacteristic.maidenName.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.gender) {
            if (searchTermAllCharacteristic.gender.toLowerCase() === "male") {
              return item.gender.toLowerCase() === "male";
            } else if (
              searchTermAllCharacteristic.gender.toLowerCase() === "female"
            ) {
              return item.gender.toLowerCase() === "female";
            }
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.age) {
            return String(item.age) === String(searchTermAllCharacteristic.age);
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.city) {
            return item.address.city
              .toLowerCase()
              .includes(searchTermAllCharacteristic.city.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.address) {
            return item.address.address
              .toLowerCase()
              .includes(searchTermAllCharacteristic.address.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          if (searchTermAllCharacteristic.phone) {
            return item.phone
              .toLowerCase()
              .includes(searchTermAllCharacteristic.phone.toLowerCase());
          }
          return true;
        });

      dispatch(setFilterUsers(filteredItems));
    }
  }, [searchTermAllCharacteristic, entireListUsers]);

  return (
    <>
      <SearchTable />
      <table>
        <tbody>
          <tr>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>Пол</th>
            <th>Номер телефона</th>
            <th>Город</th>
            <th>Улица</th>
          </tr>

          {filterUsers &&
            filterUsers.map((person) => (
              <RowTableUser key={person.id} person={person} />
            ))}
        </tbody>
      </table>
      <select className={styles.sortInput} onChange={handleSortChange}>
        <option value=""></option>
        <option value="asc">По возрастанию</option>
        <option value="des">По убыванию</option>
      </select>
    </>
  );
};
