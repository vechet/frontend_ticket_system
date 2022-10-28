import React from "react";
import {
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";

export const InputSelectField = React.memo((props: any) => {
  const {
    label,
    input,
    options,
    removeDot,
    meta,
    showMessage,
    onChange,
    ...resp
  } = props;
  const hasError = (meta.error || meta.submitError) && meta.touched;

  return (
    <FormControl fullWidth error={hasError}>
      <Stack
        direction="column"
        alignItems="flex-start"
        className="input-select-direction"
        spacing={1}
        pb={1}
      >
        {label && (
          <Typography variant="body2" className="text-label">
            {`${label} ${removeDot ? "" : ":"}`}{" "}
            <span style={{ color: "red" }}>*</span>
          </Typography>
        )}
        <Select
          size="small"
          id="select-field"
          fullWidth
          {...input}
          {...resp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            input.onChange(e);
            onChange?.(e);
          }}
        >
          {options.map((item: any, index: number) => (
            <MenuItem
              dense
              key={index}
              value={item.value}
              data-testid={item.label}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {showMessage && (
          <FormHelperText>
            {(hasError && meta.error) || meta.submitError}
          </FormHelperText>
        )}
      </Stack>
    </FormControl>
  );
});
