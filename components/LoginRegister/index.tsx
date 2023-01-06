import { Controller, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";

type LoginRegisterProps = {
  title: string;
  buttonText: string;
  onSubmit: (data: any) => void;
};

export default function LoginRegister(props: LoginRegisterProps) {
  const { register, handleSubmit, formState: errors, control } = useForm();
  const { title, buttonText } = props;
  const onSubmit = (data: any) => {
    props.onSubmit(data);
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center my-36 w-full">
        <div className="text-3xl font-bold text-white mb-2">{title}</div>
        <div className="w-1/3 h-full rounded-lg p-4 shadow-lg bg-white-50%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/3 mx-auto pt-10">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input required label="Email" type="email" {...field} />
                )}
              />
               <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input label="Mot de passe" type="password" {...field} />
                )}
              />
            </div>
            <div className="flex items-center justify-between my-6">
              <Button type="submit">{buttonText}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
