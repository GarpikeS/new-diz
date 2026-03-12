import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const navigation = {
  main: [
    { name: 'О парке', href: '/about' },
    { name: 'Площадки', href: '/plots' },
    { name: 'Инфраструктура', href: '/infrastructure' },
    { name: 'Резиденты', href: '/residents' },
    { name: 'Новости', href: '/news' },
    { name: 'Контакты', href: '/contacts' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Пользовательское соглашение', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <span className="text-lg font-bold">КЯ</span>
              </div>
              <div>
                <div className="text-lg font-semibold leading-tight">Красный Яр</div>
                <div className="text-xs text-primary-foreground/70">Индустриальный парк</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Современный индустриальный парк для размещения производственных и логистических
              объектов.
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
                  href="tel:+78001234567"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>8 800 123-45-67</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@krasny-yar.ru"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@krasny-yar.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    Россия, Самарская область,
                    <br />
                    Красный Яр, ул. Промышленная, 1
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Режим работы
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Пн-Пт: 9:00 — 18:00</p>
              <p>Сб: 10:00 — 15:00</p>
              <p>Вс: выходной</p>
            </div>
            <div className="mt-6">
              <p className="text-xs text-primary-foreground/60">
                Бесплатная горячая линия
                <br />
                для звонков по России
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} ИП «Красный Яр». Все права защищены.
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
