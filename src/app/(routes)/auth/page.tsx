"use client";

import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";

interface AuthCredentials {
  email: string;
  password: string;
}

function Authentication() {
  const [isLoginState, setIsLoginState] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: "",
    password: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await axios.post(
      `http://localhost:3000/api/${isLoginState ? "login" : "register"}`,
      JSON.stringify(credentials),
    );
  }

  return (
    <div className="h-screen w-screen lg:flex lg:justify-center lg:items-center lg:bg-stone-200">
      <div className="px-6 py-4 lg:bg-background lg:rounded-lg lg:px-12 lg:py-10">
        {/* NAVBAR */}

        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-2xl">
            counsel
          </Link>
          <p
            className="font-semibold text-sm cursor-pointer"
            onClick={() => setIsLoginState((prev) => !prev)}
          >
            {isLoginState ? "Register" : "Login"}
          </p>
        </div>

        {/* AUTHENTICATION FORM */}

        <div className="lg:flex lg:gap-x-12">
          <div className="basis-1/2">
            <h1 className="text-3xl mt-10 max-w-xs">
              <span>{isLoginState ? "Login with a " : "Create a "}</span>
              Counsel Account
            </h1>
            <p className="mt-6">Enter your credentials</p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-y-1 mt-6 lg:basis-1/2"
          >
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <Button className="w-full" type="submit">
              {isLoginState ? "Login" : "Register"}
            </Button>
            <p className="text-xs text-stone-700 mt-1 text-center">
              By clicking you agree to our privacy policy and terms and
              conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
