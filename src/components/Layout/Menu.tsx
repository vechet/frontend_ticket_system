import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";
import { checkActiveMenu } from "./utils";
import { MENU_ITEM } from "./constants";

const Menu = React.memo(() => {
  const router = useRouter();
  const { pathname } = router;

  const handleClickMenu = (menu: any) => {
    router.replace(menu.url, undefined, { shallow: true });
  };

  const activeRoute = checkActiveMenu(pathname);
  return (
    <>
      {MENU_ITEM.map((item: any, index: number) => {
        return (
          <StyledButtonMenu
            data-testid={item.label}
            key={index}
            onClick={() => handleClickMenu(item)}
            selected={activeRoute === item.value}
          >
            {item.label}
          </StyledButtonMenu>
        );
      })}
    </>
  );
});

const StyledButtonMenu: any = styled(Button)`
  && {
    .MuiPaper-root {
      background-color: #18a0fb;
    }
    padding: 3px 16px;
    text-transform: inherit;
    border-radius: ${(p: any) => (p.selected ? "4px 4px 0px 0px" : "0px")};
    color: ${(p: any) => (p.selected ? "black" : "white")};
    background-color: ${(p: any) => (p.selected ? "white" : "transparent")};
    &:hover {
      text-decoration: underline;
      background-color: ${(p: any) => (p.selected ? "white" : "transparent")};
    }
  }
`;

export default Menu;
