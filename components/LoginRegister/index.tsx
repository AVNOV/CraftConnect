import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";

type LoginRegisterProps = {
  title: string;
  onSubmit: (email: string, password: string) => void;
};

export default function LoginRegister(props: LoginRegisterProps) {
  const { register, handleSubmit, formState: errors } = useForm();
  const { title } = props;
  const onSubmit = (data: any) => {
    const { email, password } = data;
    props.onSubmit(email, password);
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center my-36 w-full">
        <div className="text-3xl font-bold text-white mb-2">{title}</div>
        <div className="w-1/3 h-full rounded-lg p-4 shadow-lg bg-white-50%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/3 mx-auto pt-10">
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Mot de passe" type="password" />
            </div>
            <div className="flex items-center justify-between my-6">
            <Button onClick={() => console.log('Button clicked')}>Se connecter</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
