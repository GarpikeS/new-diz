import Link from 'next/link'
import Image from 'next/image'
import { Header, Footer } from '@/components/layout'
import { ContactForm, Genplan, LocationMap } from '@/components/features'
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
  { label: 'Площадь территории', value: '12,1 Га', icon: Ruler },
  { label: 'Площадь помещений', value: '78 800 м²', icon: Building2 },
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
            <div className="relative flex min-h-[20vh] flex-col gap-4 py-6 sm:min-h-[25vh] sm:flex-row sm:items-start sm:justify-between lg:min-h-[30vh] lg:py-8">
              {/* Left - Промпарк Красный Яр */}
              <div className="shrink-0">
                <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Промпарк
                  <br />
                  <span className="text-accent">Красный Яр</span>
                </h1>
              </div>

              {/* Right - Территория вашего бизнеса */}
              <div className="sm:text-right">
                <p className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl sm:leading-none md:text-5xl lg:text-6xl xl:text-7xl">
                  Территория вашего бизнеса
                </p>
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

        {/* Stats bar */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mb-1 text-3xl font-bold lg:text-4xl">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Генплан */}
        <Genplan />

        {/* Для кого */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">Для кого</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {targetSegments.map((segment) => (
                <div key={segment.id} className="rounded-xl border-2 bg-background p-6">
                  <h3 className="mb-2 text-xl font-semibold">{segment.title}</h3>
                  <Badge variant="outline" className="mb-4">{segment.subtitle}</Badge>
                  <ul className="space-y-2">
                    {segment.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Где мы находимся */}
        <LocationMap />
      </main>

      <Footer />
    </>
  )
}
