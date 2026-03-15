import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { company } from '@/lib/data'
import { Briefcase, Clock, MapPin, Phone, Mail, Users, Building2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Вакансии',
  description:
    'Вакансии в промышленном парке Красный Яр. Работа в управляющей компании и у резидентов парка',
}

const vacancies = [
  {
    id: '1',
    title: 'Инженер по эксплуатации',
    department: 'Техническая служба',
    type: 'Полная занятость',
    salary: 'от 80 000 ₽',
    description: 'Обслуживание инженерных систем промышленного парка, контроль работы оборудования, взаимодействие с подрядчиками.',
    requirements: [
      'Высшее техническое образование',
      'Опыт работы от 3 лет',
      'Знание систем электроснабжения, вентиляции, водоснабжения',
    ],
  },
  {
    id: '2',
    title: 'Менеджер по работе с резидентами',
    department: 'Коммерческий отдел',
    type: 'Полная занятость',
    salary: 'от 70 000 ₽ + бонусы',
    description: 'Сопровождение резидентов парка, решение операционных вопросов, развитие клиентских отношений.',
    requirements: [
      'Высшее образование',
      'Опыт в B2B продажах или клиентском сервисе',
      'Коммуникабельность, ответственность',
    ],
  },
  {
    id: '3',
    title: 'Электрик',
    department: 'Техническая служба',
    type: 'Полная занятость',
    salary: 'от 60 000 ₽',
    description: 'Обслуживание электросетей парка, устранение неисправностей, плановые работы.',
    requirements: [
      'Группа допуска от III',
      'Опыт работы от 2 лет',
      'Умение читать электросхемы',
    ],
  },
]

const benefits = [
  { icon: Clock, text: 'Официальное трудоустройство' },
  { icon: Building2, text: 'Стабильная компания' },
  { icon: Users, text: 'Дружный коллектив' },
  { icon: Zap, text: 'Возможности роста' },
]

export default function VacanciesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-8 text-primary-foreground lg:py-10">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex items-center gap-3">
              <h1 className="mb-0">Вакансии</h1>
              <Badge variant="outline" className="border-accent text-accent">
                {vacancies.length} открытых
              </Badge>
            </div>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Присоединяйтесь к команде промышленного парка «Красный Яр».
              Мы предлагаем стабильную работу и возможности для профессионального роста
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {benefits.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies List */}
        <section className="py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Открытые вакансии</h2>

            <div className="space-y-4">
              {vacancies.map((vacancy) => (
                <Card key={vacancy.id}>
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="mb-2 text-xl">{vacancy.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{vacancy.department}</Badge>
                          <Badge variant="outline">{vacancy.type}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-accent">{vacancy.salary}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          Красноярск
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{vacancy.description}</p>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Требования:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {vacancy.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <a href={`mailto:${company.email}?subject=Отклик на вакансию: ${vacancy.title}`}>
                        Откликнуться
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* No suitable vacancy */}
        <section className="bg-muted py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <Briefcase className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h2 className="mb-4">Не нашли подходящую вакансию?</h2>
              <p className="mb-6 text-muted-foreground">
                Отправьте нам своё резюме — мы свяжемся с вами, когда появится подходящая позиция.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="outline" asChild>
                  <a href={`mailto:${company.email}?subject=Резюме`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {company.email}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {company.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Residents hiring */}
        <section className="border-t py-8 lg:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4">Вакансии у резидентов</h2>
              <p className="mb-6 text-muted-foreground">
                На территории парка работают 9 компаний-резидентов, которые также ищут сотрудников.
                Свяжитесь с нами, чтобы узнать об актуальных вакансиях у резидентов.
              </p>
              <Button asChild>
                <Link href="/residents">Посмотреть резидентов</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
