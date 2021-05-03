import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  open,
  handleClose,
  reset,
}: {
  open: boolean;
  handleClose: () => void;
  reset: () => void;
}) {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Form Submitted</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Data has been successfully submitted (just kidding 😉) Reset
            the form to start over again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              reset();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
