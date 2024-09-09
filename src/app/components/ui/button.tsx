import React from "react";
import cn from "@/app/lib/cn";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-block bg-foreground text-background text-sm px-4 py-2 h-10 rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
