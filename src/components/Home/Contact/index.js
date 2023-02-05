import classNames from "classnames/bind";
import { forwardRef, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../Button";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useContexts } from "../../../Contexts/MyContext";
import ModalNotice from "../../ModalNotice";

const cx = classNames.bind(styles);
const Contact = forwardRef((props, ref) => {
  const [isSending, setIsSending] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const formRef = useRef();

  const error = {
    engMessage: "*This field is required",
    vietMessage: "*Trường này là bắt buộc",
  };
  const context = useContexts();

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.user_name.value.trim() === "" && setErrorName(true);
    formRef.current.user_email.value.trim() === "" && setErrorEmail(true);
    formRef.current.subject.value.trim() === "" && setErrorSubject(true);
    formRef.current.message.value.trim() === "" && setErrorMessage(true);

    if (
      formRef.current.user_name.value.trim() &&
      formRef.current.user_email.value.trim() &&
      formRef.current.subject.value.trim() &&
      formRef.current.message.value.trim()
    ) {
      setIsSending(true);
      emailjs
        .sendForm(
          "service_h6yim3a",
          "template_wg9ohyk",
          formRef.current,
          "f6_maesJQLh4cfmva"
        )
        .then(
          (result) => {
            context.setShowModal(true);
            setTimeout(() => {
              context.setShowModal(false);
            }, 2000);
            formRef.current.subject.value = "";
            formRef.current.message.value = "";
            setIsSending(false);
          },
          (error) => {
            console.log(error.text);
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("content")}>
        <h1 className={cx("title")}>
          {context.language === "en" ? "Drop me a line" : "Gửi một lời nhắn"}
        </h1>
        <form
          className={cx("contact-form")}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className={cx("input-section")}>
            <input
              className={cx("input")}
              type="text"
              name="user_name"
              onChange={() => setErrorName(false)}
              placeholder={
                context.language === "en"
                  ? "Please Enter Your Name..*"
                  : "Xin hãy điền tên..*"
              }
            />
            <span
              className={cx("error-notice", {
                active: errorName,
              })}
            >
              {context.language === "en" ? error.engMessage : error.vietMessage}
            </span>
          </div>

          {/* Email */}
          <div className={cx("input-section")}>
            <input
              className={cx("input")}
              type="email"
              name="user_email"
              onChange={() => setErrorEmail(false)}
              placeholder={
                context.language === "en"
                  ? "Please Enter Your Email..*"
                  : "Xin hãy điền email..*"
              }
            />
            <span className={cx("error-notice", { active: errorEmail })}>
              {context.language === "en" ? error.engMessage : error.vietMessage}
            </span>
          </div>

          {/* Subject */}
          <div className={cx("input-section")}>
            <input
              className={cx("input")}
              type="text"
              name="subject"
              onChange={() => setErrorSubject(false)}
              placeholder={
                context.language === "en"
                  ? "Please Enter Your Subject..*"
                  : "Xin hãy điền chủ đề..*"
              }
            />
            <span className={cx("error-notice", { active: errorSubject })}>
              {context.language === "en" ? error.engMessage : error.vietMessage}
            </span>
          </div>

          {/* Message */}
          <div className={cx("input-section")}>
            <textarea
              className={cx("input")}
              type="text"
              name="message"
              onChange={() => setErrorMessage(false)}
              placeholder={
                context.language === "en"
                  ? "Please Enter Your Message..*"
                  : "Xin hãy điền tin nhắn.."
              }
              rows={6}
            />
            <span className={cx("error-notice", { active: errorMessage })}>
              {context.language === "en" ? error.engMessage : error.vietMessage}
            </span>
          </div>

          {/* Submit button */}
          <Button className={cx("submit-btn")} outline>
            <span>
              {isSending ? (
                <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
              ) : context.language === "en" ? (
                "Send Message"
              ) : (
                "Gửi"
              )}
            </span>
          </Button>
          {context.showModal && <ModalNotice />}
        </form>
      </div>
    </div>
  );
});

export default Contact;
