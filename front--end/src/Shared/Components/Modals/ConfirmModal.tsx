import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface ConfirmProps {
  show: boolean;
  onHide: () => void;
  data: {
    id: number;
    name: string;
    age: number;
    gender: string;
    aadhar: string;
    salary: number;
    designation: string;
  };
}

const ConfirmModal: React.FC<ConfirmProps> = (props) => {
    const data = props.data;
  const handleConfirmClick = () => {
    console.log("Data entered:", props.data);
    props.onHide(); // Close the modal after logging the data
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Click confirm to proceed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Data entered:</h4>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancel-btn" onClick={props.onHide}>Close</Button>
        <Button className="confirm-btn" onClick={handleConfirmClick}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
