'use client'

import { Button } from '@/components/ui/button'
import { useContactFormModal } from './ContactFormModal'
import { ArrowRight } from 'lucide-react'

interface ContactButtonProps {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  showArrow?: boolean
}

export function ContactButton({
  children = 'Оставить заявку',
  className,
  variant = 'default',
  size = 'default',
  showArrow = false,
}: ContactButtonProps) {
  const { openModal } = useContactFormModal()

  return (
    <Button variant={variant} size={size} className={className} onClick={openModal}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )
}
