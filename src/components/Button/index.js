import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, onClick, outline, className }) {
  const props = {
    onClick,
  };

  const classes = cx("wrapper", {
    outline,
    [className]: className,
  });

  return (
    <button className={classes} {...props}>
      <span className={cx("title")}> {children} </span>
    </button>
  );
}

export default Button;
