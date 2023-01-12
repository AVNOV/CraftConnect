import { useForm } from "react-hook-form";

type InputProps = {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    onChange: (value: string) => void;
    value: string;
}

export default function Input(props: InputProps) {
    const { formState: errors } = useForm();
    const { name, label, type, value, onChange } = props;

    return (
        <div className="mb-4">
            <label className="block text-white text-base font-bold mb-1">
                {label}
            </label>
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
                //${errors && 'border-red-500'}
                id={name}
                type={type}
                placeholder={label.toLocaleLowerCase()}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            {/* {errors && <p className="text-red-500">Ce champ est obligatoire</p>} */}
        </div>
    );
}