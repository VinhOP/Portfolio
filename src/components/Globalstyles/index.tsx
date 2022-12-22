import classNames from "classnames/bind";
import React from "react";
import styles from "./Globalstyles.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
}

function Globalstyles({ children }: Props) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Globalstyles;
