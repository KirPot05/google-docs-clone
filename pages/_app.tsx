import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
