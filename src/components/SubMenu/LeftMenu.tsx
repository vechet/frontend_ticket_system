import React from "react";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export const LeftMenu = React.memo(({ menus }: any) => {
  const route = useRouter();

  const isSelected = (value: string) => {
    return route.pathname === value;
  };

  return (
    <StyledList dense sx={{ maxWidth: 282 }}>
      {menus.map((item: any, index: number) => {
        return (
          <Link key={index} href={item.url} passHref>
            <StyledItem
              id={`id_${item.value}`}
              disablePadding
              selected={isSelected(item.url)}
            >
              <ListItemButton className="item-button">
                <ListItemText primary={item.label} />
              </ListItemButton>
            </StyledItem>
          </Link>
        );
      })}
    </StyledList>
  );
});

const StyledList = styled(List)`
  && {
    margin-right: 16px;
    position: sticky;
    top: 0;
  }
`;
const StyledItem: any = styled(ListItem)`
  && {
    .item-button {
      border-left: ${(p: any) =>
        p.selected ? "2px solid #18a0fb" : "2px solid transparent"};
      background-color: ${(p: any) => (p.selected ? "#fff" : "transparent")};
      &:hover {
        background-color: #fff;
      }
    }
  }
`;
