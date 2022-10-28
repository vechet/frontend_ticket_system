import { Stack, Typography, TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";

const EmptyTable = React.memo(() => {
  return (
    <TableRow>
      <TableCell colSpan={6} sx={{ borderBottom: "none" }}>
        <Stack flex="1" py={2} justifyContent="center" alignItems="center">
          <Typography sx={{ color: "#667085" }}>There is no data</Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );
});

export default EmptyTable;
