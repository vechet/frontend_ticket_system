import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import EditorPicks from "./components/EditorPicks";
import HotTrack from "./components/HotTrack";
import Discover from "./components/Discover";
import New from "./components/New";
import YouMayLike from "./components/YouMayLike";

const TicketType = React.memo(() => {
  return <Stack direction="column">TicketType</Stack>;
});

export default TicketType;
