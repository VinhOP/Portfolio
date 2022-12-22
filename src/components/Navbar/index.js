import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);
function Navbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("left-section")}>
          <h3 className={cx("navbar-btn")}> Contact me </h3>
          <h3 className={cx("navbar-btn")}> About </h3>
          <h3 className={cx("navbar-btn")}> Portfolio </h3>
        </div>
        <div className={cx("social-media")}>
          <div className={cx("container")}>
            <h4 className={cx("title")}>github</h4>
          </div>
          <div className={cx("container")}>
            <h4 className={cx("title")}>facebook</h4>
          </div>
          <div className={cx("container")}>
            <h4 className={cx("title")}>alo</h4>
          </div>
          <div className={cx("container")}>
            <h4 className={cx("title")}>email</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
