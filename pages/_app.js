import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/index";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <Header />
      <Modal />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
