import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header, Footer } from '@/components/layout'
import { ContactForm } from '@/components/features'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { plots, plotTypeLabels, plotStatusLabels, type Plot } from '@/lib/data'
import { ArrowLeft, CheckCircle, Factory, MapPin, Ruler, Train, Zap } from 'lucide-react'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return plots.map((plot) => ({ id: plot.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const plot = plots.find((p) => p.id === id)

  if (!plot) {
    return { title: 'Участок не найден' }
  }

  return {
    title: `${plot.title} — ${plot.area.toLocaleString('ru-RU')} м²`,
    description: plot.description,
  }
}

export default async function PlotPage({ params }: Props) {
  const { id } = await params
  const plot = plots.find((p) => p.id === id)

  if (!plot) {
    notFound()
  }

  const statusColors: Record<Plot['status'], string> = {
    available: 'bg-green-500/10 text-green-700 border-green-200',
    reserved: 'bg-yellow-500/10 text-yellow-700 border-yellow-200',
    occupied: 'bg-red-500/10 text-red-700 border-red-200',
  }

  const similarPlots = plots
    .filter((p) => p.id !== plot.id && p.status === 'available' && p.type === plot.type)
    .slice(0, 2)

  return (
    <>
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/plots" className="hover:text-foreground">
                Площадки
              </Link>
              <span>/</span>
              <span className="text-foreground">{plot.title}</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link href="/plots">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Все площадки
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Images */}
              <div>
                <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-gradient-to-br from-primary/5 to-primary/10"
                    />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{plotTypeLabels[plot.type]}</Badge>
                  <Badge variant="outline" className={statusColors[plot.status]}>
                    {plotStatusLabels[plot.status]}
                  </Badge>
                </div>

                <h1 className="mb-2 text-3xl font-bold">{plot.title}</h1>
                <p className="mb-6 text-muted-foreground">{plot.description}</p>

                {/* Key specs */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <Ruler className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Площадь</div>
                      <div className="font-semibold">{plot.area.toLocaleString('ru-RU')} м²</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Мощность</div>
                      <div className="font-semibold">{plot.power} кВт</div>
                    </div>
                  </div>
                  {plot.railway && (
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                      <Train className="h-5 w-5 text-accent" />
                      <div>
                        <div className="text-sm text-muted-foreground">Ж/Д</div>
                        <div className="font-semibold">Есть</div>
                      </div>
                    </div>
                  )}
                  {plot.gas && (
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                      <Factory className="h-5 w-5 text-accent" />
                      <div>
                        <div className="text-sm text-muted-foreground">Газ</div>
                        <div className="font-semibold">Есть</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price */}
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-3xl font-bold text-accent">от {plot.price} ₽</span>
                        <span className="ml-2 text-muted-foreground">за м²/год</span>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>~ {((plot.price * plot.area) / 12).toLocaleString('ru-RU')} ₽/мес</div>
                        <div>~ {(plot.price * plot.area).toLocaleString('ru-RU')} ₽/год</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold">Характеристики</h3>
                  <ul className="space-y-2">
                    {plot.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {plot.status === 'available' ? (
                  <div className="flex gap-3">
                    <Button size="lg" className="flex-1" asChild>
                      <a href="#form">Оставить заявку</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contacts">
                        <MapPin className="mr-2 h-4 w-4" />
                        Записаться на осмотр
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="/contacts#form">Узнать о похожих участках</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        {plot.status === 'available' && (
          <section id="form" className="bg-muted py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-2xl">
                <ContactForm
                  variant="card"
                  title={`Заявка на ${plot.title}`}
                  description="Оставьте заявку — менеджер свяжется с вами в течение 15 минут для обсуждения условий"
                  plotId={plot.id}
                />
              </div>
            </div>
          </section>
        )}

        {/* Similar plots */}
        {similarPlots.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="mb-8">Похожие участки</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {similarPlots.map((p) => (
                  <Card key={p.id} className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5" />
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline">{plotTypeLabels[p.type]}</Badge>
                        <span className="text-sm text-muted-foreground">#{p.id}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
                      <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{p.area.toLocaleString('ru-RU')} м²</span>
                        <span>{p.power} кВт</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">от {p.price} ₽/м²</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/plots/${p.id}`}>Подробнее</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
