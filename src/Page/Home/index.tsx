import { useState } from "react";
import Card from "../../Components/Common/Card";
import GridContainer from "../../Components/Common/GridContainer";
import Modal from "../../Components/Common/Modal";
import { Button } from "../../Components/Common/Button";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GridContainer column={1} gap={4}>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        1
      </Modal>
    </GridContainer>
  );
};

export default Page;
