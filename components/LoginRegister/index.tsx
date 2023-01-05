import { useForm } from 'react-hook-form';
import Input from '../Input';

type LoginRegisterProps = {
    onSubmit: (email: string, password: string) => void;
}

export default function LoginRegister(props: LoginRegisterProps) {
    const { register, handleSubmit, formState: errors } = useForm();
    const onSubmit = (data: any) => {
        const { email, password } = data;
        props.onSubmit(email, password);
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" label="Email" type="email" required />
            <Input name="password" label="Mot de passe" type="password" required />
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Se connecter
                </button>
            </div>
        </form>
    );
}