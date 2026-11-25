import React from "react";
import Child1 from "./child1";

 export const UserContext=React.createContext();
 export const IdContext=React.createContext();
 function App ()
  {
  
  return (
   <div>
    <UserContext.Provider value={"malar"}>
      <IdContext.Provider value={"123"}>
      <Child1/>
      </IdContext.Provider> 

    </UserContext.Provider>
   </div>
  );
};
export default App;