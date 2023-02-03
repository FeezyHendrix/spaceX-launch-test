import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Latest from "./pages/Latest"
import Next from "./pages/Next"

export const routing = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/latest", element: <Latest />},
        { path: "/next", element: <Next />},
        { path: "**", element: <HomePage /> },
]);
