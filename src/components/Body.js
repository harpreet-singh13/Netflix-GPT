<<<<<<< HEAD
import { createBrowserRouter  , RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
const Body = () => {
  const appRouter = createBrowserRouter([
        {
          path: "/",
          element : <Login/>
        },
        {
          path: "/Browse",
          element: <Browse/>
        }
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
=======
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }

    ])

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
>>>>>>> 252e979150bfb9acec20fd48628aed21fd0e3e29
}

export default Body;