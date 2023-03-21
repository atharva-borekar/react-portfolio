import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
    path:"/",
    element:<>Dashboard</>
}])

const Router = () => <RouterProvider router={router}></RouterProvider>
export default Router