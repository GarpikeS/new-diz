import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  Droplets,
  Flame,
  Globe,
  Shield,
  Train,
  Truck,
  Wifi,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Инфраструктура',
  description:
    'Инженерная и транспортная инфраструктура индустриального парка Красный Яр. Энергоснабжение, газ, вода, ж/д ветка.',
}

const infrastructure = [
  {
    icon: Zap,
    title: 'Электроснабжение',
    description: 'Собственная подстанция 110/10 кВ',
    specs: [
      { label: 'Общая мощность', value: '50 МВт' },
      { label: 'Резервирование', value: '2 независимых ввода' },
      { label: 'Напряжение', value: '10 кВ / 0,4 кВ' },
      { label: 'Срок подключения', value: 'от 30 дней' },
    ],
  },
  {
    icon: Flame,
    title: 'Газоснабжение',
    description: 'Природный газ высокого давления',
    specs: [
      { label: 'Давление', value: '0.6 МПа' },
      { label: 'Пропускная способность', value: '15 000 м³/час' },
      { label: 'ГРПШ', value: 'На территории' },
      { label: 'Срок подключения', value: 'от 45 дней' },
    ],
  },
  {
    icon: Droplets,
    title: 'Водоснабжение',
    description: 'Централизованное водоснабжение и канализация',
    specs: [
      { label: 'Источник', value: 'Городской водоканал' },
      { label: 'Давление', value: '4 атм' },
      { label: 'Очистные сооружения', value: 'Собственные' },
      { label: 'Ливневая канализация', value: 'Есть' },
    ],
  },
  {
    icon: Wifi,
    title: 'Телекоммуникации',
    description: 'Оптоволоконные линии связи',
    specs: [
      { label: 'Провайдеры', value: '3 оператора' },
      { label: 'Скорость', value: 'до 10 Гбит/с' },
      { label: 'Резервирование', value: '2 независимых канала' },
      { label: 'Срок подключения', value: '7 дней' },
    ],
  },
]

const transport = [
  {
    icon: Truck,
    title: 'Автотранспорт',
    items: [
      '15 км до федеральной трассы М-5',
      'Асфальтированные дороги внутри парка',
      'Ширина проезда 12 м',
      'Грузоподъемность до 60 тонн',
      'Разворотные площадки для фур',
    ],
  },
  {
    icon: Train,
    title: 'Железная дорога',
    items: [
      'Собственный подъездной путь',
      'Прямое подключение к магистрали РЖД',
      'Погрузочно-разгрузочная площадка',
      'Козловой кран 32 тонны',
      'Оперативная подача вагонов',
    ],
  },
]

const security = [
  { icon: Shield, title: 'КПП 24/7', description: 'Контрольно-пропускной режим' },
  { icon: Globe, title: 'Видеонаблюдение', description: 'Камеры по периметру и на дорогах' },
  { icon: Shield, title: 'Охрана территории', description: 'Патрулирование и реагирование' },
]

export default function InfrastructurePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6">Инфраструктура</h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Полный комплекс инженерных коммуникаций и транспортной доступности для бесперебойной
                работы вашего производства.
              </p>
            </div>
          </div>
        </section>

        {/* Key advantage */}
        <section className="border-b bg-accent py-8 text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-medium">
              Подключение к коммуникациям — от 30 дней с момента заключения договора
            </p>
          </div>
        </section>

        {/* Engineering Infrastructure */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Инженерные сети</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {infrastructure.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-2 gap-4">
                      {item.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                          <dd className="font-medium">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transport */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Транспортная доступность</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {transport.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.items.map((text) => (
                        <li key={text} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Безопасность</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {security.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical specs table */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">Сводная таблица характеристик</h2>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border bg-card">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Параметр</th>
                    <th className="px-4 py-3 text-left font-medium">Значение</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">Общая площадь парка</td>
                    <td className="px-4 py-3 font-medium">150 га</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Электрическая мощность</td>
                    <td className="px-4 py-3 font-medium">50 МВт</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Газоснабжение</td>
                    <td className="px-4 py-3 font-medium">15 000 м³/час</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Водоснабжение</td>
                    <td className="px-4 py-3 font-medium">Централизованное</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Канализация</td>
                    <td className="px-4 py-3 font-medium">Централизованная + ливневая</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Ж/Д ветка</td>
                    <td className="px-4 py-3 font-medium">Собственная</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">До трассы М-5</td>
                    <td className="px-4 py-3 font-medium">15 км</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Интернет</td>
                    <td className="px-4 py-3 font-medium">до 10 Гбит/с</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Нужна консультация по подключению?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Наши специалисты расскажут о технических возможностях и рассчитают стоимость
              подключения для вашего объекта.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts#form">
                Получить консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
