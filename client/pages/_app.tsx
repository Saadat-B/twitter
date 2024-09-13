import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="781533489043-nhpt06klaugkggv6pd28h3b31jd0n3on.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div>
  );
}
