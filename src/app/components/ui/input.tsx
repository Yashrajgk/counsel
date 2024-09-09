import React from "react";
import cn from "@/app/lib/cn";

function Input({
  type,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "px-3 py-2 h-10 text-sm w-full placeholder:text-stone-500 border border-stone-800 rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
