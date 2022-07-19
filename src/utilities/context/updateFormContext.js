import React, { createContext, useState } from "react";

export const UpdateFormContext = createContext();
export function UpdateFormContext_provider({ children }) {
  const [contextItems, setContextItems] = useState([]);
  const [toDoDashboard, setToDoDashboard] = useState([]);
  // update to do form
  const updateFormData = (data) => {
    setContextItems(data);
    // console.log(contextItems);
  };
  // toDo Dashboard Data
  const toDoDashboardData = async (data) => {
    setToDoDashboard(data);
    // console.log(toDoDashboard);
  };
  return (
    <UpdateFormContext.Provider
      value={{
        toDoDashboard,
        toDoDashboardData,
        contextItems,
        updateFormData,
      }}>
      {children}
    </UpdateFormContext.Provider>
  );
}
