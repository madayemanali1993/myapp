import React, { useContext } from "react";
import {ThemeContext} from './ContextHookParent';

function Child3()
{
  const theme = useContext(ThemeContext);
return (
  <>
  {theme.name}
  </>
)
}
export default Child3