"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useModalContext } from "@/context/ModalContext";
import { AuthMode } from "@/types/auth";

function DefaultNav() {
  const { openModal } = useModalContext();

  function handleAuth(mode: AuthMode) {
    openModal({ type: "AUTH", payload: { mode } });
  }

  return (
    <>
      <header className=" bg-navy h-16 flex items-center border-b border-navy-highlight">
        <nav className="wrapper flex items-center justify-between">
          <Logo className="text-lg" />

          <div className="flex items-center gap-4">
            <Button onClick={() => handleAuth("signup")}>sign up</Button>
            <Button onClick={() => handleAuth("login")}>login</Button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default DefaultNav;
