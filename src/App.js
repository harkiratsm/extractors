import React ,{useState} from 'react'

import Routes from './Routes';
let LoginContext=React.createContext()

function App() {
  const [login,setLogin] =useState(false);
  return (
    <div>
      <LoginContext.Provider value={{login,setLogin}}>
        <Routes />
      </LoginContext.Provider>
      
    </div>
  );
}

export {LoginContext,App} ;
