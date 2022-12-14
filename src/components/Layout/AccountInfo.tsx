import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Stack } from "@mui/material";
import router from "next/router";
import { useEffect } from "react";
import { instance } from "../TicketApi";
import useStates from "../hooks";

export default function AccountMenu() {
  const [state, setState]: any = useStates({
    loading: false,
    error: "",
    result: {},
  });
  const { result } = state;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    router.replace("/auth");
    localStorage.setItem("userToken", "");
  };

  const fetchCurrentUser = async () => {
    setState({ loading: true });
    instance
      .get("GetCurrentUser")
      .then((res) => {
        const { data: json } = res;
        setState({ result: json.data, loading: false });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "234px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          disableRipple
          sx={{
            cursor: "default",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack direction="row">
            <Avatar />
            <Stack>
              <Typography sx={{ color: "rgb(0, 53, 102)", fontSize: "12px" }}>
                {result?.userName}
              </Typography>
              <Typography
                sx={{
                  color: "rgb(102, 112, 133)",
                  fontSize: "10px",
                  lineHeight: "16px",
                }}
              >
                {result?.email || "N/A"}
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ fontSize: "14px" }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
