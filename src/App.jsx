import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import "animate.css";
import "react-photo-view/dist/react-photo-view.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PortfolioDetails from "./routes/PortfolioDetails";
import PortfolioPage from "./routes/PortfolioPage";
import ContactPage from "./routes/ContactPage";
import PageNotFound from "./routes/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
