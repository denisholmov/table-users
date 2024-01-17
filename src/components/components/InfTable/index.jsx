import React from "react";
import { SearchTable } from "./RowTableUser/components/SearchTable";
import { RowTableUser } from "./RowTableUser";
import { useSelector, useDispatch } from "react-redux";

import { setEntireListUsers } from "../../../redux/slices/usersInfTableSlice";
import { usersSelector } from "../../../redux/slices/usersInfTableSlice";

import styles from "./styles.module.scss";

export const InfTable = () => {
  const dispatch = useDispatch();
  const { entireListUsers } = useSelector(usersSelector);

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
    console.log(entireListUsers.users);
  }, [entireListUsers]); // в консоли вывел пользователей

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

          {entireListUsers &&
            entireListUsers.users &&
            arrUsers.map((person) => (
              <RowTableUser key={person.id} person={person} />
            ))}
        </tbody>
      </table>
    </>
  );
};
