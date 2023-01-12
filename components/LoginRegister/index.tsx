import { Controller, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/router";

type LoginRegisterProps = {
  title: string;
  buttonText: string;
  onSubmit: (data: any) => void;
};

export default function LoginRegister({ title, buttonText }: LoginRegisterProps) {
  const router = useRouter();
  const linkText = router.pathname === '/register' ? 'Vous avez déjà un compte ?' : 'Vous n\'avez pas encore de compte ?';
  const linkHref = router.pathname === '/register' ? '/login' : '/register';
  const { register, handleSubmit, formState: errors, control } = useForm();
  const onSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-3xl font-bold text-white mb-2">{title}</div>
        <div className="w-1/4 h-full rounded-lg p-4 shadow-lg bg-white-50%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/3 mx-auto pt-5">
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
            <div className="flex flex-col items-center justify-between my-6">
              <Button type="submit">{buttonText}</Button>
              <div className="flex flex-row text-white mt-5 text-sm"> {linkText} 
                <a href={linkHref} className="ml-2 text-blue-500"> {linkHref === '/login' ? 'Connectez-vous' : 'Inscrivez-vous'}</a>
              </div> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
