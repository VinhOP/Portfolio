import classNames from "classnames/bind";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);
function Image({ src, alt, className }) {
  return <img className={className} src={src} alt={alt} />;
}

export default Image;
