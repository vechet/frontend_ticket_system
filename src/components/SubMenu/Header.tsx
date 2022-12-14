import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import styled from "styled-components";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TypeEnum } from "./constants";

interface IProps {
  onSearch(value: string): any;
  type: any;
  onCreate(): void;
}
export const Header = React.memo((props: IProps) => {
  const { onSearch, type, onCreate } = props;

  return (
    <StyledWrapper direction="row">
      <Stack className="right-wrapper">
        <StyledButton
          startIcon={<AddBoxOutlinedIcon />}
          size="small"
          variant="outlined"
          onClick={onCreate}
        >
          {type === TypeEnum.TICKET
            ? "Open Ticket"
            : type === TypeEnum.TICKET_TYPE
            ? "Create Ticket Type"
            : type === TypeEnum.PROJECT
            ? "Create Project"
            : type === TypeEnum.PROJECT_TYPE
            ? "Create Project Type"
            : type === TypeEnum.PROJECT_PACKAGE
            ? "Create Project Package"
            : type === TypeEnum.USER_ACCOUNT
            ? "Create User Account"
            : type === TypeEnum.USER_ROLE
            ? "Create User Role"
            : ""}
        </StyledButton>
      </Stack>
      <Stack flex="1" direction="row" spacing={2}>
        <SearchInput onSearch={onSearch} />
      </Stack>
    </StyledWrapper>
  );
});

const SearchInput = React.memo(({ onSearch }: any) => {
  const handleChange = (e: any) => {
    onSearch(e.target.value);
  };
  return (
    <Stack flex="1" className="search-wrapper">
      <TextField
        id="search-input"
        size="small"
        placeholder="Search..."
        variant="standard"
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small" disableFocusRipple disableRipple>
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    padding: 16px 32px;
    .grid-container {
      margin-top: 0;
    }
    .right-wrapper {
      width: 320px;
      min-width: 320px;
      border-right: 1px solid #9a999a;
      margin-right: 16px;
      align-items: start;
    }
    .grid-search {
      border-left: 1px solid #9a999a;
      display: flex;
      .MuiButton-root {
        font-weight: 400;
      }
    }
    .search-wrapper {
      #search-input {
        padding: 4px;
      }
    }
  }
`;
const StyledButton = styled(Button)`
  && {
    text-transform: capitalize;
    border: 1px solid #555555;
    color: #555555;
    border-radius: 2px;
    &:hover {
      border: 1px solid #555555;
    }
  }
`;
