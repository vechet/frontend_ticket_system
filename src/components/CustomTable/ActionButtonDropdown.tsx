import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PreviewIcon from "@mui/icons-material/Preview";

interface IProps {
  item: any;
  handleAction(action: any, item: any): any;
}

const ActionButtonDropdown = React.memo(({ item, handleAction }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action: string) => {
    setAnchorEl(null);
    handleAction(action, item);
  };

  return (
    <div>
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        disableRipple
        onClick={handleClick}
        endIcon={<MoreHorizIcon className="more-icon" />}
      ></StyledButton>
      <StyledMenu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div>
          <MenuItem
            onClick={() => {
              handleClose("handle_edit");
            }}
            disableRipple
          >
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("handle_delete");
            }}
            disableRipple
          >
            <DeleteIcon />
            Delete
          </MenuItem>
          {/* <MenuItem
            onClick={() => {
              handleClose("handle_view_detail");
            }}
            disableRipple
          >
            <PreviewIcon />
            View Detail
          </MenuItem> */}
        </div>
      </StyledMenu>
    </div>
  );
});

const StyledButton = styled(Button)`
  && {
    padding: 0px;
    .more-icon {
      color: #454545;
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
    :disabled {
      opacity: 0.6;
    }
  }
`;
const StyledMenu = styled(Menu)`
  && {
    .MuiPaper-root {
      border-radius: 4px !important;
      min-width: 150px;
      color: rgb(55, 65, 81);
      box-shadow: rgb(255 255 255) 0px 0px 0px 0px,
        rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 10px 15px -3px,
        rgb(0 0 0 / 5%) 0px 4px 6px -2px;
      .MuiMenu-list {
        padding: 4px 0;
      }
      .MuiMenuItem-root {
        font-size: 14px;
        .MuiSvgIcon-root {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
          margin-right: 12px;
        }
        :active {
          background-color: rgba(25, 118, 210, 0.08);
        }
      }
    }
    .inactive-icon {
      width: 18px;
      height: 18px;
      margin-right: 9px;
    }
    .active-icon {
      width: 18px;
      height: 18px;
      margin-right: 9px;
    }
  }
`;
export default ActionButtonDropdown;
