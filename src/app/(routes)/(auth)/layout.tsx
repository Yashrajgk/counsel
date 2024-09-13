import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-screen md:flex">
      <div className={"md:basis-1/2 bg-stone-950"}></div>
      <div className={"md:basis-1/2"}>{children}</div>
    </div>
  );
}

export default AuthLayout;
