import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, FileCheck, Award, TrendingUp, Calendar } from 'lucide-react'
import { benefits } from '@/lib/data'

export const metadata: Metadata = {
  title: 'О парке',
  description:
    'Промышленный парк Красный Яр — первый парк Красноярского края в федеральном реестре Минпромторга РФ.',
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
  'Готовая инфраструктура',
  'Транспортная и инженерная доступность',
  'Работаем в одно окно',
  'Индивидуальный подход',
  'Собственная служба эксплуатации',
  'Прозрачное ценообразование',
  '14 лет работы',
]

const achievements = [
  { icon: FileCheck, title: 'В реестре Минпромторга', description: 'Первый парк Красноярского края в федеральном реестре' },
  { icon: Award, title: 'Сертификация ISO', description: 'Соответствие международным стандартам качества' },
  { icon: TrendingUp, title: 'ТОП-30 России', description: 'В рейтинге лучших промышленных парков страны' },
  { icon: Calendar, title: 'С 2012 года', description: '14 лет успешной работы на рынке' },
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
              Промышленный парк «Красный Яр» работает с{' '}
              <span className="font-semibold text-primary-foreground">2012 года</span>. В{' '}
              <span className="font-semibold text-primary-foreground">2022 году</span> стал первым парком
              Красноярского края, включённым в федеральный реестр промышленных парков
              Минпромторга РФ.
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

        {/* Timeline */}
        <section className="py-8 lg:py-10">
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

        {/* Преимущества */}
        <section className="border-t bg-muted py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Преимущества</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Достижения и Почему выбирают нас */}
        <section className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Достижения */}
              <div>
                <h2 className="mb-6">Достижения</h2>
                <div className="grid gap-4 sm:grid-cols-2">
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

              {/* Почему выбирают нас */}
              <div>
                <h2 className="mb-6">Почему мы</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Руководство */}
        <section className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Руководство</h2>
            <Card className="max-w-2xl">
              <CardContent className="flex items-start gap-6 p-6">
                <img
                  src="/team/sivaev.jpg"
                  alt="Сиваев Александр Владимирович"
                  className="h-32 w-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="mb-1 text-xl font-semibold">Сиваев Александр Владимирович</h3>
                  <p className="mb-4 text-muted-foreground">Генеральный директор</p>
                  <p className="text-sm text-muted-foreground">
                    Руководит парком с момента основания в 2012 году. Под его руководством
                    «Красный Яр» стал первым промышленным парком Красноярского края в
                    федеральном реестре Минпромторга РФ.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
