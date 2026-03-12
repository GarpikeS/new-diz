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
    { name: 'Карта сайта', href: '/sitemap.xml' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <img src="/logo.png" alt="Промпарк Красный Яр" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              {company.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Навигация
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.mobile.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{company.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>{company.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    {company.address.city},
                    <br />
                    {company.address.street}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              На карте
            </h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CPBKQNnN&z=8"
                width="100%"
                height="150"
                style={{ border: 0 }}
                title="Карта"
              />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/60">
              {company.workingHours}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} {company.name}. Все права защищены.
            </p>
            <div className="flex gap-4">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
