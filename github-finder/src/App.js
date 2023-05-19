import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import User from "./pages/User";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Search />,
   },
   {
      path: "/user/:username",
      element: <User />,
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
