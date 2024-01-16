import React from "react";
import { InfTable } from "./components/InfTable/index";
import styles from "./styles.module.scss";

export const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <InfTable />
    </div>
  );
};
