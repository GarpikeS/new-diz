'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { ContactButton } from '@/components/features'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { plots, plotTypeLabels, plotStatusLabels, dealTypeLabels, type Plot } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

const statusColors: Record<Plot['status'], string> = {
  available: 'bg-green-500/10 text-green-700',
  reserved: 'bg-yellow-500/10 text-yellow-700',
  occupied: 'bg-red-500/10 text-red-700',
}

function PlotsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const dealParam = searchParams.get('deal')
  const initialDeal = dealParam === 'rent' ? 'аренда' : dealParam === 'sale' ? 'покупка' : 'все'

  const [dealFilter, setDealFilter] = useState<string>(initialDeal)
  const [typeFilter, setTypeFilter] = useState<string>('все')
  const [sortBy, setSortBy] = useState<string>('площадь')

  const filteredPlots = plots
    .filter((plot) => dealFilter === 'все' || (dealFilter === 'аренда' && plot.dealType === 'rent') || (dealFilter === 'покупка' && plot.dealType === 'sale'))
    .filter((plot) => typeFilter === 'все' || (typeFilter === 'производство' && plot.type === 'production') || (typeFilter === 'офис' && plot.type === 'office'))
    .sort((a, b) => {
      if (sortBy === 'площадь') return b.area - a.area
      if (sortBy === 'цена') return a.price - b.price
      return 0
    })

  const resetFilters = () => {
    setDealFilter('все')
    setTypeFilter('все')
    setSortBy('площадь')
  }

  const formatPrice = (plot: Plot) => {
    if (plot.dealType === 'sale') {
      return plot.totalPrice
        ? `${(plot.totalPrice / 1000000).toFixed(1)} млн ₽`
        : 'По запросу'
    }
    return `${(plot.area * plot.price).toLocaleString('ru-RU')} ₽/мес`
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Каталог помещений</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Офисы и производственные площади в промышленном парке Красный Яр<br />
              Аренда и покупка
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Сделка:</span>
                <Select value={dealFilter} onValueChange={(v) => v && setDealFilter(v)}>
                  <SelectTrigger className="w-[150px] bg-background">
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="все">Все</SelectItem>
                    <SelectItem value="аренда">Аренда</SelectItem>
                    <SelectItem value="покупка">Покупка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Формат:</span>
                <Select value={typeFilter} onValueChange={(v) => v && setTypeFilter(v)}>
                  <SelectTrigger className="w-[180px] bg-background">
                    <SelectValue placeholder="Все форматы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="все">Все форматы</SelectItem>
                    <SelectItem value="производство">Производство</SelectItem>
                    <SelectItem value="офис">Офис</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Сортировка:</span>
                <Select value={sortBy} onValueChange={(v) => v && setSortBy(v)}>
                  <SelectTrigger className="w-[150px] bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="площадь">По площади</SelectItem>
                    <SelectItem value="цена">По цене</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" size="sm" onClick={resetFilters}>
                Сбросить
              </Button>

              <div className="ml-auto text-sm text-muted-foreground">
                Найдено: {filteredPlots.length}
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-lg border bg-background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Сделка</TableHead>
                    <TableHead>Формат</TableHead>
                    <TableHead className="text-right">Площадь</TableHead>
                    <TableHead className="text-right">Цена</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPlots.map((plot) => (
                    <TableRow
                      key={plot.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => router.push(`/plots/${plot.id}`)}
                    >
                      <TableCell className="font-medium">{plot.title}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{dealTypeLabels[plot.dealType]}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{plotTypeLabels[plot.type]}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {plot.area.toLocaleString('ru-RU')} м²
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="font-semibold text-accent">
                          {formatPrice(plot)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[plot.status]}>
                          {plotStatusLabels[plot.status]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/plots/${plot.id}`}>
                            Подробнее
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredPlots.length === 0 && (
              <div className="py-12 text-center text-muted-foreground">
                Нет помещений по выбранным критериям
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-3">Не нашли подходящее?</h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
              Оставьте заявку — подберём помещение под ваши требования
            </p>
            <ContactButton showArrow>
              Оставить заявку
            </ContactButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default function PlotsPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <PlotsContent />
    </Suspense>
  )
}
