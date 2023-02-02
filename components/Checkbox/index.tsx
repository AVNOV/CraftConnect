type checkBoxProps = {
  label: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ label, onChange }: checkBoxProps) {
  return (
    <div className="relative flex items-center text-black">
      <input onChange={onChange} className="h-4 w-4" type="checkbox" />
      <label className="ml-2">{label}</label>
    </div>
  );
}
