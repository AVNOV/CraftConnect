type InputProps = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  titleColor?: string;
};

export default function Input({
  name,
  label,
  type,
  value,
  onChange,
  titleColor,
  required,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className={`block ${titleColor ? titleColor : "text-white"} mb-1`}>
        {label} :
      </label>
      <input
        className={`border-0.5 border-grey appearance-none rounded-lg w-full py-2 px-3 text-black leading-tight`}
        required={required}
        id={name}
        type={type}
        placeholder={label.toLocaleLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
