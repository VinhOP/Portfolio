import classNames from "classnames/bind";
import Navbar from "../../components/Navbar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}> {children} </div>
    </div>
  );
}

export default DefaultLayout;
