import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { residents } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Резиденты',
  description:
    'Компании-резиденты индустриального парка Красный Яр. Кейсы успешного размещения производства',
}

export default function ResidentsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Наши резиденты</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              На территории парка размещено {residents.length} производственных компаний,
              занимающих более 44 000 м² и создавших свыше 1 300 рабочих мест
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{residents.length}</div>
                <div className="mt-1 text-sm text-muted-foreground">Компаний</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">1 300+</div>
                <div className="mt-1 text-sm text-muted-foreground">Рабочих мест</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">44 000</div>
                <div className="mt-1 text-sm text-muted-foreground">м² площадей</div>
              </div>
            </div>
          </div>
        </section>

        {/* Residents grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {residents.map((resident) => (
                <Card key={resident.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        src={resident.logo}
                        alt={resident.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{resident.name}</h3>
                        <Badge variant="secondary">{resident.industry}</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{resident.description}</p>
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
