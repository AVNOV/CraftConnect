import { Provider } from "react-redux";
import Header from "../components/Header";

import type { AppProps } from "next/app";
import store from "../store";
import Geocode from "react-geocode";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GEOCODING_GOOGLE_API!);

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
