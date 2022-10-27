import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif, DefaultFont`,
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&& > .MuiTableRow-root": {
            "& .MuiTableCell-root": {
              fontWeight: 600,
              fontSize: theme.typography.pxToRem(16),
              borderBottomColor: "#EBEDF0",
              backgroundColor: "#fff",
            },
          },
        }),
      },
    },
  },
});

export default theme;
