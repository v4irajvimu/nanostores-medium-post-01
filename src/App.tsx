import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./page/PageOne";
import PageTwo from "./page/PageTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageOne />,
    },
    {
      path: "/page-2",
      element: <PageTwo />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
