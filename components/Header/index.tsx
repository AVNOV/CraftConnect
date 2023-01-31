import Link from "next/link";
import ProfileButton from "./ProfileButton";

export default function Header() {
  return (
    <header className="relative w-full bg-red z-10">
      <nav className="flex justify-between items-center text-white py-2 px-5 md:px-10">
        <Link href='/' className="text-2xl">CraftConnect</Link>
        <ProfileButton />
      </nav>
    </header>
  );
}
