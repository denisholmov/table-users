import React from "react";
import { RowTableUser } from "./RowTableUser";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  usersSelector,
} from "../../../redux/slices/usersInfTableSlice";

import styles from "./styles.module.scss";

export const InfTable = () => {
  const dispatch = useDispatch();
  const { entireListUsers } = useSelector(usersSelector);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  React.useEffect(() => {
    console.log(entireListUsers);
  }, [entireListUsers]); // в консоли вывел пользователей

  const arrUsers = entireListUsers.users;

  return (
    <table>
      <tr>
        <th>ФИО</th>
        <th>Возраст</th>
        <th>Пол</th>
        <th>Номер телефона</th>
        <th>Город</th>
        <th>Улица</th>
      </tr>
      {/* key={entireListUsers.id} */}
      {arrUsers.map((person) => (
        <RowTableUser key={person.id} person={person} />
      ))}
      {/* <RowTableUser user={arrUsers} /> */}
    </table>
  );
};
