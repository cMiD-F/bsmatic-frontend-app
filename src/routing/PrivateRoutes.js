import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
   const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
 console.log(getTokenFromLocalStorage?.token);
   // Verifique se getTokenFromLocalStorage é válido e se a propriedade token está definida
   if (getTokenFromLocalStorage && getTokenFromLocalStorage.token !== undefined) {
     return children;
   } else {
     return <Navigate to='/login' replace={true} />;
   }
// const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"))
// console.log(getTokenFromLocalStorage?.token);
// return getTokenFromLocalStorage?.token !== undefined ? children : (<Navigate to='/login' replace={true}/>)
};
