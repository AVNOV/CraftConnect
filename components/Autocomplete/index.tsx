import { forwardRef } from "react";

interface Option {
  value: string;
  label: string;
}

type props = {
  options: Option[];
  className?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange: (value: React.FormEvent<HTMLSelectElement>) => void;
};

const Autocomplete = forwardRef(
  (
    { options, className, placeholder, name, required, onChange }: props,
    ref
  ) => {
    const displayOptions = options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ));
    return (
      <select
        onChange={onChange}
        defaultValue=""
        required={required}
        name={name}
        className={`invalid:text-grey border-0.5 border-grey rounded-md p-1 cursor-pointer ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {displayOptions}
      </select>
    );
  }
);

export default Autocomplete;
