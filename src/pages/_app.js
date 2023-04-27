import dynamic from "next/dynamic";
import { ThemeProvider } from "@material-tailwind/react";
 
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


export default dynamic (() => Promise.resolve(MyApp), {ssr: false})