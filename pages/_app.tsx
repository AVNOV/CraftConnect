import { Provider } from "react-redux";
import Header from "../components/Header";

import type { AppProps } from "next/app";
import "../styles/globals.css";
import store from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <Header />
        <div className="w-full h-[calc(100%-48px)]">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
