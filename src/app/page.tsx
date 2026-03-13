import Link from 'next/link'
import Image from 'next/image'
import { Header, Footer } from '@/components/layout'
import { ContactForm, Genplan } from '@/components/features'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { company, spaceFormats, benefits, targetSegments } from '@/lib/data'
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
  Award,
  FileCheck,
  TrendingUp,
  Calendar,
} from 'lucide-react'

const stats = [
  { label: 'Площадь помещений', value: '57 000 м²', icon: Ruler },
  { label: 'Резидентов', value: '9', icon: Users },
  { label: 'Лет работы', value: '14', icon: Clock },
  { label: 'Мощность', value: '31,5 МВт', icon: Zap },
]

const achievements = [
  { icon: FileCheck, title: 'В реестре Минпромторга', description: 'Первый парк Красноярского края в федеральном реестре' },
  { icon: Award, title: 'Сертификация ISO', description: 'Соответствие международным стандартам качества' },
  { icon: TrendingUp, title: 'ТОП-30 России', description: 'В рейтинге лучших промышленных парков страны' },
  { icon: Calendar, title: 'С 2012 года', description: '14 лет успешной работы на рынке' },
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
        {/* Hero Section */}
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

        {/* Hero Image - на всю ширину */}
        <div className="relative h-[150px] overflow-hidden md:h-[200px] lg:h-[250px]">
          <Image
            src="/hero-main.jpg"
            alt="Промышленный парк Красный Яр"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Форматы помещений - вертикальные карточки */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">Форматы помещений</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {spaceFormats.map((format) => {
                const Icon = iconMap[format.icon] || Factory
                return (
                  <div
                    key={format.id}
                    className="flex flex-col rounded-2xl border-2 bg-background p-6 transition-all hover:border-accent hover:shadow-lg"
                  >
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold">{format.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-muted-foreground">{format.description}</p>

                    {/* Features */}
                    <ul className="mb-6 flex-1 space-y-2">
                      {format.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/plots?type=${format.id}`}>
                        Смотреть помещения
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* Достижения и Преимущества */}
        <section className="bg-muted py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Достижения - слева */}
              <div>
                <h2 className="mb-6">Достижения</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {achievements.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-3 rounded-lg bg-background p-4">
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

              {/* Преимущества - справа */}
              <div>
                <h2 className="mb-6">Почему выбирают нас</h2>
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
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/infrastructure">
                      Подробнее об инфраструктуре
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Генплан */}
        <Genplan />

        {/* Для кого */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">Для кого</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {targetSegments.map((segment) => (
                <div key={segment.id} className="rounded-xl border-2 bg-background p-6">
                  <Badge variant="outline" className="mb-4">{segment.subtitle}</Badge>
                  <h3 className="mb-2 text-xl font-semibold">{segment.title}</h3>
                  <p className="text-muted-foreground">{segment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
