import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Layouts from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <div className={inter.className}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </div>
    </ThemeProvider>
  );
};

export default App;
