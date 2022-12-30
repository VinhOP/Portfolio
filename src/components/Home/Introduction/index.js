import classNames from "classnames/bind";
import { forwardRef } from "react";
import Image from "../../Image";
import styles from "./Introduction.module.scss";

const cx = classNames.bind(styles);
const Introduction = forwardRef((props, ref) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")} ref={ref}>
        <div className={cx("header")}>
          <div className={cx("avatar-container")}>
            <Image
              className={cx("avatar")}
              src="https://cdn.images.express.co.uk/img/dynamic/36/590x/Lord-of-the-Rings-frodo-1471501.jpg?r=1628326023277"
              alt="avatar"
            />
          </div>
          <div className={cx("title")}>
            <h1 className={cx("info")}>I'm Vinh and I enjoy</h1>
            <h2 className={cx("hobby")}> CODING </h2>
          </div>
        </div>
        <p className={cx("description")}> I'm a front-end web developer </p>
      </div>
    </div>
  );
});

export default Introduction;
