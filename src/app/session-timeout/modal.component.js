import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const SessionTimeoutDialogComponent = ({ open, countdown, onLogout, onContinue }) => {
  return (
    <Dialog
      open={open}
    >
      <DialogTitle>Session Timeout</DialogTitle>
      <DialogContent>
        <Typography variant="body2">
          The current session is about to expire in{" "}
          <span>{countdown}</span> seconds.
        </Typography>
        <Typography variant="body2">{`Would you like to continue the session?`}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onLogout}
          variant="contained"
        >
          Logout
        </Button>
        <Button
          onClick={onContinue}
          color="primary"
          variant="contained"
        >
          Continue Session
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SessionTimeoutDialogComponent;
