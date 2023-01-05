import Link from "next/link";
import DropdownList from "./DropdownList";

export default function ProfileButton() {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? <DropdownList /> : <Link href="/login">Se connecter</Link>}
    </div>
  );
}
