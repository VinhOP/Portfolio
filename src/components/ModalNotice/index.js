import classNames from "classnames/bind";
import styles from "./ModalNotice.module.scss";

const cx = classNames.bind(styles);
function ModalNotice() {
  return (
    <div className={cx("wrapper")}>
      <h4> Sent Successfully </h4>
    </div>
  );
}

export default ModalNotice;
