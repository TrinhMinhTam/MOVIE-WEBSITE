import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/phim/:slug", element: <MovieDetail /> },
  { path: "*", element: <NotFound /> },
]);
