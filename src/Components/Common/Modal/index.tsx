import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
}

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 50%;
  margin: auto;
  z-index: 1;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(
    <StyledModal className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          بستن
        </button>
        {children}
      </div>
    </StyledModal>,
    modalRoot
  );
};

export default Modal;
