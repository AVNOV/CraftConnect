import { forwardRef } from "react";

type InputProps = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  defaultValue?: string;
  titleColor?: string;
  disabled?: boolean;
};

const Input = forwardRef(
  (
    {
      name,
      label,
      type,
      value,
      defaultValue,
      onChange,
      titleColor,
      required,
      disabled,
    }: InputProps,
    ref
  ) => {
    return (
      <div className="mb-4">
        <label
          className={`block ${titleColor ? titleColor : "text-white"} mb-1`}
        >
          {label} :
        </label>
        <input
          className={`border-0.5 border-grey appearance-none rounded-lg w-full py-2 px-3  leading-tight ${
            disabled ? "text-grey" : "text-black"
          }`}
          required={required}
          id={name}
          type={type}
          placeholder={label.toLocaleLowerCase()}
          value={value ? value : ""}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
);

export default Input;
