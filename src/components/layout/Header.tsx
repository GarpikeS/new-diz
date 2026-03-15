'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, Phone, X } from 'lucide-react'
import { company } from '@/lib/data'
import { useContactFormModal } from '@/components/features'

const navigation = [
  { name: 'О парке', href: '/about' },
  { name: 'Помещения', href: '/plots' },
  { name: 'Инвесторам', href: '/investors' },
  { name: 'Управляющая компания', href: '/infrastructure' },
  { name: 'Резиденты', href: '/residents' },
  { name: 'Контакты', href: '/contacts' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useContactFormModal()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="Промпарк Красный Яр" className="h-10 w-auto" />
          <div className="hidden flex-col sm:flex">
            <span className="whitespace-nowrap text-[length:clamp(0.75rem,1.2vw,0.875rem)] font-semibold leading-tight">Промпарк Красный Яр</span>
            <span className="whitespace-nowrap text-[length:clamp(0.625rem,1vw,0.75rem)] text-muted-foreground">Современные производственные площади</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap rounded-md px-2 py-2 text-[length:clamp(0.7rem,1.1vw,0.875rem)] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:px-3"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-4">
          <a
            href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-1.5 whitespace-nowrap text-[length:clamp(0.75rem,1.1vw,0.875rem)] font-medium text-foreground xl:gap-2"
          >
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <span>{company.phone}</span>
          </a>
          <Button className="whitespace-nowrap bg-accent px-3 text-[length:clamp(0.75rem,1vw,0.875rem)] text-accent-foreground hover:bg-accent/90 xl:px-4" onClick={openModal}>
            Оставить заявку
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}
                className="mb-4 flex items-center gap-2 px-3 text-sm font-medium"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span>{company.phone}</span>
              </a>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => { setIsOpen(false); openModal(); }}
              >
                Оставить заявку
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
