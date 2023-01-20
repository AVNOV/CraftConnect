type checkBoxProps = {
    label: string;
}

export function Checkbox({ label }: checkBoxProps) {
  return (
    <div className="relative flex items-center">
      <input
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        type="checkbox"
      />
      <label className="ml-2 text-base font-bold">{label}</label>
    </div>
  );
}
