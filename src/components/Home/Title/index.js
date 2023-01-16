import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContexts } from "../../../Contexts/MyContext";
import Button from "../../Button";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ introductionRef }) {
  const context = useContexts();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h1 className={cx("title")}>Lý Quốc Vinh</h1>
        <h2 className={cx("description")}>
          {context.language === "en"
            ? "Front-end Web Developer"
            : "Lập trình viên Front-end"}
        </h2>
        <Button
          className={cx("move-down-btn")}
          onClick={() => context.scrollToAbout()}
        >
          <FontAwesomeIcon icon={faAnglesDown} />
        </Button>
      </div>
    </div>
  );
}

export default Title;
