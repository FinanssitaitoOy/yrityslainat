"use client";

import { createContext, useContext, useState } from "react";

import { ContactModal } from "@/components/modals/ContactModal";

interface ContactModalContextValue {
  openContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ openContactModal: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
