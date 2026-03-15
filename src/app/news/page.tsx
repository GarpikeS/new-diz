import { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { news } from '@/lib/data'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Новости',
  description:
    'Новости индустриального парка Красный Яр. Развитие инфраструктуры, новые резиденты, события',
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const categories = Array.from(new Set(news.map((n) => n.category)))

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 text-primary-foreground lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Новости</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Следите за развитием парка, узнавайте о новых резидентах и возможностях
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Категории:</span>
              {categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {sortedNews.map((item, index) => (
                <Card
                  key={item.id}
                  className={index === 0 ? 'lg:col-span-2' : ''}
                >
                  <div
                    className={`aspect-video bg-gradient-to-br from-primary/10 to-primary/5 ${
                      index === 0 ? 'lg:aspect-[21/9]' : ''
                    }`}
                  />
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="outline">{item.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(item.date)}
                      </span>
                    </div>

                    <h2
                      className={`mb-3 font-semibold ${
                        index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}
                    >
                      <Link
                        href={`/news/${item.id}`}
                        className="hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    </h2>

                    <p className="mb-4 text-muted-foreground">{item.excerpt}</p>

                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      Читать далее
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe placeholder */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4">Подпишитесь на новости</h2>
              <p className="mb-6 text-muted-foreground">
                Получайте информацию о новых участках, акциях и событиях парка
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="h-11 rounded-md border bg-background px-4 sm:w-72"
                />
                <button className="h-11 rounded-md bg-accent px-6 font-medium text-accent-foreground hover:bg-accent/90">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
