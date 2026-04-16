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
        path: "contact",
        lazy: () => import("./pages/Contact").then((m) => ({ Component: m.Contact })),
      },
      {
        path: "theta-pmo",
        lazy: () => import("./pages/ThetaPMO").then((m) => ({ Component: m.ThetaPMO })),
      },
      {
        path: "theta-ops-assistant",
        lazy: () =>
          import("./pages/ThetaOpsAssistant").then((m) => ({ Component: m.ThetaOpsAssistant })),
      },
      {
        path: "theta-procurement-assistant",
        lazy: () =>
          import("./pages/ThetaProcurementAssistant").then((m) => ({
            Component: m.ThetaProcurementAssistant,
          })),
      },
      {
        path: "theta-hse",
        lazy: () => import("./pages/ThetaHSE").then((m) => ({ Component: m.ThetaHSE })),
      },
      {
        path: "theta-maintenance",
        lazy: () => import("./pages/ThetaAI").then((m) => ({ Component: m.ThetaAI })),
      },
      {
        path: "theta-ai",
        lazy: () => import("./pages/ThetaAI").then((m) => ({ Component: m.ThetaAI })),
      },
      {
        path: "theta-pmo/dashboard",
        lazy: () =>
          import("./pages/PmoDashboard").then((m) => ({ Component: m.PmoDashboard })),
      },
      {
        path: "theta-hse/dashboard",
        lazy: () =>
          import("./pages/HseDashboard").then((m) => ({ Component: m.HseDashboard })),
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
