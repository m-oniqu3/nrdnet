import Logo from "@/components/Logo";
import Avatar from "@/components/user/Avatar";
import { SearchIcon } from "@/utils/icons";

function AuthNav() {
  return (
    <header className=" bg-navy h-16 flex items-center border-b border-navy-highlight">
      <nav className="wrapper flex items-center justify-between">
        <Logo className="text-3xl" />

        <div className="flex items-center gap-4 ">
          <SearchIcon className="text-navy-muted size-5" />
          <Avatar />
        </div>
      </nav>
    </header>
  );
}

export default AuthNav;
