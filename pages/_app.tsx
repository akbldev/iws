import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/next";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
