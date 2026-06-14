"use client";

import Portal from "@/components/modal/Portal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed top-16 inset-0 bg-surface-chrome/50"
        onClick={onClose}
      >
        {children}
      </div>
    </Portal>
  );
}
