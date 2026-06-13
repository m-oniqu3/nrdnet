import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useModalContext } from "@/context/ModalContext";
import { AuthMode } from "@/types/auth";
import { useState } from "react";

function Auth() {
  const {
    state: { modal },
    stopPropagation,
    closeModal,
  } = useModalContext();

  const authMode = modal?.type === "AUTH" ? modal?.payload.mode : "login";

  const [mode, setMode] = useState<AuthMode>(authMode);

  function handleToggleForm() {
    setMode(mode === "login" ? "signup" : "login");
  }

  return (
    <div
      className="absolute bottom-0 w-full border border-surface-page bg-surface-card max-w-sm sm:relative "
      onClick={stopPropagation}
    >
      <header className="bg-navy h-14 flex items-center">
        <div className="wrapper flex items-center justify-between">
          <p className="text-brand-yellow font-semibold">auth_portal.exe</p>

          <Button onClick={closeModal}>x</Button>
        </div>
      </header>

      <div className="wrapper py-8 flex flex-col gap-4">
        <section className="flex flex-col items-center justify-center text-center w-full">
          <article className="flex flex-col gap-4 w-full">
            <div>
              <Logo className="text-2xl" alt />

              <p className="text-xs">the internet. created by nerds</p>
            </div>

            <div className="grid grid-cols-2 justify-center items-center w-full ">
              <Button>login</Button>
              <Button>signup</Button>
            </div>
          </article>
        </section>

        <section className="bg-red-200 h-8">
          <p> error section</p>
        </section>

        <section className="w-full">
          <form action="" className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
              {mode === "signup" && (
                <div className="item">
                  <label htmlFor="username">username:</label>
                  <input type="text" name="username" />
                </div>
              )}

              <div className="item">
                <label htmlFor="email" className="form-label">
                  email:
                </label>
                <input type="text" name="email" className="form-input" />
              </div>

              <div className="item">
                <label htmlFor="password" className="form-label">
                  password:
                </label>
                <input type="password" name="password" className="form-input" />
              </div>
            </div>

            <div className="w-full">
              {mode === "login" ? (
                <Button className="w-full">&raquo; enter &raquo;</Button>
              ) : (
                <Button className="w-full">
                  &raquo; create account &raquo;
                </Button>
              )}
            </div>
          </form>
        </section>

        <div className="text-center text-xs uppercase">-- or --</div>

        <Button> sign in with google</Button>

        <p>----</p>

        <p className="text-xs text-center">
          {mode === "login" ? "no account?" : "already have an account?"}
          &nbsp;
          <span
            className="text-navy underline cursor-pointer"
            onClick={handleToggleForm}
          >
            {mode === "login" ? "sign up free" : "log in"}
          </span>
        </p>
      </div>
      {/* or */}
    </div>
  );
}

export default Auth;
