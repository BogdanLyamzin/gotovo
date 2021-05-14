import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Logo.module.scss";

const Logo = ({ type }) => {
  const router = useRouter();

  const nameClass = type === "main" ? "mainName" : "lightName";

  return (
    <Link href="/" locale={router.locale}>
      <a className={styles.logo}>
        <p className={styles[nameClass]}>ГОТОВО!</p>
        <span className={styles.text}>Документ-сервіс</span>
      </a>
    </Link>
  );
};

export default Logo;