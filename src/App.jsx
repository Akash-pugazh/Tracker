import React from "react";
import Root from "./Routes/Root";
import HomePage from "./Pages/HomePage";
import HabitsPage from "./Pages/HabitsPage";
import TodosPage from "./Pages/TodosPage";
import LofiPage from "./Pages/LofiPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TodoContextProvider from "./Context/TodoContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="Habits" element={<HabitsPage />} />

      <Route
        path="Todos"
        element={
          <TodoContextProvider>
            <TodosPage />
          </TodoContextProvider>
        }
      />

      <Route path="Lofi" element={<LofiPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
