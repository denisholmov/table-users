import React from "react";
import styles from "./styles.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../../redux/slices/usersInfTableSlice";
import { setActiveModalInfUser } from "../../../redux/slices/usersInfTableSlice";

export const ModalUser = () => {
  const dispatch = useDispatch();
  const { activeModalInfUser, modalInfUser } = useSelector(usersSelector);

  const closeModal = () => {
    dispatch(setActiveModalInfUser(false));
  };

  return (
    <>
      {activeModalInfUser && modalInfUser && (
        <div className={styles.modal}>
          <ul>
            <li>{`ФИО: ${modalInfUser.lastName} ${modalInfUser.firstName} ${modalInfUser.maidenName}`}</li>
            <li>{`Возраст: ${modalInfUser.age}`}</li>
            <li>{`Город: ${modalInfUser.address.city}`}</li>
            <li>{`Улица: ${modalInfUser.address.address}`}</li>
            <li>{`Рост: ${modalInfUser.height}`}</li>
            <li>{`Вес: ${modalInfUser.weight}`}</li>
            <li>{`Телефон: ${modalInfUser.phone}`}</li>
            <li>{`email: ${modalInfUser.email}`}</li>
            <li className={styles.close} onClick={closeModal}>
              Закрыть
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
