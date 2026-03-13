import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const buildings = [
  {
    id: 1,
    tag: 'Введено в эксплуатацию',
    tagType: 'active',
    title: '1-я очередь',
    description: 'Производственно-складские и офисные помещения',
    specs: [
      { label: 'Общая площадь', value: '57 000 м²' },
      { label: 'Производство/склад', value: '50 000 м²' },
      { label: 'Офисы', value: '7 000 м²' },
      { label: 'Высота потолков', value: 'до 13 м' },
    ],
    primaryAction: { label: 'Арендовать', href: '/plots?deal=rent' },
    position: { top: '45%', left: '28%' },
  },
  {
    id: 2,
    tag: 'В реализации',
    tagType: 'progress',
    title: '2-я очередь',
    description: 'Гибкие помещения Light Industrial',
    specs: [
      { label: 'Общая площадь', value: '21 800 м²' },
      { label: 'Минимальный блок', value: 'от 480 м²' },
      { label: 'Высота потолков', value: '6-8 м' },
      { label: 'Электроснабжение', value: 'повышенное' },
    ],
    primaryAction: { label: 'Инвестировать', href: '/plots?deal=sale' },
    position: { top: '40%', left: '62%' },
  },
]

const tagColors = {
  active: 'bg-green-500',
  progress: 'bg-amber-500',
}

const legendItems = [
  { label: 'Введено в эксплуатацию', color: 'bg-green-500' },
  { label: 'В реализации', color: 'bg-amber-500' },
]

export function Genplan() {
  return (
    <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-10 lg:py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Генплан парка</h2>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* Map */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-0">
            <Image
              src="/hero-main.jpg"
              alt="Генплан Промпарка Красный Яр"
              fill
              className="object-cover"
            />

            {/* Static Points */}
            {buildings.map((building) => (
              <div
                key={building.id}
                className="absolute flex h-10 w-10 items-center justify-center"
                style={{ top: building.position.top, left: building.position.left }}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg ring-2 ring-white ${
                    tagColors[building.tagType as keyof typeof tagColors]
                  }`}
                >
                  {building.id}
                </span>
              </div>
            ))}
          </div>

          {/* Info Panel - показываем оба здания */}
          <div className="space-y-4">
            {buildings.map((building) => (
              <div
                key={building.id}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                      tagColors[building.tagType as keyof typeof tagColors]
                    }`}
                  >
                    {building.id}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{building.title}</h3>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        building.tagType === 'active' ? 'text-green-400' : 'text-amber-400'
                      }`}
                    >
                      {building.tag}
                    </span>
                  </div>
                </div>

                {/* Specs - компактно */}
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                  {building.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between gap-2">
                      <span className="text-white/50">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link href={building.primaryAction.href}>
                    {building.primaryAction.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-sm text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
