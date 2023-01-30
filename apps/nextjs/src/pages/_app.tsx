// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { Poppins } from "@next/font/google";
import Head from "next/head";
import PwaMeta from "components/PwaMeta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <PwaMeta />
      </Head>
      <main className={`${poppins.variable} font-primary`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
