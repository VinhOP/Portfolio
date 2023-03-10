import classNames from "classnames/bind";
import Image from "../../Image";
import styles from "./Projects.module.scss";
import laptop from "../../../assets/images/laptop.png";
import images from "../../../assets/images";
// import linker from "../../../images/linker-screenshot.png";
// import musicPlayer from "../../../images/music-player-screenshot.png";
// import weatherApp from "../../../images/weather-app-screenshot.png";
import Button from "../../Button";
import { useContexts } from "../../../Contexts/MyContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Projects() {
  const context = useContexts();
  const projects = [
    {
      project_id: 1,
      project_name: "Tiktok Clone",
      project_url: "https://vinhop.github.io/tiktok/",
      project_screenshot: images.tiktok,
      project_description:
        context.language === "en"
          ? "TikTok is a social media platform for creating, sharing and discovering short videos. The app is used by young people as an outlet to express themselves through singing, dancing, comedy, and lip-syncing, and allows users to create videos and share them across a community."
          : "TikTok là một nền tảng truyền thông xã hội để tạo, chia sẻ và khám phá các video ngắn. Ứng dụng này được giới trẻ sử dụng như một lối thoát để thể hiện bản thân thông qua ca hát, khiêu vũ, hài kịch và hát nhép, đồng thời cho phép người dùng tạo video và chia sẻ chúng trên cộng đồng.",
      project_tech_used:
        "HTML/CSS . Javascript . React . Github pages . SASS . Prop types . React Router DOM . Axios ",
    },
    {
      project_id: 2,
      project_name: "Nails Appointment App",
      project_url: "https://vinhop.github.io/nails-appointment-app/",
      project_screenshot: images.nailsAppointment,
      project_description:
        context.language === "en"
          ? "An management app that let you manage your business, such as making new appointment, arrange your staff, create multiple services and other interesting features aswell."
          : "App quản lý đặt lịch làm nails, khi đăng nhập bạn có thể sắp ếp lịch, quản lý nhân viên/dịch vụ và nhiều chức năng hấp dẫn khác nữa.",
      project_tech_used:
        "HTML/CSS . Javascript . React . Axios . React-toastify . Gh-pages ",
      status:
        context.language === "en"
          ? "Webpage under construction"
          : "Trang web đang trong quá trình phát triển",
    },
    {
      project_id: 3,
      project_name: "Music Player",
      project_url: "https://vinhop.github.io/music-player/",
      project_screenshot: images.musicPlayer,
      project_description:
        context.language === "en"
          ? "A music player that will make your day!! Coded using only html/css and javascript. More features will comes in the future!"
          : "Một chiếc máy nghe nhạc nhỏ nhắn sẽ làm nên 1 ngày làm việc của bạn được hiệu quả hơn!! Được code chỉ với Html/css và Javascript. Nhiều tính năng hấp dẫn nữa sẽ được ra mắt trong tương lai!",
      project_tech_used: "HTML/CSS . Javascript . Gh-pages",
    },
    {
      project_id: 4,
      project_name: "Weather App",
      project_url: "https://vinhop.github.io/weather-app/",
      project_screenshot: images.weather,
      project_description:
        context.language === "en"
          ? "A place to let user know what's the temparature , you can also get the temparature at your current location!!"
          : "Một nơi để cho người dùng biết nhiệt độ là gì, bạn cũng có thể nhận được nhiệt độ tại vị trí hiện tại của mình!!",
      project_tech_used:
        "HTML/CSS . Javascript . React . Open-weather API . Gh-pages ",
    },
    {
      project_id: 5,
      project_name: "Linker App",
      project_url: "https://vinhop.github.io/theLinker/",
      project_screenshot: images.linker,
      project_description:
        context.language === "en"
          ? "A platform where you and your friends can share videos on youtube to here with only some simple step."
          : "Một nền tảng nơi bạn và bạn bè của mình có thể chia sẻ video trên youtube tới đây chỉ bằng một số bước đơn giản.",
      project_tech_used:
        "JHTML/CSS . Javascript . React . Firebase . Github pages . SASS",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          {context.language === "en"
            ? `Project I've worked on`
            : `Những dự án của mình`}
        </div>
        <div className={cx("project-list")}>
          {projects.map((project) => {
            return (
              <div className={cx("project")} key={project.project_id}>
                <div className={cx("title")}> {project.project_name} </div>
                <div className={cx("image-section")}>
                  <div className={cx("image-container")}>
                    <Image className={cx("laptop")} src={laptop} alt="laptop" />
                    <Image
                      className={cx("screenshot")}
                      src={project.project_screenshot}
                      alt="tiktok"
                    />
                  </div>
                </div>
                <div className={cx("description")}>
                  {project.project_description || "description"}
                </div>
                <div className={cx("used-tech")}>
                  <span>
                    {context.language === "en" ? "tech used" : "công nghệ"}:
                  </span>
                  {project.project_tech_used}
                </div>
                <div className={cx("status")}>
                  <span className={cx("exclamation-icon")}>
                    {project.status && (
                      <FontAwesomeIcon icon={faTriangleExclamation} />
                    )}
                  </span>
                  <span className={cx("status-desc")}> {project.status} </span>
                </div>
                <Button
                  href={project.project_url}
                  target={"blank"}
                  className={cx("link-btn")}
                  outline
                >
                  <span>
                    {context.language === "en" ? "Check it out" : "Xem ngay"}
                  </span>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
