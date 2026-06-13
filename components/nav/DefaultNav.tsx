"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import AuthModal from "@/components/modal/AuthModal";
import { useModalContext } from "@/context/ModalContext";
import { AuthMode } from "@/types/auth";

function DefaultNav() {
  const {
    openModal,
    state: { modal },
  } = useModalContext();

  function handleAuth(mode: AuthMode) {
    openModal({ type: "AUTH", payload: { mode } });
  }

  const isAuthModalOpen = modal?.type === "AUTH";

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

      {isAuthModalOpen && <AuthModal />}
    </>
  );
}

export default DefaultNav;
