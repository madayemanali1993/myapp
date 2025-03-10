import React, { createContext, useState } from "react";
import Child1 from './Child1';


const ThemeContext= createContext();
function Parent()
{
  // eslint-disable-next-line no-unused-vars
  const [theme,setTheme] = useState({name:"light"});

return (
  <ThemeContext.Provider value={theme}>
  <Child1/>
  </ThemeContext.Provider>
)
}

export default Parent
export {ThemeContext}