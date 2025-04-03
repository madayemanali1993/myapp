import React from "react";
//import ContextHookParent from './Contexthook/ContextHookParent';
import Login from './login/login';
import Signup from './Signup/signup';
import LoginHome from './login/loginHome/LoginHome';
// import Anim from './componentsexample/anim';
import { Routes, Route } from 'react-router-dom';
// import ProductDisplay from '../src/login/loginHome/ProductDisplay';
import CartPage from '../src/login/loginHome/CartPage';

function App()
{


// return (
//   <>
//   {/* 1 .useContext hook 
//    <ContextHookParent/> */}
//  {/* 2.useMemo hook :
//    const visibleTodos = useMemo(
//     () => filterTodos(todos, tab),
//     [todos, tab]//dependency
//   ); 
//   const calculation = useMemo(() => expensiveCalculation(count),
//    [count]);(1st param funct ,2nd value on which u want to run function) */}
// {/* <Anim/> */}
// <Login/>
//   </>
// )

return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/LoginHome" element={<LoginHome />} />
      {/* <Route path="/ProductDisplay" element={<ProductDisplay />}/> */}
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
);
}

export default App;
