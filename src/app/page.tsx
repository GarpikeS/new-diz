import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { ContactForm } from '@/components/features'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { company, spaceFormats, phases, benefits, targetSegments } from '@/lib/data'
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Warehouse,
  Zap,
  Wifi,
  ShieldCheck,
  Users,
  Clock,
  Ruler,
  CheckCircle,
} from 'lucide-react'

const stats = [
  { label: 'Площадь помещений', value: '57 000 м²', icon: Ruler },
  { label: 'Резидентов', value: '9', icon: Users },
  { label: 'Лет работы', value: '14', icon: Clock },
  { label: 'Мощность', value: '31,5 МВт', icon: Zap },
]

const iconMap: Record<string, typeof Factory> = {
  Factory,
  Warehouse,
  Building2,
  HardHat,
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section - асимметричный стиль */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            {/* Main hero */}
            <div className="relative flex min-h-[50vh] flex-col justify-between py-10 lg:min-h-[60vh] lg:py-12">
              {/* Top left - subtitle */}
              <div className="max-w-md">
                <p className="text-xl text-primary-foreground/70 md:text-2xl">
                  Производственная площадка
                  <br />
                  с готовой инфраструктурой в Красноярске
                </p>
              </div>

              {/* Bottom section */}
              <div className="mt-12 flex flex-col items-start justify-between gap-8 lg:mt-0 lg:flex-row lg:items-end">
                {/* Button - bottom left */}
                <div>
                  <Button size="lg" className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/plots">
                      Выбрать помещение
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Main title - bottom right */}
                <div className="text-right">
                  <h1 className="text-5xl font-bold leading-none tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">
                    Промпарк
                    <br />
                    <span className="text-accent">Красный Яр</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="border-t border-primary-foreground/10 py-10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mb-1 text-3xl font-bold lg:text-4xl">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Space Formats Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Форматы размещения</h2>
              <p className="text-lg text-muted-foreground">
                Гибкие решения для любого масштаба бизнеса
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {spaceFormats.map((format) => {
                const Icon = iconMap[format.icon] || Factory
                return (
                  <Card key={format.id} className="border-2 transition-colors hover:border-accent/50">
                    <CardContent className="p-6">
                      <Icon className="mb-4 h-10 w-10 text-accent" />
                      <h3 className="mb-2 text-lg font-semibold">{format.title}</h3>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/plots">
                  Смотреть помещения
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Преимущества</h2>
              <p className="text-lg text-muted-foreground">
                Всё необходимое для успешного бизнеса
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <CheckCircle className="mb-4 h-8 w-8 text-accent" />
                    <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/infrastructure">
                  Подробнее об инфраструктуре
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Phases Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Очереди развития</h2>
              <p className="text-lg text-muted-foreground">
                Парк постоянно расширяется
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {phases.map((phase) => (
                <Card
                  key={phase.id}
                  className={
                    phase.status === 'completed'
                      ? 'border-accent bg-accent/5'
                      : phase.status === 'in-progress'
                        ? 'border-primary/20'
                        : 'border-muted'
                  }
                >
                  <CardContent className="p-6">
                    <Badge
                      className={
                        phase.status === 'completed'
                          ? 'mb-4 bg-accent'
                          : phase.status === 'in-progress'
                            ? 'mb-4'
                            : 'mb-4'
                      }
                      variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}
                    >
                      {phase.statusLabel}
                    </Badge>
                    <h3 className="mb-2 text-xl font-semibold">{phase.title}</h3>
                    <p className="mb-3 text-muted-foreground">{phase.description}</p>
                    <p className="text-lg font-bold text-accent">{phase.area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Segments */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4">Для кого</h2>
              <p className="text-lg text-muted-foreground">
                Решения для бизнеса любого масштаба
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {targetSegments.map((segment) => (
                <Card key={segment.id} className="bg-background">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4">{segment.subtitle}</Badge>
                    <h3 className="mb-2 text-xl font-semibold">{segment.title}</h3>
                    <p className="text-muted-foreground">{segment.description}</p>
                  </CardContent>
                </Card>
              ))}
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
                  Оставьте заявку и получите персональную консультацию. Подберём оптимальное
                  решение под ваши задачи.
                </p>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Бесплатная консультация и экскурсия
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Персональный менеджер
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Гибкие условия аренды
                  </li>
                </ul>

                <div className="mt-8 space-y-2 text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">{company.phone}</p>
                  <p>{company.email}</p>
                </div>
              </div>

              <div
                id="form"
                className="rounded-xl bg-primary-foreground p-6 text-foreground lg:p-8"
              >
                <ContactForm
                  title="Оставить заявку"
                  description="Заполните форму — мы свяжемся с вами"
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
