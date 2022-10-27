import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
