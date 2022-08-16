import Footer from "@/components/Footer";
import Container from "@/components/layout/Container";
import Nav from "@/components/Nav";

import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableColorScheme={false}>
        <Nav />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
