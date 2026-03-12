import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { residents } from '@/lib/data'
import { ArrowRight, Building, Calendar, Quote, Ruler, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Резиденты',
  description:
    'Компании-резиденты индустриального парка Красный Яр. Кейсы успешного размещения производства.',
}

export default function ResidentsPage() {
  const stats = {
    total: residents.length,
    employees: residents.reduce((acc, r) => acc + r.employees, 0),
    area: residents.reduce((acc, r) => acc + r.area, 0),
  }

  const quotes = residents.filter((r) => r.quote)

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6">Наши резиденты</h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                Более {stats.total} компаний различных отраслей успешно работают на территории
                парка. Создано {stats.employees.toLocaleString('ru-RU')} рабочих мест.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stats.total}+</div>
                <div className="mt-1 text-sm text-muted-foreground">Компаний</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stats.employees.toLocaleString('ru-RU')}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Рабочих мест</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {(stats.area / 1000).toFixed(0)} тыс
                </div>
                <div className="mt-1 text-sm text-muted-foreground">м² площадей</div>
              </div>
            </div>
          </div>
        </section>

        {/* Residents grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {residents.map((resident) => (
                <Card key={resident.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-2xl font-bold text-primary">
                        {resident.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold">{resident.name}</h3>
                        <Badge variant="secondary">{resident.industry}</Badge>
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-muted-foreground">{resident.description}</p>

                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="rounded-lg bg-muted p-2">
                        <Calendar className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <div className="font-medium">{resident.since}</div>
                        <div className="text-xs text-muted-foreground">год</div>
                      </div>
                      <div className="rounded-lg bg-muted p-2">
                        <Users className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <div className="font-medium">{resident.employees}</div>
                        <div className="text-xs text-muted-foreground">чел.</div>
                      </div>
                      <div className="rounded-lg bg-muted p-2">
                        <Ruler className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <div className="font-medium">{(resident.area / 1000).toFixed(1)}к</div>
                        <div className="text-xs text-muted-foreground">м²</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {quotes.length > 0 && (
          <section className="bg-muted py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="mb-12 text-center">Отзывы резидентов</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {quotes.map((resident) => (
                  <Card key={resident.id} className="relative">
                    <CardContent className="p-6 pt-8">
                      <Quote className="absolute -top-3 left-6 h-8 w-8 text-accent/20" />
                      <p className="mb-4 italic text-muted-foreground">
                        &laquo;{resident.quote!.text}&raquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {resident.logo}
                        </div>
                        <div>
                          <div className="font-medium">{resident.quote!.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {resident.quote!.role}, {resident.name}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">Отрасли резидентов</h2>

            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(residents.map((r) => r.industry))).map((industry) => (
                <Badge key={industry} variant="outline" className="px-4 py-2 text-base">
                  <Building className="mr-2 h-4 w-4" />
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Станьте нашим резидентом</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Присоединяйтесь к сообществу успешных компаний. Мы обеспечим всю необходимую
              инфраструктуру для вашего бизнеса.
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
                <Link href="/contacts#form">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
