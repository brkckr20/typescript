import { ChangeEvent, FC, useState } from "react";
import { AppContextInterface, useApp } from "../App";

export enum HairColor {
  Blonde = "Your hair is blonde",
  Brown = "Your hair is brown",
  Pink = "Your hair is pink, that so cool",
}

export interface IProps {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<IProps> = ({ name, email, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);
  const app = useApp();

  type NameType = "Burak" | "Çakır";
  const nameForType: NameType = "Çakır";

  const handleCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <h1>{hairColor}</h1>
      <input placeholder="Please enter country" onChange={handleCountry} />
      <br />
      <br />
      {country}
      {app?.name} - {app?.surname}
      <br />
    </div>
  );
};
