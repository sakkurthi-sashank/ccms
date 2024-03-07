"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-neutral-950"
            // style={{
            //   backgroundImage: 'url(/images/srmap_campus.jpg)',
            // }}
          >
            <div className="fixed left-4 top-4 mb-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-prompt"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 7l5 5l-5 5" />
                <path d="M13 17l6 0" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex h-screen items-center justify-center lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-10 sm:w-[400px]">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-prompt"
                width={60}
                height={60}
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 7l5 5l-5 5" />
                <path d="M13 17l6 0" />
              </svg>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>

            <form action="/auth/login" method="post">
              <div className="grid gap-5">
                <div className="grid gap-3">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />

                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign In
                </Button>
              </div>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              <Button
                formAction={"/auth/sign-up"}
                disabled={isLoading}
                variant="default"
                className="w-full"
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign Up
              </Button>
            </form>

            {error && (
              <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            <p className="text-center text-base text-muted-foreground">
              By continuing, you are indicating that you accept our Terms of
              Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
