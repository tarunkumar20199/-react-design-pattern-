import axios from "axios";
import { useState, useEffect } from "react";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialState, setInitialState] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setInitialState(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialState);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
