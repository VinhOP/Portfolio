import {
  faCentercode,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";
import Image from "../Image";
import Contact from "../Home/Contact";
import styles from "./Navbar.module.scss";
import zalo from "../../icons/zalo.png";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useModal } from "../../Contexts/MyContext";

const cx = classNames.bind(styles);

function Navbar() {
  const [hide, setHide] = useState(true);

  const modal = useModal();

  let theEnd = 0;

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  const controlNavbar = () => {
    if (window.scrollY > theEnd) {
      setHide(false);
    } else {
      setHide(true);
    }
    theEnd = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={cx("wrapper", { "hide-nav": !hide })}>
      <div className={cx("content")}>
        <div className={cx("left-section")}>
          <h3
            className={cx("navbar-btn")}
            onClick={() => modal.scrollToContact()}
          >
            Contact me
          </h3>
          <h3
            className={cx("navbar-btn")}
            onClick={() => modal.scrollToAbout()}
          >
            About
          </h3>
          <h3 className={cx("navbar-btn")} onClick={handleToTop}>
            Portfolio
          </h3>
        </div>
        <div className={cx("social-media")}>
          <a
            target={"blank"}
            href={"https://github.com/VinhOP?tab=repositories"}
            className={cx("container")}
          >
            <h4 className={cx("title")}>
              <FontAwesomeIcon className={cx("brand-icon")} icon={faGithub} />
            </h4>
            <p> github </p>
          </a>
          <a
            target={"blank"}
            href={"https://www.facebook.com/EriVinh/"}
            className={cx("container")}
          >
            <h4 className={cx("title")}>
              <FontAwesomeIcon className={cx("brand-icon")} icon={faFacebook} />
            </h4>
            <p> facebook </p>
          </a>
          <a href="/" className={cx("container")}>
            <h4 className={cx("title")}>
              <Image className={cx("brand-icon")} src={zalo} alt={"zalo"} />
            </h4>
            <p> zalo </p>
          </a>
          <a href="/" className={cx("container")}>
            <h4 className={cx("title")}>
              <FontAwesomeIcon className={cx("brand-icon")} icon={faMailBulk} />
            </h4>
            <p> email </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
