import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { PrimeReactProvider } from "primereact/api";
// import { store } from "../shopping/app/store.js";
// import { Provider } from "react-redux";

// import "primeflex/primeflex.css";
// import "primereact/resources/primereact.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./index.css"
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";0
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import "primereact/resources/themes/lara-light-cyan/theme.css";

// import App from './App.jsx'
// import App from '../challenge/03/App.jsx'
// import App from '../lecture/1/App.jsx'
// import App from '../lecture/2/App.jsx'
// import App from '../memo/App.jsx'
// import App from "../shopping/App.jsx";
import App from "../tailwind-intro/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PrimeReactProvider>
      <Provider store={store}> */}
    <App />
    {/* </Provider>
    </PrimeReactProvider> */}
  </StrictMode>
);
