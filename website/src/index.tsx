import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/signup",
    element: <SignUp />,
  },
]);

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<App />} />
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

