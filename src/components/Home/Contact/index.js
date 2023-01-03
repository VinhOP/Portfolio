import classNames from "classnames/bind";
import { forwardRef, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../Button";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../Contexts/ModalContext";
import ModalNotice from "../../ModalNotice";

const cx = classNames.bind(styles);
const Contact = forwardRef((props, ref) => {
  const [isSending, setIsSending] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const formRef = useRef();

  const modal = useModal();

  const handleSubmit = (e) => {
    modal.toggleModal();
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
            console.log(result.text);
            setIsSending(false);
          },
          (error) => {
            console.log(error.text);
            setIsSending(false);
          }
        );
    }
  };
  useEffect(() => {
    if (modal.showModal) {
      setTimeout(() => {
        modal.toggleModal();
      }, 2000);
    }
  }, [modal.showModal]);

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("content")}>
        <h1 className={cx("title")}> Drop me a line </h1>
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
              placeholder="Please Enter Your Name..*"
            />
            <span
              className={cx("error-notice", {
                active: errorName,
              })}
            >
              *This field is required
            </span>
          </div>

          {/* Email */}
          <div className={cx("input-section")}>
            <input
              className={cx("input")}
              type="email"
              name="user_email"
              onChange={() => setErrorEmail(false)}
              placeholder="Please Enter Your Email..*"
            />
            <span className={cx("error-notice", { active: errorEmail })}>
              *This field is required
            </span>
          </div>

          {/* Subject */}
          <div className={cx("input-section")}>
            <input
              className={cx("input")}
              type="text"
              name="subject"
              onChange={() => setErrorSubject(false)}
              placeholder="Please Enter Your Subject..*"
            />
            <span className={cx("error-notice", { active: errorSubject })}>
              *This field is required
            </span>
          </div>

          {/* Message */}
          <div className={cx("input-section")}>
            <textarea
              className={cx("input")}
              type="text"
              name="message"
              onChange={() => setErrorMessage(false)}
              placeholder="Please Enter Your Message..*"
              rows={6}
            />
            <span className={cx("error-notice", { active: errorMessage })}>
              *This field is required
            </span>
          </div>

          {/* Submit button */}
          <Button className={cx("submit-btn")} outline>
            <span>
              {isSending ? (
                <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
              ) : (
                "Send Message"
              )}
            </span>
          </Button>
          {modal.showModal && <ModalNotice />}
        </form>
      </div>
    </div>
  );
});

export default Contact;
