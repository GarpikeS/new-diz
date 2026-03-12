import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { TerritoryMap } from '@/components/features'

export const metadata: Metadata = {
  title: 'Карта территории',
  description:
    'Интерактивная карта индустриального парка Красный Яр. Расположение участков, инфраструктура, подъездные пути.',
}

export default function MapPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4">Карта территории</h1>
              <p className="text-lg text-primary-foreground/80">
                Интерактивная карта с расположением участков, инфраструктурными объектами и
                подъездными путями.
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <TerritoryMap />
          </div>
        </section>

        {/* Legend */}
        <section className="border-t bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-semibold">Условные обозначения</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-background p-4">
                <h3 className="mb-2 font-semibold">Статусы участков</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-green-500" />
                    <span>Свободен — доступен к аренде</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-amber-500" />
                    <span>В брони — идёт оформление</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-red-500" />
                    <span>Занят — действующий резидент</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-background p-4">
                <h3 className="mb-2 font-semibold">Инфраструктура</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">⚡</span>
                    <span>Электроподстанция 110кВ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">🔥</span>
                    <span>Газораспределительный пункт</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">💧</span>
                    <span>Очистные сооружения</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-background p-4">
                <h3 className="mb-2 font-semibold">Транспорт</h3>
                <ul className="space-y-2 text-sm">
                  <li>Ж/Д ветка — подъездной путь</li>
                  <li>Автодорога — асфальт до каждого участка</li>
                  <li>КПП — круглосуточный пропускной режим</li>
                </ul>
              </div>

              <div className="rounded-lg bg-background p-4">
                <h3 className="mb-2 font-semibold">Взаимодействие с картой</h3>
                <ul className="space-y-2 text-sm">
                  <li>Клик по участку — детальная информация</li>
                  <li>Фильтры — выбор по статусу</li>
                  <li>Масштаб — колёсико мыши или кнопки</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
