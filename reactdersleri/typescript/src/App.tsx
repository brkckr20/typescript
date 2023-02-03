import axios from "axios";
import { useState, useEffect } from "react";
import { CountryType } from "./types";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch (err) {
      console.log("Error !!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <h2>Countries App With Typescript - React</h2>
      <Loading loading={loading}>
        {countries.map((country, i) => (
          <Country key={country.name.common} country={country} />
        ))}
      </Loading>
    </>
  );
}

export default App;
