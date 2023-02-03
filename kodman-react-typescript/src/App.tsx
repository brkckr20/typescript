import "./App.css";
// import Card from './components/Card'
// import State from "./state/State";
// import Form from "./forms/Form";
// import Test from "./formik/Test";
// import Alistirma from "./state/Alistirma";
// import ApiSorgusu from "./useEffect-api-sorgusu";
import { useCurrentUser } from "./customHook";

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

function App() {
  const { user } = useCurrentUser();
  console.log(user);

  return <div>lorem</div>;
}

export default App;
