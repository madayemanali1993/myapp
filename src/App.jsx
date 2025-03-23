import React from "react";
//import ContextHookParent from './Contexthook/ContextHookParent';
import Login from './login/login';
// import Anim from './componentsexample/anim';

function App()
{


return (
  <>
  {/* 1 .useContext hook 
   <ContextHookParent/> */}

 {/* 2.useMemo hook :
   const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]//dependency
  ); 
  const calculation = useMemo(() => expensiveCalculation(count),
   [count]);(1st param funct ,2nd value on which u want to run function) */}
{/* <Anim/> */}
<Login/>
  </>
)
}

export default App;
