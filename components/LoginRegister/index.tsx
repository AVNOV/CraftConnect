import { Controller, FieldValues, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/router";

type LoginRegisterProps = {
  title: string;
  buttonText: string;
  onSubmit: (data: FieldValues) => void;
  error?: string;
};

export default function LoginRegister({
  title,
  buttonText,
  onSubmit,
  error,
}: LoginRegisterProps) {
  const router = useRouter();
  const linkText =
    router.pathname === "/register"
      ? "Vous avez déjà un compte ?"
      : "Vous n'avez pas encore de compte ?";
  const linkHref = router.pathname === "/register" ? "/login" : "/register";
  const { handleSubmit, control } = useForm();

  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-11/12 md:w-6/12 lg:w-5/12 xl:w-1/4 h-full rounded-lg p-4 shadow-lg bg-white-50%"
        >
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
                <Input
                  required
                  label="Mot de passe"
                  type="password"
                  {...field}
                />
              )}
            />
          </div>
          {error && <p className="text-red-700 text-xs text-center">{error}</p>}
          <div className="flex flex-col items-center justify-between my-6">
            <Button type="submit">{buttonText}</Button>
            <p className="flex flex-row text-white mt-5 text-sm">
              {" "}
              {linkText}
              <a href={linkHref} className="ml-2 text-blue-500">
                {" "}
                {linkHref === "/login" ? "Connectez-vous" : "Inscrivez-vous"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
