import classNames from "classnames/bind";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useContexts } from "../../../Contexts/MyContext";
import Image from "../../Image";
import styles from "./Introduction.module.scss";
import avatar from "../../../assets/images/my_avatar.jpg";
const cx = classNames.bind(styles);
const Introduction = forwardRef((props, ref) => {
  const [hobbies, setHobbies] = useState([
    "coding",
    "badminton",
    "music",
    "gaming",
  ]);
  const [autoType, setAutoType] = useState(true);
  const [index, setIndex] = useState(0);
  const [hobby, setHobby] = useState([]);
  const context = useContexts();

  const letterRef = useRef();

  useEffect(() => {
    if (index >= hobbies.length) {
      setIndex(0);
      setHobby([]);
      return;
    }
    letterRef.current = hobbies[index].split("");

    setTimeout(() => {
      if (autoType && hobby.length < letterRef.current.length) {
        setHobby([...hobby, letterRef.current[hobby.length]]);
      } else {
        setAutoType(false);
        if (hobby.length !== 0 && hobby.length !== letterRef.current.length) {
          const newHobby = hobby.slice(0, hobby.length - 1);
          setHobby(newHobby);
        }
        if (hobby.length === letterRef.current.length) {
          setTimeout(() => {
            const newHobby = hobby.slice(0, hobby.length - 1);
            setHobby(newHobby);
          }, 1500);
        }
        if (hobby.length === 0) {
          setIndex(index + 1);
          setAutoType(true);
          setHobby([]);
        }
      }
    }, 100);
  }, [hobby]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")} ref={ref}>
        <div className={cx("header")}>
          <div className={cx("avatar-container")}>
            <Image className={cx("avatar")} src={avatar} alt="avatar" />
          </div>
          <div className={cx("title")}>
            <h1 className={cx("info")}>
              {context.language === "en"
                ? "I'm Vinh, a chill guy that enjoy "
                : "Mình là Vinh, một anh bạn rất chill với những đam mê như"}
              :
            </h1>
            <div className={cx("hobby")}>
              {hobby &&
                hobby.map((letter) => {
                  return letter;
                })}
              <span className={cx("cursor")}>_</span>
            </div>
          </div>
        </div>
        <p className={cx("description")}>
          {context.language === "en"
            ? "I'm a self taught front-end web developer living in Ho Chi Minh City. I have studied web development for 5 months, I'm confident with things what I have learned in the past months, I believe that if I continue to learn and work at the same time, with time my skill will level up faster than I expected."
            : "Mình là một lập trình viên front-end tự học với những nền tảng đã có sẵn từ trước, hiện đang sinh sống và làm việc tại Thành Phố Hồ Chí Minh. Với những kinh nghiệm học tập trong suốt 5 tháng qua, mình tự tin nếu tiếp tục duy trì cố gắng học hỏi, làm việc không ngừng thì sẽ tiến bộ vượt bậc và trở thành một fullstack developer trong tương lai!"}
        </p>
      </div>
    </div>
  );
});

export default Introduction;
