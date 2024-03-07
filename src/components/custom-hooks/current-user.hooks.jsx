import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
  return user;
};
