"use client";

import { useEffect, useState } from "react";

// Rendering Client Server
// export const CardForm = () => {
//   const [name, setName] = useState("initialvalue"); //Rerender

//   return (
//     <div>
//       <div>{name}</div>
//       <input onChange={(event) => setName(event.target.value)} className="border p-4" />
//     </div>
//   );
// };

//Rendering Login Check
export const CardForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSetData(event) {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  function handleCheckLogin() {
    if (email === "skuy@devscale.id" && password === "123456") {
      setMessage("Kamu adalah admin");
    } else {
      setMessage("Kamu bukanlah admin");
    }
  }
  useEffect(() => {
    handleCheckLogin();
  }, [email, password]);

  return (
    <div>
      <input name="email" onChange={handleSetData} />
      <input name="password" onChange={handleSetData} />
      <button onClick={handleCheckLogin}>Check Admin</button>
      <div>{message}</div>
    </div>
  );
  A;
};
