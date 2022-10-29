import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const TextAreaInput = React.memo(
  ({ input, label, type, meta, onChange, rows, ...resp }: any) => {
    const hasError =
      meta.touched &&
      (meta.error || (meta.submitError && !meta.dirtySinceLastSubmit)) &&
      !meta.submitting;
    return (
      <Stack>
        <Typography variant="body2" sx={{ color: "#667085", fontWeight: 500 }}>
          {label && label}
          {label && <span style={{ color: "red" }}>*</span>}
        </Typography>
        <TextField
          {...resp}
          {...input}
          error={hasError}
          helperText={hasError ? meta.error || meta.submitError : ""}
          margin="normal"
          multiline
          rows={rows}
          value={input.value || ""}
          sx={{
            "& .MuiFormHelperText-root": {
              marginLeft: 0,
            },
          }}
          onChange={(e) => {
            input.onChange(e);
            onChange && onChange(e);
          }}
        />
      </Stack>
    );
  }
);

export const TextInput = React.memo(
  ({ input, label, type, meta, onChange, rows, ...resp }: any) => {
    const hasError =
      meta.touched &&
      (meta.error || (meta.submitError && !meta.dirtySinceLastSubmit)) &&
      !meta.submitting;

    return (
      <Stack>
        <Typography variant="body2" sx={{ color: "#667085", fontWeight: 500 }}>
          {label} <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          {...resp}
          {...input}
          error={hasError}
          helperText={hasError ? meta.error || meta.submitError : ""}
          margin="normal"
          value={input.value || ""}
          sx={{
            "& .MuiFormHelperText-root": {
              marginLeft: 0,
            },
          }}
          onChange={(e) => {
            input.onChange(e);
            onChange && onChange(e);
          }}
        />
      </Stack>
    );
  }
);

export const RenderCheckBox = React.memo(({ input, label }: any) => {
  return (
    <FormControlLabel
      control={<Checkbox size="small" {...input} />}
      label={label}
      sx={{
        ".MuiCheckbox-root": {
          p: 0,
          pr: 1,
        },
      }}
    />
  );
});
