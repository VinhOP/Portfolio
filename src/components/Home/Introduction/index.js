import classNames from "classnames/bind";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "../../Image";
import styles from "./Introduction.module.scss";

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
          }, 2000);
        }
        if (hobby.length === 0) {
          setIndex(index + 1);
          setAutoType(true);
          setHobby([]);
        }
      }
    }, 150);
  }, [hobby]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")} ref={ref}>
        <div className={cx("header")}>
          <div className={cx("avatar-container")}>
            <Image
              className={cx("avatar")}
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/321519773_690880169214349_7584367309526186757_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yNqVLQqLLKEAX8QcKVS&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdTBJdJzQPwL-AFAJ-z9c9tZ_xit0hGyRHhryq7WO9iqMw&oe=63D9EF9D"
              alt="avatar"
            />
          </div>
          <div className={cx("title")}>
            <h1 className={cx("info")}>I'm Vinh and I enjoy</h1>
            <div className={cx("hobby")}>
              {hobby &&
                hobby.map((letter) => {
                  return letter;
                })}
              <span className={cx("cursor")}>_</span>
            </div>
          </div>
        </div>
        <p className={cx("description")}> I'm a front-end web developer </p>
      </div>
    </div>
  );
});

export default Introduction;
