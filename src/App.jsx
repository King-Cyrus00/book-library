import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

const eventHiveRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/book-detail/", element: <BookDetail /> },
  { path: "/edit-book/", element: <EditBook /> },
  { path: "/add-book/", element: <AddBook /> },
  { path: "*", element: <NotFound /> }

]);

export default function App() {
  return (
    <>
      <RouterProvider router={eventHiveRouter} />
    </>
  );
}


