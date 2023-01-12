import { useForm } from "react-hook-form";

type LargeInputProps = {
  name: string;
  label: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
};

export default function LargeInput({
  name,
  label,
  value,
  onChange,
  placeholder,
}: LargeInputProps) {
  const { formState: errors } = useForm();
  const inputPlaceholder = placeholder ? placeholder : label.toLowerCase();

  return (
    <div className="mb-4">
      <label className="block text-black text-base font-bold mb-1">
        {label}
      </label>
      <textarea
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 hover:border-gray-500 leading-tight focus:outline-none focus:shadow-outline h-52`}
        id={name}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {/* {errors && <p className="text-red-500">Ce champ est obligatoire</p>} */}
    </div>
  );
}
