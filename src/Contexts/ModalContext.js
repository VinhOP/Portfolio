import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const classes = {
    showModal,
    toggleModal,
  };
  return (
    <ModalContext.Provider value={classes}> {children} </ModalContext.Provider>
  );
}

export default ModalProvider;
