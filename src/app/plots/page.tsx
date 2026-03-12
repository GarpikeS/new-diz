import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { plots, plotTypeLabels, plotStatusLabels, type Plot } from '@/lib/data'
import { ArrowRight, Factory, MapPin, Ruler, Train, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Каталог площадок',
  description:
    'Свободные участки для размещения производства в индустриальном парке Красный Яр. Площадь от 1500 до 10000 м².',
}

function PlotCard({ plot }: { plot: Plot }) {
  const statusColors: Record<Plot['status'], string> = {
    available: 'bg-green-500/10 text-green-700 border-green-200',
    reserved: 'bg-yellow-500/10 text-yellow-700 border-yellow-200',
    occupied: 'bg-red-500/10 text-red-700 border-red-200',
  }

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5" />
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="outline">{plotTypeLabels[plot.type]}</Badge>
          <Badge variant="outline" className={statusColors[plot.status]}>
            {plotStatusLabels[plot.status]}
          </Badge>
        </div>

        <h3 className="mb-2 text-xl font-semibold">{plot.title}</h3>

        <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" />
            <span>{plot.area.toLocaleString('ru-RU')} м²</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4" />
            <span>{plot.power} кВт</span>
          </div>
          {plot.railway && (
            <div className="flex items-center gap-1.5">
              <Train className="h-4 w-4" />
              <span>Ж/Д ветка</span>
            </div>
          )}
          {plot.gas && (
            <div className="flex items-center gap-1.5">
              <Factory className="h-4 w-4" />
              <span>Газ</span>
            </div>
          )}
        </div>

        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-accent">от {plot.price} ₽</span>
          <span className="text-sm text-muted-foreground">за м²/год</span>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <Link href={`/plots/${plot.id}`}>
            Подробнее
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function PlotsPage() {
  const availablePlots = plots.filter((p) => p.status === 'available')
  const otherPlots = plots.filter((p) => p.status !== 'available')

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                {availablePlots.length} свободных участков
              </Badge>
              <h1 className="mb-6">Каталог площадок</h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Участки от 1 500 до 10 000 м² с готовыми коммуникациями. Производство, склад или
                универсальное назначение.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">от 1 500 м²</div>
                <div className="text-sm text-muted-foreground">Минимальная площадь</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">от 260 ₽</div>
                <div className="text-sm text-muted-foreground">За м²/год</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30 дней</div>
                <div className="text-sm text-muted-foreground">Подключение</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Ж/Д ветка</div>
                <div className="text-sm text-muted-foreground">Доступна</div>
              </div>
            </div>
          </div>
        </section>

        {/* Map link */}
        <section className="border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">Посмотреть расположение участков на карте</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/map">
                  Открыть карту
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Available plots */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-8">Свободные участки</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availablePlots.map((plot) => (
                <PlotCard key={plot.id} plot={plot} />
              ))}
            </div>
          </div>
        </section>

        {/* Other plots */}
        {otherPlots.length > 0 && (
          <section className="bg-muted py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="mb-8">Забронированные участки</h2>
              <p className="mb-8 text-muted-foreground">
                Эти участки находятся в процессе оформления. Оставьте заявку, чтобы узнать о
                появлении аналогичных предложений.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherPlots.map((plot) => (
                  <PlotCard key={plot.id} plot={plot} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Не нашли подходящий участок?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Оставьте заявку с вашими требованиями — мы подберём оптимальный вариант или
              зарезервируем участок на следующей очереди.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts#form">
                Оставить заявку
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
