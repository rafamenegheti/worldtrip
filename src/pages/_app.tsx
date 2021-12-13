import { ChakraProvider } from "@chakra-ui/react";0
import type { AppProps } from "next/app";
import { theme } from '../styles/theme'
import  "../styles/slider.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ theme }>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
