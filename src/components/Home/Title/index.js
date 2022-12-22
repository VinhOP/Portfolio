import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);
function Title() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>My Name</h1>
      <h2 className={cx("description")}> Web Developer </h2>
    </div>
  );
}

export default Title;
