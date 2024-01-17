import React from "react";
import { InfTable } from "./components/InfTable/index";
import styles from "./styles.module.scss";
import { ModalUser } from "./components/ModalUser";

export const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <InfTable />
      <ModalUser />
    </div>
  );
};
