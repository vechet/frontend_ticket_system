import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import EditorPicks from "./components/EditorPicks";
import HotTrack from "./components/HotTrack";
import Discover from "./components/Discover";
import New from "./components/New";
import YouMayLike from "./components/YouMayLike";

const Home = React.memo(() => {
  return (
    <Stack direction="column">
      <New />
      <Stack py={3}>
        <Divider />
      </Stack>
      <Stack direction="row">
        <HotTrack />
        <Discover />
      </Stack>
      <Stack py={3}>
        <Divider />
      </Stack>
      <EditorPicks />
      <Stack py={3}>
        <Divider />
      </Stack>
      <YouMayLike />
    </Stack>
  );
});

export default Home;
