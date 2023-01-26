import React, { FC, useState } from "react";
const Alistirma = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {open && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          sapiente.
        </p>
      )}
    </div>
  );
};

export default Alistirma;
