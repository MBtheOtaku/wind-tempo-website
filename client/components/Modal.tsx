"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button
        className="absolute inset-0 w-full h-full cursor-default"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-slate-900/95 border border-slate-800 p-6 shadow-2xl">
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-center text-slate-50">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;