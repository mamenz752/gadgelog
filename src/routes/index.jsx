import CommonPresenter from "../components/layouts/CommonPresenter";
import ArticlePresenter from "../components/layouts/ArticlePresenter";

export const AppRoutes = [
  { path: "/", element: <CommonPresenter /> },
  // TODO: element: xin's jsx
  { path: "/about", element: <></> },
  { path: "/articles/:id", element: <ArticlePresenter />}
];