"use client";

import Auth from "@/components/Auth";
import Modal from "@/components/modal/Modal";

import { useModalContext } from "@/context/ModalContext";

function AuthModal() {
  const { closeModal, isModalOpen } = useModalContext();
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Auth />
    </Modal>
  );
}

export default AuthModal;
