'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Loader2, Send } from 'lucide-react'

const formSchema = z.object({
  company: z.string().min(2, 'Введите название компании'),
  name: z.string().min(2, 'Введите ваше имя'),
  phone: z
    .string()
    .min(10, 'Введите корректный номер телефона')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Некорректный формат телефона'),
  email: z.string().email('Введите корректный email').optional().or(z.literal('')),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  title?: string
  description?: string
  variant?: 'default' | 'card'
  plotId?: string
}

export function ContactForm({
  title = 'Оставить заявку',
  description = 'Заполните форму и наш менеджер свяжется с вами в течение 15 минут',
  variant = 'default',
  plotId,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Имитация отправки (заменить на реальный API)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form submitted:', { ...data, plotId })

    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Сбросить состояние через 5 секунд
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const formContent = (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
          <h3 className="mb-2 text-xl font-semibold">Заявка отправлена!</h3>
          <p className="text-muted-foreground">
            Наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">
                Компания <span className="text-destructive">*</span>
              </Label>
              <Input
                id="company"
                placeholder="ООО «Ваша компания»"
                {...register('company')}
                aria-invalid={errors.company ? 'true' : 'false'}
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">
                Имя <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">
                Телефон <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                {...register('phone')}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ivan@company.ru"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              placeholder="Опишите ваши требования к площадке..."
              rows={4}
              {...register('message')}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/privacy" className="underline hover:text-foreground">
                политикой конфиденциальности
              </a>
            </p>
            <Button type="submit" disabled={isSubmitting} className="sm:ml-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </>
  )

  if (variant === 'card') {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{formContent}</CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      {formContent}
    </div>
  )
}
