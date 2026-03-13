'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ContactForm } from './ContactForm'

interface ContactFormModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactFormModalContext = createContext<ContactFormModalContextType | undefined>(undefined)

export function useContactFormModal() {
  const context = useContext(ContactFormModalContext)
  if (!context) {
    throw new Error('useContactFormModal must be used within ContactFormModalProvider')
  }
  return context
}

export function ContactFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ContactFormModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Оставить заявку</DialogTitle>
          </DialogHeader>
          <ContactForm variant="compact" />
        </DialogContent>
      </Dialog>
    </ContactFormModalContext.Provider>
  )
}
