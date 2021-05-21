import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = (props) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <NavigationContext.Provider value={{ sidebarActive, sidebarToggle }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
