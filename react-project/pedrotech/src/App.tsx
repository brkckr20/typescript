import { FC, createContext, useContext } from "react";
import { Person, HairColor } from "./components/Person";

export interface AppContextInterface {
  name: string;
  surname: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "abc",
    surname: "cde",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Person
        name="Burak Çakır"
        age={30}
        email="burak@mail.com"
        hairColor={HairColor.Brown}
      />
    </AppContext.Provider>
  );
};

export default App;

export const useApp = () => useContext(AppContext);
