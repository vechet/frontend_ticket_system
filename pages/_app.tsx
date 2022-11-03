import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { instance } from "../src/components/TicketApi";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Alter defaults after instance has been created
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("userToken")}`;
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
