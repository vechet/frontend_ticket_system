import React from "react";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import styled from "styled-components";
import Menu from "./Menu";

const Header = React.memo(() => {
  return (
    <AppBar position="static" elevation={0} sx={{ border: 0 }}>
      <Box px={2}>
        <Toolbar
          disableGutters
          sx={{ minHeight: "48px !important", alignItems: "flex-end" }}
        >
          <Stack position="relative" pb={0.5}>
            {/* <StyledLogo
              onClick={backToHome}
              src="/assets/svgs/z1-logo2.svg"
              alt="Logo"
            /> */}
          </Stack>
          <Box sx={{ ml: 6, flexGrow: 1, display: { xs: "flex" } }}>
            <Stack flexGrow={1} direction="row" alignItems="flex-end">
              <Menu />
            </Stack>
            {/* <AccountInfo /> */}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
});

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export default Header;
