import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Title from "./Title";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Title />
      <Introduction />
      <Projects />
    </div>
  );
}

export default Home;
