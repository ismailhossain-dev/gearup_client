"use client";

import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Mountain, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ILoginFormInputs } from "@/lib/types";

// Define TypeScript interface for form fields

const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // Initialize React Hook Form without Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  // Form submission handler
  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      console.log("Login Form Values:", data);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // TODO: Connect your backend authentication API here
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center px-4 py-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8 space-y-6">
        {/* Header / Brand Logo */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center space-x-2.5 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Mountain className="h-5 w-5" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Welcome Back to GearUp
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Enter your credentials to access your account & rentals.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field with Validation */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                type="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`pl-9 bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 ${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field with Validation */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Password
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className={`pl-9 bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 ${
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-2 h-10 font-semibold"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Footer Link to Register */}
        <div className="text-center text-sm text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
