"use client";

import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/atoms/button";
import { InputHookForm } from "@/components/molecule/input";
import { PasswordHookFormInput } from "@/components/molecule/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/modules/signin/validation";
import { useLogin } from "@/modules/signin/hook";
import { APP_ROUTES } from "@/utils/app-routes";

function SignInForm() {
  const methods = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const { handleLogin } = useLogin();

  return (
    <div className="text-center space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Bem vindo
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-200">
          Entre na sua conta
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          className="space-y-4"
          onSubmit={methods.handleSubmit(handleLogin)}
        >
          <div className="space-y-4">
            <InputHookForm
              name="email"
              type="email"
              placeholder="E-mail"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
            <PasswordHookFormInput
              name="password"
              placeholder="Senha"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full bg-zinc-50"
            size="sm"
          >
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className="space-y-2 pt-2">
        <p className="text-zinc-700 dark:text-zinc-300">Não tem uma conta?</p>
        <Link href={APP_ROUTES.signup} className="hover:underline text-md">
          Registre-se
        </Link>
      </div>
    </div>
  );
}

export { SignInForm };
