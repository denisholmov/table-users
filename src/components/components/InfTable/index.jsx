import React from "react";
import { SearchTable } from "./RowTableUser/components/SearchTable";
import { RowTableUser } from "./RowTableUser";
import { useSelector, useDispatch } from "react-redux";

import {
  setEntireListUsers,
  setSearchTermAllCharacteristic,
  setFilterUsers,
} from "../../../redux/slices/usersInfTableSlice";
import { usersSelector } from "../../../redux/slices/usersInfTableSlice";

import styles from "./styles.module.scss";

export const InfTable = () => {
  const dispatch = useDispatch();
  const { entireListUsers, searchTermAllCharacteristic, filterUsers } =
    useSelector(usersSelector);

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

  React.useEffect(() => {
    if (entireListUsers && entireListUsers.users) {
      // Проверяем существуют ли данные
      const filteredItems = entireListUsers.users.filter((item) => {
        if (searchTermAllCharacteristic.firstName) {
          return item.firstName
            .toLowerCase()
            .includes(searchTermAllCharacteristic.firstName.toLowerCase());
        }
        return true;
      });
      dispatch(setFilterUsers(filteredItems));
    }
  }, [searchTermAllCharacteristic, entireListUsers]);

  const arrUsers = entireListUsers.users;

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
    </>
  );
};
