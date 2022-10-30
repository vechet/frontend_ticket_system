import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const SnackBarCustom = React.memo(
  ({ open, onClose, message, success }: any) => {
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={onClose}
        >
          <Alert
            onClose={onClose}
            severity={!success ? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
);

export default SnackBarCustom;
