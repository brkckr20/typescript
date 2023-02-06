import React, { useContext } from "react";
import { ThemeContext } from "./UseContextHook";
import "./App.css";
// import Card from './components/Card'
// import State from "./state/State";
// import Form from "./forms/Form";
// import Test from "./formik/Test";
// import Alistirma from "./state/Alistirma";
// import ApiSorgusu from "./useEffect-api-sorgusu";
// import { useCurrentUser } from "./customHook";
// import UseContextHook from "./UseContextHook";

// const data = [
//   {
//     id: 1,
//     fullname : "Burak Çakır",
//     age : 30,
//   },
//   {
//     id: 2,
//     fullname : "Furkan Çakır",
//     age : 20,
//   }
// ]

interface RootObject {
  theme?: string;
  changeTheme?: () => void;
}

function App() {
  const { theme, changeTheme }: RootObject = useContext(ThemeContext);

  // const { user } = useCurrentUser();
  // console.log(user);

  return (
    <>
      <div>Theme : {theme}</div>
      <button onClick={changeTheme}>Degistir</button>
    </>
  );
}

export default App;
