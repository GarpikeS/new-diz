'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, Phone, X } from 'lucide-react'

const navigation = [
  { name: 'О парке', href: '/about' },
  { name: 'Площадки', href: '/plots' },
  { name: 'Инфраструктура', href: '/infrastructure' },
  { name: 'Резиденты', href: '/residents' },
  { name: 'Новости', href: '/news' },
  { name: 'Контакты', href: '/contacts' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">КЯ</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold leading-tight">Красный Яр</div>
            <div className="text-xs text-muted-foreground">Индустриальный парк</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+78001234567"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>8 800 123-45-67</span>
          </a>
          <Button asChild>
            <Link href="/contacts#form">Оставить заявку</Link>
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
                  className="rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <a
                href="tel:+78001234567"
                className="mb-4 flex items-center gap-2 px-3 text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>8 800 123-45-67</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contacts#form" onClick={() => setIsOpen(false)}>
                  Оставить заявку
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
