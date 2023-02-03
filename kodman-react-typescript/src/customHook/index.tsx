import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://randomuser.me/api/");
      setUser(data);
    })();
  }, []);

  return {
    user,
  };
};
