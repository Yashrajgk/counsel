import Input from "@/app/components/ui/input";
import Button from "@/app/components/ui/button";
import Link from "next/link";

function LoginPage() {
  return (
    <div className={"px-6 py-4"}>
      <div className={"flex items-center justify-between"}>
        <Link href={"/"} className={"text-2xl font-semibold"}>
          counsel
        </Link>
        <Link href={"/sign-up"} className={"text-sm font-semibold"}>
          Sign Up
        </Link>
      </div>
      <h1 className={"text-4xl font-semibold text-center mt-24"}>Login</h1>
      <p className={"text-center text-sm mt-1"}>to continue to scout</p>
      <form className={"flex flex-col items-center gap-y-1 mt-4"}>
        <Input type={"email"} placeholder={"Email"} name={"email"} />
        <Input type={"password"} placeholder={"Password"} name={"password"} />
        <Link
          href={"/forgot-password"}
          className={"text-xs my-1 font-semibold mr-auto"}
        >
          Forgot Password
        </Link>
        <Button className={"w-full"}>Login</Button>
      </form>
    </div>
  );
}

export default LoginPage;
