import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModeContextProvider from "./context/ModeContextProvider";
import PageOne from "./page/PageOne";
import PageTwo from "./page/PageTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageOne />,
    },
    {
      path: "/page-1",
      element: <PageOne />,
    },
    {
      path: "/page-2",
      element: <PageTwo />,
    },
  ]);

  return (
    <ModeContextProvider>
      <RouterProvider router={router} />
    </ModeContextProvider>
  );
}

export default App;
