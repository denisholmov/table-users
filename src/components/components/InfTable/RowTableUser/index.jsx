import React from "react";
import styles from "./styles.module.scss";

export const RowTableUser = ({ person }) => {
  // здесь нужно проверять совпадает ли состояние в инпуте с тем, что хранится тут, если да, то делает скролл к этому элементу
  return (
    <tr>
      <td>{`${person.firstName} ${person.lastName} ${person.maidenName}`}</td>
      <td>{person.age}</td>
      <td>{person.gender}</td>
      <td>{person.phone}</td>
      <td>{person.address.city}</td>
      <td>{person.address.address}</td>
    </tr>
  );
};
