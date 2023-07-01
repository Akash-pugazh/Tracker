import React from "react";
import Root from "./Routes/Root";
import HomePage from "./Pages/HomePage";
import HabitsPage from "./Pages/HabitsPage";
import TodosPage from "./Pages/TodosPage";
import LoginPage from "./Pages/LoginPage";
import PageNotFoundPage from "./Pages/PageNotFoundPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="Habits" element={<HabitsPage />} />
      <Route path="Todos" element={<TodosPage />} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
