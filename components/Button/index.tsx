import { useRouter } from "next/router";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  type?: "submit" | "button";
};

export default function Button(props: ButtonProps) {
  const router = useRouter();

  const handleClick = (value: React.MouseEvent<HTMLButtonElement>): void => {
    if (props.onClick) {
      props.onClick(value);
    }
    if (props.href) {
      router.push(props.href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-black text-white text-center h-fit cursor-pointer active:scale-95 transition-transform shadow-2xl rounded-md px-5 py-1 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
