import { FormEvent, useState } from "react";
import { loginRequest } from "../../api/query/user.query";
import { login } from "../../slices/auth.slice";
import { useAppDispatch } from "../../store";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginRequest(email, password)
      .then((response) => {
        dispatch(login(response));
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      <button type="submit">Connexion</button>
      {isError && <p>Erreur de connexion</p>}
    </form>
  );
}
