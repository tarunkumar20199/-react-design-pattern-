import { useId, useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </div>
  );
};
