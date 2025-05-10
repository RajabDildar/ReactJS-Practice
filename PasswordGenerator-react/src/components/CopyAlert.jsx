import * as React from "react";
import Alert from "@mui/material/Alert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function CopyAlert() {
  return (
    <Alert icon={<ContentCopyIcon fontSize="inherit" />} severity="success">
      Text copied successfully!
    </Alert>
  );
}
