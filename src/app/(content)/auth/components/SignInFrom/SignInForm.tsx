import React from "react";
import { useSignInForm } from "./hooks/useSignInForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/shared/Form/form";
import { Label } from "@/app/shared/Label/Label";
import { Input } from "@/app/shared/Input/input";
import { PasswordInput } from "@/app/shared/PasswordInput/password-input";
import { Button } from "@/app/shared/Button/Button";
import { Toaster } from "sonner";
const SignInForm = () => {
  const { form, functions, state } = useSignInForm();

  return (
    <div>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password
        </p>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={functions.onSubmit} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="sr-only" htmlFor="email">
                    email
                  </Label>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="write email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label className="sr-only" htmlFor="password">
                    password
                  </Label>
                  <FormControl>
                    <PasswordInput
                      id="password"
                      placeholder="write password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              SignIn
            </Button>
          </form>
        </Form>
        <div className="flex justify-center">
          <Button variant={"link"} onClick={functions.goToSignUp}>
            <span className="bg-background px-2 text-muted-foreground">
              create new account
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
