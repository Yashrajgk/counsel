import { Button } from "@/app/components/ui/button";
import Logo from "@/app/components/ui/logo";

function Header() {
  return (
    <header className={"max-w-screen-lg mx-auto px-6 py-4"}>
      <nav className={"flex items-center justify-between"}>
        <Logo />
        <Button>Get Started</Button>
      </nav>
    </header>
  );
}

export default Header;
