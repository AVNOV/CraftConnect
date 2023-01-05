import Link from "next/link";
import ProfileButton from "./ProfileButton";

export default function Header() {
  return (
    <header className="w-full bg-red">
      <nav className="flex justify-between items-center text-white px-10 py-2">
        <Link href='/' className="text-2xl">CraftConnect</Link>
        <ProfileButton />
      </nav>
    </header>
  );
}
