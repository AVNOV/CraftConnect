import { useRef, useMemo } from "react";
import { UserType } from "../../../../types/UserType";

import Image from "next/image";

import arrow_icon from "../../../../assets/icons/arrow_icon.svg";
import profile_picture from "../../../../assets/images/profile_picture.png";
import Item from "./Item";
import { useAppSelector } from "../../../../store";

export default function DropdownList() {
  const user: any = useAppSelector((store) => store.auth.user);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);

  const listItems = useMemo(
    () => [
      {
        text: "Profile",
        href: "/profile",
      },
      {
        text: "Mes rendez-vous",
        href: "/profile/appointment",
      },
      {
        text: "Logout",
        href: "/logout",
      },
    ],
    []
  );

  const openDropdown = () => {
    const dropdown: HTMLUListElement = dropdownRef.current!;
    const arrow: HTMLImageElement = arrowRef.current!;

    if (dropdown.style.opacity === "1") {
      dropdown.style.opacity = "0";
      dropdown.style.pointerEvents = "none";
      arrow.style.transform = "rotateX(0deg)";
    } else {
      dropdown.style.opacity = "1";
      dropdown.style.pointerEvents = "auto";
      arrow.style.transform = "rotateX(180deg)";
    }
  };

  const displayListItems = listItems.map((item, index) => (
    <Item key={index} text={item.text} href={item.href} />
  ));

  return (
    <div className="relative flex justify-center">
      <div onClick={openDropdown} className="flex space-x-2 cursor-pointer">
        <Image
          className="rounded-full w-6 h-6"
          src={profile_picture}
          alt="profile picture"
        />
        <span>{user.firstname}</span>
        <Image
          ref={arrowRef}
          className="w-3 transition-transform duration-700"
          src={arrow_icon}
          alt="arrow"
        />
      </div>
      <ul
        ref={dropdownRef}
        className="absolute z-10 bg-white mt-2 overflow-hidden text-sm opacity-0 pointer-events-none top-full text-black shadow-dropdownlist rounded transition-opacity duration-500"
      >
        {displayListItems}
      </ul>
    </div>
  );
}
