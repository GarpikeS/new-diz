import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { FileCheck, Award, TrendingUp, Calendar, Building, MousePointerClick, Users, Wrench, Receipt, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'О парке',
  description:
    'Промышленный парк Красный Яр — первый парк Красноярского края в федеральном реестре Минпромторга РФ',
}

const milestones = [
  { year: '2012', event: 'Основание парка на территории завода «Сибэлектросталь»' },
  { year: '2013', event: 'Первый резидент — АО «Спецтехномаш»' },
  { year: '2017', event: 'Масштабное расширение: новые корпуса, 3 новых резидента' },
  { year: '2022', event: 'Включение в реестр Минпромторга, сертификат ГОСТ Р 56301-2014' },
  { year: '2025', event: '9 резидентов, более 1 300 рабочих мест' },
]

const stats = [
  { value: '12,1 Га', label: 'Территория парка' },
  { value: '78 800 м²', label: 'Площадь помещений' },
  { value: '9', label: 'Резидентов' },
  { value: '1 300+', label: 'Рабочих мест' },
]

const advantages = [
  { icon: Building, title: 'Готовая инфраструктура' },
  { icon: MousePointerClick, title: 'Сквозные решения' },
  { icon: Users, title: 'Индивидуальный подход' },
  { icon: Wrench, title: 'Собственная служба эксплуатации' },
  { icon: Receipt, title: 'Аренда/покупка помещений' },
  { icon: Clock, title: '14 лет работы' },
]

const achievements = [
  { icon: Calendar, title: 'С 2012 года', description: '14 лет успешной работы на рынке' },
  { icon: TrendingUp, title: 'ТОП-30 России', description: 'В рейтинге лучших промышленных парков страны' },
  { icon: Award, title: 'Сертификация ISO', description: 'Соответствие международным стандартам качества' },
  { icon: FileCheck, title: 'В реестре Минпромторга', description: 'Первый парк Красноярского края в федеральном реестре' },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-8 text-primary-foreground lg:py-10">
          <div className="container mx-auto px-4">
            <h1 className="mb-6">О парке</h1>
            <p className="max-w-3xl text-lg text-primary-foreground/80">
              14 лет успешной работы<br />
              100+ производственных компаний<br />
              Качественные промышленные площади
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

        {/* Преимущества */}
        <section className="py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Преимущества</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex flex-col items-center rounded-xl border bg-background p-5 text-center shadow-sm">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Достижения */}
        <section className="py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Достижения</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-3 rounded-lg bg-muted p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Этапы развития */}
        <section className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8">Этапы развития</h2>

            <div className="grid gap-4 md:grid-cols-5">
              {milestones.map((item) => (
                <Card key={item.year}>
                  <CardContent className="p-5">
                    <div className="mb-2 text-2xl font-bold text-accent">{item.year}</div>
                    <p className="text-sm text-muted-foreground">{item.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
