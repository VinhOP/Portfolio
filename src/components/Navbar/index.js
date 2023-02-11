import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import {
  faCaretDown,
  faChevronDown,
  faChevronRight,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useContexts } from "../../Contexts/MyContext";
import { useMediaQueries } from "@react-hook/media-query";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import MenuOpen from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Button from "../Button";

const cx = classNames.bind(styles);
function Navbar() {
  const context = useContexts();
  const [subBar, setSubBar] = useState(false);
  const [currentLang, setCurrentLang] = useState();
  const [menu, setMenu] = useState(true);

  const [menuItems, setMenuItems] = useState([
    {
      title: "Ngôn ngữ",
      icon: (
        <FontAwesomeIcon className={cx("arrow-icon")} icon={faChevronRight} />
      ),
      isOpen: false,
      children: [
        {
          title: "EN",
          icon: (
            <FontAwesomeIcon
              className={cx("arrow-icon")}
              icon={faChevronRight}
            />
          ),
          isOpen: false,
          onClick: (e) => handleSetLanguage(e),
        },
        {
          title: "VI",
          icon: (
            <FontAwesomeIcon
              className={cx("arrow-icon")}
              icon={faChevronRight}
            />
          ),
          isOpen: false,
          onClick: (e) => handleSetLanguage(e),
        },
      ],
    },
    {
      title: "Liên hệ",
      icon: (
        <FontAwesomeIcon className={cx("arrow-icon")} icon={faChevronRight} />
      ),
      isOpen: false,
      children: [
        {
          title: "Github",
          isOpen: false,
          url: "https://github.com/VinhOP?tab=repositories",
        },
        {
          title: "Facebook",
          isOpen: false,
          url: "https://www.facebook.com/EriVinh/",
        },
        {
          title: "Email",
          isOpen: false,
          onClick: () => context.scrollToContact(),
        },
      ],
    },
  ]);

  const handleOpenMenu = (item, index) => {
    const newMenu = menuItems.map((item, i) => {
      if (i === index) {
        item.isOpen = !item.isOpen;
      }
      return item;
    });
    setMenuItems(newMenu);
  };

  const { matches } = useMediaQueries({
    screen: "screen",
    width: "(min-width: 480px)",
  });

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

  const handleShowMenuModal = () => {
    setMenu(!menu);
  };

  const handleSetLanguage = (e) => {
    setSubBar(false);

    localStorage.setItem("lang", e.target.innerText.toLowerCase());
    context.setLanguage(e.target.innerText.toLowerCase());
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
    <>
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
            {matches.width && (
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
            )}
          </div>
          <div className={cx("social-media")}>
            {matches.width ? (
              <>
                <a
                  target={"blank"}
                  href={"https://github.com/VinhOP?tab=repositories"}
                  className={cx("container")}
                >
                  <h4 className={cx("title")}>
                    <FontAwesomeIcon
                      className={cx("brand-icon")}
                      icon={faGithub}
                    />
                  </h4>
                  <p> github </p>
                </a>
                <a
                  target={"blank"}
                  href={"https://www.facebook.com/EriVinh/"}
                  className={cx("container")}
                >
                  <h4 className={cx("title")}>
                    <FontAwesomeIcon
                      className={cx("brand-icon")}
                      icon={faFacebook}
                    />
                  </h4>
                  <p> facebook </p>
                </a>
                <div
                  className={cx("container")}
                  onClick={() => context.scrollToContact()}
                >
                  <h4 className={cx("title")}>
                    <FontAwesomeIcon
                      className={cx("brand-icon")}
                      icon={faMailBulk}
                    />
                  </h4>
                  <p> email </p>
                </div>
              </>
            ) : (
              <MenuItem
                className={cx("menu-icon")}
                onClick={handleShowMenuModal}
              >
                {menu ? (
                  <MenuOpen fontSize={"large"} />
                ) : (
                  <MenuIcon fontSize={"large"} />
                )}
              </MenuItem>
            )}
          </div>
        </div>
      </div>
      <div className={cx("menu-modal", menu ? "open" : "close")}>
        <div className={cx("menu-content")}>
          {!matches.width &&
            menuItems.map((item, index) => {
              return (
                <div className={cx("menu-items")}>
                  <div
                    className={cx("menu-item")}
                    onClick={() => handleOpenMenu(item, index)}
                  >
                    <i>{item.icon}</i>
                    <p>{item.title}</p>
                  </div>
                  {item.isOpen && (
                    <div className={cx("menu-items-child")}>
                      {item.children.map((item) => {
                        console.log(item);
                        return (
                          <Button
                            href={item.url ? item.url : "javascript:;"}
                            className={cx("menu-item-child")}
                            onClick={item.onClick && item.onClick}
                          >
                            {item.title}
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          <i className={cx("hide-icon")} onClick={handleShowMenuModal}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
