import Button from "@/components/Button";
import Logo from "@/components/Logo";

function DefaultNav() {
  return (
    <header className=" bg-navy h-16 flex items-center border-b border-navy-highlight">
      <nav className="wrapper flex items-center justify-between">
        <Logo className="text-lg" />

        <div className="flex items-center gap-4">
          <Button>sign up</Button>
          <Button>login</Button>
        </div>
      </nav>
    </header>
  );
}

export default DefaultNav;
