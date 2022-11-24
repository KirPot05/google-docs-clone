import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { ReactNode } from "react";

type Props = {
  showModal: boolean;
  toggleModal: () => void;
  children: ReactNode;
  createDocument: () => void;
  title: string;
};

function Modal({
  showModal,
  toggleModal,
  children,
  createDocument,
  title,
}: Props) {
  return (
    <Dialog className="px-2" open={showModal} handler={toggleModal} size="sm">
      <DialogHeader> {title} </DialogHeader>
      <DialogBody>{children}</DialogBody>
      <DialogFooter className="gap-3">
        <Button variant="outlined" onClick={toggleModal}>
          Cancel
        </Button>

        <Button ripple onClick={createDocument}>
          {" "}
          Create{" "}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Modal;
