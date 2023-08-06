import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProgressScrollBar from "./components/progresScrollBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
  <Navbar/>
  <ProgressScrollBar />
  <Component {...pageProps} />
  <Footer />
  </>;
};

export default api.withTRPC(MyApp);
