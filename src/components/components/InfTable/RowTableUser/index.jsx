import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveModalInfUser,
  setModalInfUser,
  usersSelector,
} from "../../../../redux/slices/usersInfTableSlice";
import styles from "./styles.module.scss";

export const RowTableUser = ({ person }) => {
  const dispatch = useDispatch();

  const handleClickModalInfUser = (person) => {
    dispatch(setActiveModalInfUser(true));
    dispatch(setModalInfUser(person));
  };

  return (
    <tr onClick={() => handleClickModalInfUser(person)}>
      <td>{`${person.firstName} ${person.lastName} ${person.maidenName}`}</td>
      <td>{person.age}</td>
      <td>{person.gender}</td>
      <td>{person.phone}</td>
      <td>{person.address.city}</td>
      <td>{person.address.address}</td>
    </tr>
  );
};
