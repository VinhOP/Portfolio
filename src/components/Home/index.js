import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useContexts } from "../../Contexts/MyContext";
import Contact from "./Contact";
import styles from "./Home.module.scss";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Title from "./Title";

const cx = classNames.bind(styles);

function Home() {
  const [firstRender, setFirstRender] = useState(true);
  const introductionRef = useRef();
  const contactRef = useRef();

  const context = useContexts();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    contactRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [context.contactClicked]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    introductionRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [context.aboutClicked]);

  return (
    <div className={cx("wrapper")}>
      <Title />
      <Introduction ref={introductionRef} />
      <Projects />
      <Contact ref={contactRef} />
      <div className={cx("footer")}>
        <p className={cx("description")}>
          {context.language === "en" ? "Coded using" : "Được code bằng"}
          <FontAwesomeIcon
            className={cx("logos", "react-logo")}
            icon={faReact}
          />
          {context.language === "en" ? "with" : "với nhiều"}
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
