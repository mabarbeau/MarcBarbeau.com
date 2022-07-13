import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Navigation />
    <Footer />
  </>
);

export default App;
