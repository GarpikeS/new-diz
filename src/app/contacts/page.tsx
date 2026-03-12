import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { ContactForm } from '@/components/features'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с нами для консультации по размещению вашего производства в индустриальном парке Красный Яр.',
}

const contacts = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '8 800 123-45-67',
    description: 'Бесплатно по России',
    href: 'tel:+78001234567',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@krasny-yar.ru',
    description: 'Ответим в течение дня',
    href: 'mailto:info@krasny-yar.ru',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'Самарская область, Красный Яр',
    description: 'ул. Промышленная, 1',
    href: 'https://yandex.ru/maps/',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Пт: 9:00 — 18:00',
    description: 'Сб: 10:00 — 15:00',
  },
]

const departments = [
  {
    name: 'Отдел продаж',
    phone: '+7 (846) 123-45-67',
    email: 'sales@krasny-yar.ru',
  },
  {
    name: 'Техническая служба',
    phone: '+7 (846) 123-45-68',
    email: 'tech@krasny-yar.ru',
  },
  {
    name: 'Бухгалтерия',
    phone: '+7 (846) 123-45-69',
    email: 'buh@krasny-yar.ru',
  },
]

export default function ContactsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6">Контакты</h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Свяжитесь с нами любым удобным способом. Мы ответим на все ваши вопросы и поможем
                подобрать оптимальную площадку.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="border-b py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contacts.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
                    <h3 className="mb-1 font-semibold">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-lg font-medium text-primary hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{item.value}</p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Map */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div id="form">
                <ContactForm
                  variant="card"
                  title="Оставить заявку"
                  description="Заполните форму — мы перезвоним в течение 15 минут в рабочее время"
                />
              </div>

              {/* Map Placeholder */}
              <div className="order-first lg:order-last">
                <Card className="h-full min-h-[400px]">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                      <p className="text-muted-foreground">
                        Карта будет добавлена
                        <br />
                        после интеграции с Яндекс.Картами
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Отделы</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href={`tel:${dept.phone.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 text-sm hover:text-accent"
                    >
                      <Phone className="h-4 w-4" />
                      {dept.phone}
                    </a>
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 text-sm hover:text-accent"
                    >
                      <Mail className="h-4 w-4" />
                      {dept.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requisites */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-8 text-center">Реквизиты</h2>

              <Card>
                <CardContent className="p-6">
                  <dl className="space-y-4 text-sm">
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-muted-foreground sm:w-40">
                        Наименование:
                      </dt>
                      <dd>ООО «Управляющая компания Индустриальный парк Красный Яр»</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-muted-foreground sm:w-40">ИНН:</dt>
                      <dd>6312000000</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-muted-foreground sm:w-40">КПП:</dt>
                      <dd>631201001</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-muted-foreground sm:w-40">ОГРН:</dt>
                      <dd>1186312000000</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-muted-foreground sm:w-40">
                        Юридический адрес:
                      </dt>
                      <dd>443000, Самарская область, Красноярский район, с. Красный Яр, ул. Промышленная, д. 1</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
