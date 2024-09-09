import Link from "next/link";
import cn from "@/app/lib/cn";

interface LogoProps {
  className?: string;
}

function Logo({ className, ...props }: LogoProps) {
  return (
    <Link href={"/"} className={cn("", className)} {...props}>
      counsel
    </Link>
  );
}

export default Logo;
