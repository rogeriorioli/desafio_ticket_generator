import React from "react";
import styles from "./style.module.css";
import { space } from "@/app/fonts";

type TitleProps = {
  title: string;
};

const Title = () => {
  return (
    <h1 className={`${styles.title} ${space.className} mb-8`}>
      GERE SEU TICKET <br /> E COMPARTILHE <br /> COM O MUNDO
    </h1>
  );
};

export default Title;
