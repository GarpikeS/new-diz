import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactButton } from '@/components/features'
import {
  TrendingUp,
  FileCheck,
  Zap,
  Building2,
  Landmark,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Инвесторам',
  description:
    'Инвестиционные возможности в промышленном парке Красный Яр. Стабильный пул резидентов, господдержка, готовая инфраструктура',
}

const investmentFormats = [
  {
    icon: Building2,
    title: 'Покупка помещений',
    description: 'Приобретение производственных и офисных площадей в собственность',
    features: ['Готовые помещения', 'Оформление в собственность', 'Инженерные сети подключены'],
    link: '/plots?deal=sale',
    linkText: 'Смотреть каталог',
  },
  {
    icon: Landmark,
    title: 'Строительство BTS',
    description: 'Строительство объекта под требования заказчика (Build-to-Suit)',
    features: ['По проекту заказчика', 'Земельный участок', 'Инженерная инфраструктура', 'Сопровождение строительства'],
    link: '/contacts#form',
    linkText: 'Оставить заявку',
  },
  {
    icon: TrendingUp,
    title: 'Долгосрочная аренда',
    description: 'Аренда помещений на срок от 5 лет с фиксированными условиями',
    features: ['Фиксация ставки', 'Гибкие условия'],
    link: '/plots?deal=rent',
    linkText: 'Смотреть каталог',
  },
]

const benefits = [
  {
    icon: FileCheck,
    title: 'Статус промышленного парка',
    description: 'Включены в федеральный реестр Минпромторга РФ — доступ к мерам господдержки',
  },
  {
    icon: Zap,
    title: 'Готовая инфраструктура',
    description: 'Электричество 31,5 МВт, отопление, вода, канализация, оптоволокно',
  },
  {
    icon: TrendingUp,
    title: 'Рост стоимости',
    description: 'Средний рост стоимости недвижимости в парке — 8-12% в год',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасность',
    description: 'Охраняемая территория, видеонаблюдение, СКУД, контроль доступа 24/7',
  },
]

const stats = [
  { value: '12,1 Га', label: 'Территория' },
  { value: '78 800 м²', label: 'Площадь помещений' },
  { value: '95%', label: 'Заполняемость' },
  { value: '9', label: 'Резидентов' },
]

const governmentSupport = [
  'Субсидирование процентной ставки по кредитам',
  'Субсидии на возмещение затрат на инфраструктуру',
  'Программы Фонда развития промышленности',
]

export default function InvestorsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Инвесторам</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Инвестируйте в промышленную недвижимость Красноярска. Готовая инфраструктура,
              налоговые льготы, стабильный доход
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Formats */}
        <section className="py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Форматы инвестирования</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {investmentFormats.map((format) => (
                <Card key={format.title}>
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <format.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{format.title}</h3>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">{format.description}</p>
                    <ul className="mb-4 space-y-1 text-sm">
                      {format.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {format.linkText === 'Оставить заявку' ? (
                      <ContactButton variant="outline" size="sm" showArrow>
                        {format.linkText}
                      </ContactButton>
                    ) : (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={format.link}>
                          {format.linkText}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t bg-muted py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Преимущества для инвесторов</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Support */}
        <section className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Меры государственной поддержки</h2>

            <Card className="max-w-2xl">
              <CardContent className="p-5">
                <ul className="space-y-3">
                  {governmentSupport.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-3 text-primary-foreground">Обсудить инвестиции</h2>
            <p className="mx-auto mb-6 max-w-xl text-primary-foreground/80">
              Оставьте заявку — проведём экскурсию и подготовим индивидуальное предложение
            </p>
            <ContactButton
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              showArrow
            >
              Оставить заявку
            </ContactButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
