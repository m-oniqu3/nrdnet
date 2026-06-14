"use client";

import NavItem from "@/components/nav/NavItem";
import { useModalContext } from "@/context/ModalContext";
import {
  BellIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@/utils/icons";

function BottomNav() {
  const { openModal } = useModalContext();

  function handlePostModal() {
    openModal({ type: "POST", payload: null });
  }

  return (
    <footer className="bg-navy h-16 w-full fixed bottom-0 left-0 z-50 grid items-center">
      <nav className="wrapper grid grid-cols-5 place-items-center items-center justify-center">
        <NavItem name="home" icon={HomeIcon} />
        <NavItem name="find" icon={SearchIcon} />

        <button
          onClick={handlePostModal}
          className="size-12 bg-brand-yellow border-2 border-brand-yellow-dark grid place-items-center z-50 relative bottom-4 cursor-pointer"
        >
          <PlusIcon className="size-6 text-navy" />
        </button>

        <NavItem name="alerts" icon={BellIcon} />
        <NavItem name="prof" icon={UserIcon} />
      </nav>
    </footer>
  );
}

export default BottomNav;
