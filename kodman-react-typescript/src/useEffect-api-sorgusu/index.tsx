import { useState, useEffect } from "react";

export interface Response {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

const Index = () => {
  const [films, setFilms] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data: Response) => {
        setFilms(data.films);
        setName(data.name);
      });
    console.log("data cekildi");
  }, []);
  return (
    <div>
      <ul>
        <div>{name}</div>
        {films.map((film) => (
          <div key={film}>
            <li>{film}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Index;
