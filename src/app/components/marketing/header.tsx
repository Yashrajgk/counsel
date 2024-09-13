import Button from "@/app/components/ui/button";
import Logo from "@/app/components/ui/logo";
import Link from "next/link";

function Header() {
  return (
    <header className={"max-w-screen-lg mx-auto px-6 py-4"}>
      <nav className={"flex items-center justify-between"}>
        <Logo />
        <Link href={"/sign-up"} passHref={true}>
          <Button>Get Started</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
