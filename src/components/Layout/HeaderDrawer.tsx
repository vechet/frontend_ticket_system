import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import spotify_logo from "../../../public/spotify_logo.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Avatar } from "@mui/material";

const HeaderDrawer = React.memo(() => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      pt={4}
      pb={2}
    >
      {/* <Image src={spotify_logo} alt="Spotify Logo" /> */}
      <Avatar>L</Avatar>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
});

export default HeaderDrawer;
