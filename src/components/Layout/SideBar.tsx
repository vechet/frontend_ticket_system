import { Drawer, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MENUS } from "./utils";
import HeaderDrawer from "./HeaderDrawer";

const SideBar = React.memo(() => {
  const [selected, setSelected] = useState("/home");
  const router = useRouter();
  const { pathname } = router;

  const handleClick = (page: string) => {
    router.push(page);
  };

  useEffect(() => {
    setSelected(pathname);
  }, []);

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={true}>
        <HeaderDrawer />
        <Stack>
          {MENUS.map((menu, index) => (
            <React.Fragment key={index}>
              <StyledMenu
                px={4}
                direction="row"
                alignItems="center"
                spacing={1}
                onClick={() => handleClick(menu.value)}
                sx={{ color: menu.value === selected ? "#1d1b1a" : "#949494" }}
              >
                {menu.icon}
                <Typography className="menu">{menu.label}</Typography>
              </StyledMenu>
            </React.Fragment>
          ))}
        </Stack>
      </Drawer>
    </>
  );
});

const StyledMenu = styled(Stack)`
  min-width: 290px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  .menu {
    font-weight: 500;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  color: #949494;
  font-size: 14px;
`;

export default SideBar;
