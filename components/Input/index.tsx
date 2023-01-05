import { useForm } from 'react-hook-form';

type InputProps = {
    name: string;
    label: string;
    type: string;
    required?: boolean;
}

export default function Input(props: InputProps) {
    const { register, formState: errors } = useForm();
    const { name, label, type, required } = props;

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors && 'border-red-500'}`}
                id={name}
                type={type}
                {...register( name, { required })}
            />
            {errors && <p className="text-red-500">Ce champ est obligatoire</p>}
        </div>
    );
}