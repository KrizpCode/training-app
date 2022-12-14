// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProperties },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProperties} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
