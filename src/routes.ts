import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

// Every non-home route is lazy-loaded — each becomes its own chunk at build time.
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        lazy: () => import("./pages/AboutUs").then((m) => ({ Component: m.AboutUs })),
      },
      {
        path: "how-it-works",
        lazy: () => import("./pages/HowItWorks").then((m) => ({ Component: m.HowItWorks })),
      },
      {
        path: "solutions",
        lazy: () => import("./pages/HowItWorks").then((m) => ({ Component: m.HowItWorks })),
      },
      {
        path: "features",
        lazy: () => import("./pages/Features").then((m) => ({ Component: m.Features })),
      },
      {
        path: "platform",
        lazy: () => import("./pages/Platform").then((m) => ({ Component: m.Platform })),
      },
      {
        path: "contact",
        lazy: () => import("./pages/Contact").then((m) => ({ Component: m.Contact })),
      },
      {
        path: "theta-pmo",
        lazy: () => import("./pages/Platform").then((m) => ({ Component: m.Platform })),
      },
      {
        path: "theta-ops-assistant",
        lazy: () => import("./pages/Features").then((m) => ({ Component: m.Features })),
      },
      {
        path: "theta-procurement-assistant",
        lazy: () =>
          import("./pages/Procurement").then((m) => ({ Component: m.Procurement })),
      },
      {
        path: "theta-hse",
        lazy: () => import("./pages/Safety").then((m) => ({ Component: m.Safety })),
      },
      {
        path: "theta-maintenance",
        lazy: () => import("./pages/Maintenance").then((m) => ({ Component: m.Maintenance })),
      },
      {
        path: "theta-ai",
        lazy: () => import("./pages/Maintenance").then((m) => ({ Component: m.Maintenance })),
      },
      {
        path: "theta-pmo/dashboard",
        lazy: () =>
          import("./pages/PlatformDashboard").then((m) => ({ Component: m.PlatformDashboard })),
      },
      {
        path: "theta-hse/dashboard",
        lazy: () =>
          import("./pages/SafetyDashboard").then((m) => ({ Component: m.SafetyDashboard })),
      },
      {
        path: "login",
        lazy: () => import("./pages/Login").then((m) => ({ Component: m.Login })),
      },
      {
        path: "privacy-policy",
        lazy: () =>
          import("./pages/PrivacyPolicy").then((m) => ({ Component: m.PrivacyPolicy })),
      },
      {
        path: "terms-of-service",
        lazy: () =>
          import("./pages/TermsOfService").then((m) => ({ Component: m.TermsOfService })),
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
