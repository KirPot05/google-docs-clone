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
    <Dialog
      className="px-2"
      open={showModal}
      handler={toggleModal}
      size="sm"
      nonce
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <DialogHeader
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {" "}
        {title}{" "}
      </DialogHeader>
      <DialogBody
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {children}
      </DialogBody>
      <DialogFooter
        className="gap-3"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Button
          variant="outlined"
          onClick={toggleModal}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Cancel
        </Button>

        <Button
          ripple
          onClick={createDocument}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          {" "}
          Create{" "}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Modal;
