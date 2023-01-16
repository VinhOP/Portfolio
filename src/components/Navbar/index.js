import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "../Image";
import styles from "./Navbar.module.scss";
import zalo from "../../icons/zalo.png";
import { faCaretDown, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useContexts } from "../../Contexts/MyContext";

const cx = classNames.bind(styles);

function Navbar() {
  const context = useContexts();
  const [subBar, setSubBar] = useState(false);
  const [currentLang, setCurrentLang] = useState();

  let theEnd = 0;

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  const controlNavbar = () => {
    if (window.scrollY > theEnd) {
      document.documentElement.style.setProperty(
        "--nav-bar-top-position",
        "-70px"
      );
    } else {
      document.documentElement.style.setProperty("--nav-bar-top-position", 0);
    }
    theEnd = window.scrollY;
  };

  const handleSetLanguage = (e) => {
    setSubBar(false);
    localStorage.setItem("lang", e.target.innerHTML.toLowerCase());
    context.setLanguage(e.target.innerHTML.toLowerCase());
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    setCurrentLang(context.language?.toUpperCase());
  }, [context.language]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("left-section")}>
          <h3
            className={cx("navbar-btn")}
            onClick={() => context.scrollToContact()}
          >
            {context.language === "en" ? "Contact" : "Liên lạc"}
          </h3>
          <h3
            className={cx("navbar-btn")}
            onClick={() => context.scrollToAbout()}
          >
            {context.language === "en" ? "About" : "Về bản thân"}
          </h3>
          <h3 className={cx("navbar-btn")} onClick={handleToTop}>
            Portfolio
          </h3>
          <div className={cx("language-section")}>
            <button
              className={cx("navbar-btn", "language-btn")}
              onClick={() => setSubBar(!subBar)}
            >
              {currentLang}
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className={cx("lang-list", { active: subBar })}>
              <h4 onClick={handleSetLanguage} value="en">
                EN
              </h4>
              <h4 onClick={handleSetLanguage} value="vi">
                VI
              </h4>
            </div>
          </div>
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
