import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { ContactForm } from '@/components/features'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с нами для консультации по размещению вашего производства в промышленном парке Красный Яр',
}

const contacts = [
  {
    icon: Phone,
    title: 'Телефон',
    value: company.phone,
    description: company.mobile,
    href: `tel:${company.phone.replace(/[^\d+]/g, '')}`,
  },
  {
    icon: Mail,
    title: 'Email',
    value: company.email,
    description: 'Ответим в рабочее время',
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: company.address.city,
    description: company.address.street,
    href: 'https://yandex.com/maps/-/CPBKQNnN',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: company.workingHours,
    description: 'Сб-Вс: выходной',
  },
]

export default function ContactsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Контакты</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Свяжитесь с нами любым удобным способом. Мы ответим на все ваши вопросы и поможем
              подобрать оптимальное решение
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="border-b py-8">
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
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div id="form">
                <ContactForm
                  variant="card"
                  title="Оставить заявку"
                  description="Заполните форму — мы перезвоним в рабочее время"
                />
              </div>

              {/* Yandex Map */}
              <div className="order-first lg:order-last">
                <Card className="h-full min-h-[400px] overflow-hidden">
                  <CardContent className="h-full p-0">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/-/CPBKQNnN&z=9"
                      width="100%"
                      height="100%"
                      style={{ minHeight: '400px', border: 0 }}
                      allowFullScreen
                      title="Карта расположения Промпарка Красный Яр"
                    />
                  </CardContent>
                </Card>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  {company.address.full}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
