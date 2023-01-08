import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const useModal = () => useContext(MyContext);

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollToAbout = () => {
    setAboutClicked(!aboutClicked);
  };

  const scrollToContact = () => {
    setContactClicked(!contactClicked);
  };

  const classes = {
    aboutClicked,
    scrollToAbout,
    contactClicked,
    scrollToContact,
    showModal,
    toggleModal,
  };
  return <MyContext.Provider value={classes}> {children} </MyContext.Provider>;
}

export default ModalProvider;
