import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";
import { CustomAppType } from "next/app";

const MyApp: CustomAppType = ({ Component, pageProps }) => (
  <ThemeProvider>
    <SessionProvider session={pageProps?.session}>
      <Component {...pageProps} />
    </SessionProvider>
  </ThemeProvider>
);

export default MyApp;
