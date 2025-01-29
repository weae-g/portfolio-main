import { ReactNode, CSSProperties, MouseEvent } from "react";
import ReactDOM from "react-dom";
import { FaCompress } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  style = {},
}) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className={`modal ${className}`} style={style}>
        <div className="modal__content">
          <FaCompress className="modal__close" onClick={onClose} />
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
