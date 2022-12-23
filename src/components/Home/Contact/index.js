import classNames from "classnames/bind";
import Button from "../../Button";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);
function Contact() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h1 className={cx("title")}> Drop me a line </h1>
        <div className={cx("contact-form")}>
          <input
            className={cx("input")}
            type="text"
            placeholder="Please Enter Your Name..*"
          />
          <input
            className={cx("input")}
            type="text"
            placeholder="Please Enter Your Email..*"
          />
          <input
            className={cx("input")}
            type="text"
            placeholder="Please Enter Your Subject.."
          />
          <textarea
            className={cx("input")}
            type="text"
            placeholder="Please Enter Your Message..*"
            rows={6}
          />
          <Button className={cx("submit-btn")} outline>
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
