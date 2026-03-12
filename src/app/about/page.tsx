import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  CheckCircle,
  MapPin,
  Shield,
  Target,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'О парке',
  description:
    'Индустриальный парк Красный Яр — современная площадка для производственных и логистических компаний. История, миссия, преимущества.',
}

const milestones = [
  { year: '2018', title: 'Основание', description: 'Старт проекта и разработка генплана' },
  { year: '2019', title: 'Инфраструктура', description: 'Подведение коммуникаций и дорог' },
  { year: '2020', title: 'Первые резиденты', description: '10 компаний начали работу' },
  { year: '2022', title: 'Расширение', description: 'Ввод второй очереди парка' },
  { year: '2024', title: 'Сегодня', description: '45+ резидентов, 3500 рабочих мест' },
]

const values = [
  {
    icon: Target,
    title: 'Миссия',
    description:
      'Создание условий для развития промышленности региона, обеспечение компаний современной инфраструктурой.',
  },
  {
    icon: Shield,
    title: 'Надежность',
    description:
      'Стабильное энергоснабжение, профессиональное управление, гарантия выполнения обязательств.',
  },
  {
    icon: Users,
    title: 'Партнерство',
    description:
      'Индивидуальный подход к каждому резиденту, помощь в решении задач, долгосрочное сотрудничество.',
  },
]

const advantages = [
  'Готовая инфраструктура — подключение за 30 дней',
  'Собственная подстанция 110/10 кВ, мощность до 50 МВт',
  'Подъездной ж/д путь с выходом на магистраль',
  'Газоснабжение высокого давления',
  'Центральное водоснабжение и канализация',
  'Оптоволоконные линии связи',
  'Охраняемая территория, КПП 24/7',
  'Управляющая компания на территории',
]

const team = [
  { name: 'Иванов Петр Сергеевич', role: 'Генеральный директор' },
  { name: 'Сидорова Мария Александровна', role: 'Коммерческий директор' },
  { name: 'Козлов Андрей Викторович', role: 'Технический директор' },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6">О парке</h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Индустриальный парк «Красный Яр» — современная площадка класса А для размещения
                производственных, логистических и складских объектов.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">150 га</div>
                <div className="mt-1 text-sm text-muted-foreground">Общая площадь</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">45+</div>
                <div className="mt-1 text-sm text-muted-foreground">Резидентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">3 500</div>
                <div className="mt-1 text-sm text-muted-foreground">Рабочих мест</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">12 млрд</div>
                <div className="mt-1 text-sm text-muted-foreground">Инвестиций</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <item.icon className="mb-4 h-10 w-10 text-accent" />
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">История развития</h2>

            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-px" />

              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground md:left-1/2 md:-ml-4">
                    <Calendar className="h-4 w-4" />
                  </div>

                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <Card>
                      <CardContent className="p-4">
                        <div className="mb-1 text-lg font-bold text-accent">{item.year}</div>
                        <h4 className="mb-1 font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6">Преимущества парка</h2>
                <ul className="space-y-4">
                  {advantages.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 lg:aspect-square" />
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Руководство</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {team.map((person) => (
                <Card key={person.name}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">{person.name}</h4>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h2 className="mb-6">Сертификаты и награды</h2>
              <p className="mb-8 text-muted-foreground">
                Индустриальный парк «Красный Яр» сертифицирован по стандартам Ассоциации
                индустриальных парков России. Признан лучшим промышленным парком Приволжского
                федерального округа.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-lg border bg-card px-6 py-3 text-sm">
                  Член АИП России
                </div>
                <div className="rounded-lg border bg-card px-6 py-3 text-sm">
                  Сертификат класса А
                </div>
                <div className="rounded-lg border bg-card px-6 py-3 text-sm">
                  Лучший ИП ПФО 2023
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Присоединяйтесь к резидентам</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Станьте частью успешного бизнес-сообщества. Мы поможем подобрать оптимальную площадку
              для вашего производства.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/plots">
                  Выбрать площадку
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
