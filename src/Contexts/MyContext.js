import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const useContexts = () => useContext(MyContext);

function ContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);
  const [language, setLanguage] = useState();

  useEffect(() => {
    if (localStorage.getItem("lang") === null) {
      setLanguage("en");
      return;
    }
    setLanguage(localStorage.getItem("lang"));
  }, []);

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
    setShowModal,
    toggleModal,
    language,
    setLanguage,
  };
  return <MyContext.Provider value={classes}> {children} </MyContext.Provider>;
}

export default ContextProvider;
