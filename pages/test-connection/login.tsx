import { FormEvent, useState } from "react";
import { loginRequest } from "../../api/query/user.query";
import { useAppDispatch, useAppSelector } from "../../store";
import { login } from "../../slices/auth.slice";

export default function LoginPage() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginRequest(email, password);
      dispatch(login({user: data.user, access_token: data.access_token}))
      
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
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
