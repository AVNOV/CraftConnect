import { forwardRef } from "react";
import { useForm } from "react-hook-form";

type LargeInputProps = {
  name: string;
  required?: boolean;
  onChange: (value: React.FormEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
  className: string;
};

const LargeInput = forwardRef(
  ({ name, value, onChange, placeholder, className }: LargeInputProps, ref) => {
    return (
      <textarea
        className={`border-0.5 border-grey rounded-md w-full py-2 px-3 text-black leading-tight h-52 ${className}`}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default LargeInput;
