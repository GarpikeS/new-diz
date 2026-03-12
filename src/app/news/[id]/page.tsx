import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { news } from '@/lib/data'
import { ArrowLeft, ArrowRight, Calendar, Share2 } from 'lucide-react'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return news.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = news.find((n) => n.id === id)

  if (!item) {
    return { title: 'Новость не найдена' }
  }

  return {
    title: item.title,
    description: item.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params
  const item = news.find((n) => n.id === id)

  if (!item) {
    notFound()
  }

  const otherNews = news.filter((n) => n.id !== id).slice(0, 2)

  return (
    <>
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/news" className="hover:text-foreground">
                Новости
              </Link>
              <span>/</span>
              <span className="line-clamp-1 text-foreground">{item.title}</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Button variant="ghost" size="sm" className="mb-6" asChild>
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Все новости
                </Link>
              </Button>

              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(item.date)}
                  </span>
                </div>
                <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{item.title}</h1>
                <p className="text-lg text-muted-foreground">{item.excerpt}</p>
              </div>

              {/* Image */}
              <div className="mb-8 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5" />

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {item.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 flex items-center justify-between border-t pt-6">
                <span className="text-sm text-muted-foreground">Поделиться:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Other news */}
        {otherNews.length > 0 && (
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-center">Другие новости</h2>

              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                {otherNews.map((n) => (
                  <Card key={n.id}>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5" />
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {n.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(n.date)}
                        </span>
                      </div>
                      <h3 className="mb-2 font-semibold">
                        <Link href={`/news/${n.id}`} className="hover:text-accent">
                          {n.title}
                        </Link>
                      </h3>
                      <Link
                        href={`/news/${n.id}`}
                        className="inline-flex items-center text-sm text-accent hover:underline"
                      >
                        Читать
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
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
