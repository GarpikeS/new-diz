import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { ContactForm } from '@/components/features'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  Building2,
  Factory,
  MapPin,
  Ruler,
  Train,
  Truck,
  Users,
  Zap,
} from 'lucide-react'

const stats = [
  { label: 'Площадь парка', value: '150 га', icon: Ruler },
  { label: 'Резидентов', value: '45+', icon: Users },
  { label: 'Рабочих мест', value: '3 500', icon: Factory },
  { label: 'Инвестиций', value: '12 млрд ₽', icon: Building2 },
]

const features = [
  {
    icon: Zap,
    title: 'Энергоснабжение',
    description: 'Выделенная мощность до 10 МВт. Две независимые линии электропитания.',
  },
  {
    icon: Train,
    title: 'Ж/Д ветка',
    description: 'Собственный подъездной путь. Прямое подключение к магистрали.',
  },
  {
    icon: Truck,
    title: 'Логистика',
    description: '15 км до федеральной трассы. Удобный подъезд для фур любого тоннажа.',
  },
  {
    icon: MapPin,
    title: 'Расположение',
    description: '35 км от центра города. Рядом жилые районы для персонала.',
  },
]

const residents = [
  { name: 'АвтоКомпонент', logo: 'АК' },
  { name: 'ТехноПласт', logo: 'ТП' },
  { name: 'СтройМеталл', logo: 'СМ' },
  { name: 'ЛогистикПро', logo: 'ЛП' },
  { name: 'ЭнергоСистемы', logo: 'ЭС' },
  { name: 'ПромТехника', logo: 'ПТ' },
]

const availablePlots = [
  { id: '1', area: '2 500 м²', type: 'Производство', price: 'от 350 ₽/м²' },
  { id: '2', area: '5 000 м²', type: 'Склад', price: 'от 280 ₽/м²' },
  { id: '3', area: '10 000 м²', type: 'Производство', price: 'от 320 ₽/м²' },
]

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-primary-foreground lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="outline" className="mb-6 border-accent text-accent">
                Открыт набор резидентов
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Индустриальный парк
                <span className="block text-accent">Красный Яр</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
                Современная площадка для размещения производственных и логистических объектов.
                Готовая инфраструктура, выгодные условия, профессиональное сопровождение.
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
                  <Link href="/about">О парке</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-center lg:p-6"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <div className="text-2xl font-bold lg:text-3xl">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Инфраструктура парка</h2>
              <p className="text-lg text-muted-foreground">
                Всё необходимое для запуска производства — подключение коммуникаций за 30 дней
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="border-2 hover:border-accent/50">
                  <CardContent className="p-6">
                    <feature.icon className="mb-4 h-10 w-10 text-accent" />
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/infrastructure">
                  Вся инфраструктура
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Available Plots Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Badge variant="secondary" className="mb-4">
                {availablePlots.length} свободных участка
              </Badge>
              <h2 className="mb-4">Доступные площадки</h2>
              <p className="text-lg text-muted-foreground">
                Участки от 500 до 50 000 м² с готовыми коммуникациями
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {availablePlots.map((plot) => (
                <Card key={plot.id} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5" />
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge>{plot.type}</Badge>
                      <span className="text-sm text-muted-foreground">#{plot.id}</span>
                    </div>
                    <div className="mb-2 text-2xl font-bold">{plot.area}</div>
                    <div className="mb-4 text-accent">{plot.price}</div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/plots/${plot.id}`}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild>
                <Link href="/plots">
                  Все площадки
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Residents Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Наши резиденты</h2>
              <p className="text-lg text-muted-foreground">
                Более 45 компаний уже успешно работают на территории парка
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {residents.map((resident) => (
                <div
                  key={resident.name}
                  className="flex h-20 w-32 items-center justify-center rounded-lg border bg-card p-4"
                  title={resident.name}
                >
                  <span className="text-2xl font-bold text-muted-foreground">{resident.logo}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/residents">
                  Все резиденты и кейсы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Готовы стать резидентом?
                </h2>
                <p className="mb-6 text-lg text-primary-foreground/80">
                  Оставьте заявку и получите персональную консультацию. Мы поможем подобрать
                  оптимальный участок под ваши задачи.
                </p>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Бесплатная консультация и экскурсия
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Помощь в получении льгот и субсидий
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Юридическое сопровождение сделки
                  </li>
                </ul>
              </div>

              <div
                id="form"
                className="rounded-xl bg-primary-foreground p-6 text-foreground lg:p-8"
              >
                <ContactForm
                  title="Оставить заявку"
                  description="Заполните форму — мы свяжемся с вами в течение 15 минут"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
