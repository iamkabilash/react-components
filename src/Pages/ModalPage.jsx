import Modal from "../Components/Modal";
import Button from "../Components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className="mt-4">
      <Button secondary rounded onClick={handleClose}>
        Subscribe
      </Button>
    </div>
  );
  const modalContent = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Do you want to subscribe to our newsletter!</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Show modal
      </Button>
      {showModal && modalContent}
    </div>
  );
}

export default ModalPage;
