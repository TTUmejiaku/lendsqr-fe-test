import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "@fontsource-variable/work-sans";

import { routeTree } from "./routeTree.gen";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
