import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  onClick,
  outline = false,
  href = false,
  target = false,
  className,
}) {
  const props = {
    onClick,

    target,
  };

  let Comp = "button";

  if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    outline,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      <span className={cx("title")}> {children} </span>
    </Comp>
  );
}

export default Button;
