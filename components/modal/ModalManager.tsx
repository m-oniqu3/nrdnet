"use client";

import Auth from "@/components/Auth";
import Modal from "@/components/modal/Modal";

import PostForm from "@/components/posts/PostForm";
import { useModalContext } from "@/context/ModalContext";

function ModalManager() {
  const {
    isModalOpen,
    state: { modal },
    closeModal,
  } = useModalContext();

  const rendered_modal = (() => {
    if (!modal) return null;

    switch (modal.type) {
      case "AUTH":
        return <Auth />;

      case "POST":
        return <PostForm />;

      default:
        throw new Error(
          "Modal type not allowed or missing. No modal to render",
        );
    }
  })();

  if (!rendered_modal) return null;

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {rendered_modal}
    </Modal>
  );
}

export default ModalManager;
