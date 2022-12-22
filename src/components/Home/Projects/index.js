import classNames from "classnames/bind";
import Image from "../../Image";
import styles from "./Projects.module.scss";
import laptop from "../../../images/laptop.png";
import tiktok from "../../../images/tiktok-screenshot.png";
import Button from "../../Button";

const cx = classNames.bind(styles);
function Projects() {
  const projects = [
    {
      project_name: "Tiktok Clone",
      project_url: "",
      project_screenshot: tiktok,
      project_description:
        "The famous tiktok page where people around the world share their short videos, this clone have multiple features such as register/login, like/comment, suggested users and many more!",
      project_tech_used: "Javascript . React . Github pages . ",
    },
    {
      project_name: "Todos List",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
    {
      project_name: "Chat App",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
    {
      project_name: "Weather App",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
    {
      project_name: "Mini Game",
      project_url: "",
      project_screenshot: "",
      project_description: "",
      project_tech_used: "",
    },
    {
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
        <div className={cx("header")}> Projects I've worked on</div>
        <div className={cx("project-list")}>
          {projects.map((project) => {
            return (
              <div className={cx("project")}>
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
                  {project.project_tech_used}
                </div>
                <Button className={cx("link-btn")} outline>
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
