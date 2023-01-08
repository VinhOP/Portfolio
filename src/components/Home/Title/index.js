import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useModal } from "../../../Contexts/MyContext";
import Button from "../../Button";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ introductionRef }) {
  const modal = useModal();
  // const handleScroll = () => {
  //   introductionRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h1 className={cx("title")}>Lý Quốc Vinh</h1>
        <h2 className={cx("description")}> Front-end Web Developer </h2>
        <Button
          className={cx("move-down-btn")}
          onClick={() => modal.scrollToAbout()}
        >
          <FontAwesomeIcon icon={faAnglesDown} />
        </Button>
      </div>
    </div>
  );
}

export default Title;
