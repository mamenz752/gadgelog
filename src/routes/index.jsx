import CommonPresenter from "../components/layouts/CommonPresenter";
import ArticlePresenter from "../components/layouts/ArticlePresenter";
import AboutUs from "../components/xin/AboutUs";

export const AppRoutes = [
  { path: "/", element: <CommonPresenter /> },
  // TODO: element: xin's jsx
  { path: "/about", element: <AboutUs /> },
  { path: "/articles/:id", element: <ArticlePresenter />}
];