import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component className="theme1" {...pageProps} />;
}
