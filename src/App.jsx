import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import AddPage from "./Pages/AddProductPage/AddPage";
import { Toaster } from "react-hot-toast";
import ProductPage from "./Pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddPage />,
      },
      {
        path: "/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          loading: {
            duration: Infinity,
            style: {
              background: "#9ba7a7f9",
              color: "black",
            },
          },
          success: {
            duration: 2000,
            style: {
              background: "#027291c4",
              color: "white",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "rgba(97, 7, 7, 0.705)",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
