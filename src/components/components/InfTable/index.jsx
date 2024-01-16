import React from "react";
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
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
    </table>
  );
};
