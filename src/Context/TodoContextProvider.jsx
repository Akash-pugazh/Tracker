import React, { useState } from "react";

export const TodoContext = React.createContext();

function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState({
    Today: [],
    Weekly: [],
    Monthly: [],
  });

  const value = {
    todo,
    setTodo,
  };

  return (
    // ^ Context Provider
    <TodoContext.Provider value={value}>
      {/* Children Components Access the value obj provided in value prop */}

      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
