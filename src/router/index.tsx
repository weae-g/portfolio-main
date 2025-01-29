import ContactPage from "@/pages/ContactPage";
import FeedbackPage from "@/pages/FeedbackPage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import MainLayout from "@layouts/MainLayout";
import AboutPage from "@pages/AboutPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Route>
  )
);

export default router;
