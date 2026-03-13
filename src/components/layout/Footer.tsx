import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company } from '@/lib/data'

const navigation = {
  main: [
    { name: 'О парке', href: '/about' },
    { name: 'Площадки', href: '/plots' },
    { name: 'Инфраструктура', href: '/infrastructure' },
    { name: 'Резиденты', href: '/residents' },
    { name: 'Новости', href: '/news' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'Вакансии', href: '/vacancies' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        {/* Main content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo + Tagline */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="Промпарк Красный Яр" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90 lg:text-xl">
              {company.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-semibold uppercase tracking-wider text-primary-foreground/60">
              Разделы
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-primary-foreground/80 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 font-semibold uppercase tracking-wider text-primary-foreground/60">
              Контакты
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-3 text-lg text-primary-foreground/90 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
              <a
                href={`tel:${company.mobile.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-3 text-base text-primary-foreground/90 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5" />
                {company.mobile}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-base text-primary-foreground/90 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" />
                {company.email}
              </a>
              <div className="flex items-start gap-3 text-base text-primary-foreground/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{company.address.city}, {company.address.street}</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              {company.workingHours}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-primary-foreground/80"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
