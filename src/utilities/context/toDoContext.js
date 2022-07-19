import React, { createContext, useState } from "react";

export const toDoContext = createContext();
export function ToDoContext_provider({ children }) {
  const [contextItems, setContextItems] = useState([]);
  const [toDoDashboard, setToDoDashboard] = useState([]);
  // update to do form
  const addToDoData = (data) => {
    setContextItems(data);
    // console.log(contextItems);
  };
  // toDo Dashboard Data
  const toDoDashboardData = async (data) => {
    setToDoDashboard(data);
    // console.log(toDoDashboard);
  };
  return (
    <toDoContext.Provider
      value={{
        toDoDashboard,
        toDoDashboardData,
        contextItems,
      }}>
      {children}
    </toDoContext.Provider>
  );
}
