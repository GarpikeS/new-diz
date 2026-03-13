import { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Droplets,
  Flame,
  Globe,
  MapPin,
  Shield,
  Truck,
  Wifi,
  Zap,
  Thermometer,
  Eye,
  Car,
  Wrench,
  Sparkles,
  TreePine,
  Hammer,
  Plug,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Инфраструктура',
  description:
    'Инженерная и транспортная инфраструктура индустриального парка Красный Яр. Энергоснабжение, газ, вода.',
}

const infrastructure = [
  {
    icon: Zap,
    title: 'Электроснабжение',
    description: 'Собственная подстанция 110/10 кВ',
    specs: [
      { label: 'Мощность', value: '31,5 МВт' },
      { label: 'Резерв', value: 'Есть' },
    ],
  },
  {
    icon: Thermometer,
    title: 'Теплоснабжение',
    description: 'Централизованная система отопления',
    specs: [
      { label: 'Мощность', value: '4 Гкал' },
      { label: 'Подключение', value: 'Быстрое' },
    ],
  },
  {
    icon: Droplets,
    title: 'Водоснабжение',
    description: 'Централизованное водоснабжение и канализация',
    specs: [
      { label: 'Водоснабжение', value: '101,2 м³/сут' },
      { label: 'Водоотведение', value: '91,2 м³/сут' },
    ],
  },
  {
    icon: Wifi,
    title: 'Интернет и связь',
    description: 'Оптоволоконное подключение от 5 провайдеров',
    specs: [
      { label: 'Скорость', value: 'до 10 Гбит/с' },
      { label: 'IP-телефония', value: 'Есть' },
    ],
  },
]

const transportAndSecurity = [
  { icon: MapPin, title: 'Расположение', description: '15 минут от центра города, 10 км до трассы М-53, 40 км до аэропорта' },
  { icon: Truck, title: 'Грузовой транспорт', description: 'Удобный подъезд для транспорта любого тоннажа' },
  { icon: Car, title: 'Парковка', description: 'Парковочные площадки для сотрудников и посетителей' },
  { icon: Shield, title: 'Охрана 24/7', description: 'Круглосуточная охрана территории, контрольно-пропускной режим' },
  { icon: Eye, title: 'Камеры', description: 'Система видеонаблюдения по всей территории парка' },
]

const services = [
  {
    icon: Wrench,
    title: 'Техническое обслуживание',
    items: ['Обслуживание электросетей', 'Вентиляция и кондиционирование', 'Водоснабжение и канализация', 'Отопление'],
  },
  {
    icon: Sparkles,
    title: 'Клининг',
    items: ['Уборка мест общего пользования', 'Уборка территории', 'Мойка окон и фасадов', 'Вывоз мусора'],
  },
  {
    icon: Shield,
    title: 'Охрана и безопасность',
    items: ['Видеонаблюдение', 'Охранная сигнализация', 'Патрулирование территории', 'Пожарная безопасность'],
  },
  {
    icon: TreePine,
    title: 'Благоустройство',
    items: ['Содержание дорог', 'Уход за зелёными насаждениями', 'Освещение территории', 'Парковочные зоны'],
  },
  {
    icon: Hammer,
    title: 'Ремонтные работы',
    items: ['Аварийный ремонт', 'Плановый ремонт', 'Отделочные работы', 'Ремонт кровли и фасадов'],
  },
  {
    icon: Plug,
    title: 'Коммунальные услуги',
    items: ['Электроснабжение', 'Теплоснабжение', 'Водоснабжение', 'Ливневая канализация'],
  },
]

const documents = [
  { title: 'Сертификат соответствия ГОСТ Р 56301-2014', description: 'Подтверждение статуса промышленного парка' },
  { title: 'Свидетельство о включении в реестр Минпромторга', description: 'Федеральный реестр промышленных парков РФ' },
  { title: 'Договор аренды', description: 'Типовой договор аренды помещений' },
  { title: 'Правила внутреннего распорядка', description: 'Регламент работы на территории парка' },
]

export default function InfrastructurePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Инфраструктура</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Полный комплекс инженерных коммуникаций и транспортной доступности для бесперебойной
              работы вашего производства.
            </p>
          </div>
        </section>

        {/* Engineering Infrastructure */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8">Инженерные сети</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {infrastructure.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                    <dl className="space-y-1 text-sm">
                      {item.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between">
                          <dt className="text-muted-foreground">{spec.label}</dt>
                          <dd className="font-medium">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transport & Security */}
        <section id="transport" className="border-t bg-muted py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Транспорт и безопасность</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {transportAndSecurity.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Услуги</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title}>
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <service.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{service.title}</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="documents" className="border-t bg-muted py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Документы</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {documents.map((doc) => (
                <Card key={doc.title}>
                  <CardContent className="p-5">
                    <h3 className="mb-1 font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
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
