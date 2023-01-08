import classNames from "classnames/bind";
import Image from "../../Image";
import styles from "./Projects.module.scss";
import laptop from "../../../images/laptop.png";
import tiktok from "../../../images/tiktok-screenshot.png";
import linker from "../../../images/linker-screenshot.png";
import musicPlayer from "../../../images/music-player-screenshot.png";
import weatherApp from "../../../images/weather-app-screenshot.png";
import Button from "../../Button";

const cx = classNames.bind(styles);
function Projects() {
  const projects = [
    {
      project_id: 1,
      project_name: "Tiktok Clone",
      project_url: "https://vinhop.github.io/tiktok/",
      project_screenshot: tiktok,
      project_description:
        "The famous tiktok page where people around the world share their short videos, this clone have multiple features such as register/login, like/comment, suggested users and many more!",
      project_tech_used:
        "Javascript . React . Github pages . SASS . Prop types . React Router DOM . Axios . ",
    },
    {
      project_id: 2,
      project_name: "Linker App",
      project_url: "https://vinhop.github.io/theLinker/",
      project_screenshot: linker,
      project_description:
        "A platform where you and your friends can share videos on youtube to here with only some simple step",
      project_tech_used: "Javascript . React . Firebase . Github pages . SASS",
    },
    {
      project_id: 3,
      project_name: "Music Player",
      project_url: "https://vinhop.github.io/music-player/",
      project_screenshot: musicPlayer,
      project_description: "",
      project_tech_used: "",  
    },
    {
      project_id: 4,
      project_name: "Weather App",
      project_url: "https://vinhop.github.io/weather-app/",
      project_screenshot: weatherApp,
      project_description:
        "A weather app that let user know what's the temparature , you can also get the temparature at your current location. ",
      project_tech_used: "Javascript . React . open-weather API . ",
    },
    {
      project_id: 5,
      project_name: "Mini Game",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
    {
      project_id: 6,
      project_name: "Commercial Website",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("header")}> Projects I've worked on </div>
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
                  <span> Tech used: </span> {project.project_tech_used}
                </div>
                <Button
                  href={project.project_url}
                  target={"blank"}
                  className={cx("link-btn")}
                  outline
                >
                  <span> Check it out </span>
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
