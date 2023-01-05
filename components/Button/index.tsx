type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
  }
  
  export default function Button(props: ButtonProps) {
    return (
      <button className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto" onClick={props.onClick} type="button">
        {props.children}
      </button>
    );
  }