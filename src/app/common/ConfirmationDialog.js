import { Button, DialogActions, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomDialog from "../session-timeout/modal.component";

const ConfirmationDialog = ({
  data,
  confirmationClick,
  children,
  title = null,
}) => {
  useEffect(() => {
    if (data) {
      setShow(true);
    }
  }, [data]);

  const [show, setShow] = useState(false);
  const handleConfirmation = () => {
    setShow(false);
    confirmationClick(data);
  };
  return (
    <CustomDialog open={show} setOpen={setShow} title={title}>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmation} variant="contained">
          Yes
        </Button>
        <Button onClick={() => setShow(false)} variant="contained">
          No
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default ConfirmationDialog;
