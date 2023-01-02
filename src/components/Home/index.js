import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef } from "react";
import Image from "../Image";
import Contact from "./Contact";
import styles from "./Home.module.scss";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Title from "./Title";

const cx = classNames.bind(styles);

function Home(ref) {
  const introductionRef = useRef();
  const contactRef = useRef();
  ref = contactRef;

  return (
    <div className={cx("wrapper")}>
      <Title introductionRef={introductionRef} />
      <Introduction ref={introductionRef} />
      <Projects />
      <Contact ref={contactRef} />
      <div className={cx("footer")}>
        <p className={cx("description")}>
          Coded using
          <FontAwesomeIcon
            className={cx("logos", "react-logo")}
            icon={faReact}
          />
          with
          <FontAwesomeIcon
            className={cx("logos", "heart-logo")}
            icon={faHeart}
          />
        </p>
      </div>
    </div>
  );
}

export default Home;
