"use client";

import Portal from "./Portal";

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
        className="fixed top-16 inset-0 bg-surface-chrome flex items-center justify-center"
        onClick={onClose}
      >
        {children}
      </div>
    </Portal>
  );
}
