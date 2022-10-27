import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PeopleIcon from "@mui/icons-material/People";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import QueueIcon from "@mui/icons-material/Queue";

export const MENUS = [
  { label: "Project", value: "/project", icon: <HomeIcon /> },
  { label: "Project Type", value: "/projectType", icon: <LocalOfferIcon /> },
  {
    label: "Project Package",
    value: "/projectPackage",
    icon: <EmojiObjectsIcon />,
  },
  { label: "Ticket", value: "/ticket", icon: <FlashOnIcon /> },
  { label: "Ticket Type", value: "/ticketType", icon: <QueueIcon /> },
  { label: "User Account", value: "/userAccount", icon: <FavoriteIcon /> },
  { label: "User Role", value: "/userRole", icon: <PeopleIcon /> },
];
