import Link from "next/link";
import DropdownList from "./DropdownList";
import { useAppSelector } from "../../../store";

export default function ProfileButton() {
  const isLogged = useAppSelector((store) => store.auth.isLogged);
  return (
    <div>
      {isLogged ? <DropdownList /> : <Link href="/login">Se connecter</Link>}
    </div>
  );
}
