'use client'

import { useEffect, useState, useMemo } from 'react'
import { Car, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import L from 'leaflet'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Координаты промпарка (ул. Кутузова, 1)
const PARK_LOCATION: [number, number] = [55.996873, 92.987966]
const YANDEX_MAPS_URL = 'https://yandex.com/maps/-/CPBKQNnN'

const routes = [
  {
    icon: Car,
    title: 'На автомобиле',
    description: 'Съезд с трассы М-53 на ул. Кутузова. Время в пути от центра города — 25 минут.',
  },
  {
    icon: Plane,
    title: 'От аэропорта',
    description: 'Аэропорт Емельяново в 35 км. Время в пути — 40 минут.',
  },
]

export function LocationMap() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoIcon = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    return L.icon({
      iconUrl: '/logo.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    })
  }, [])

  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center">Где мы находимся</h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Info */}
          <div className="space-y-6">
            {/* Routes */}
            <div className="space-y-4">
              <h3 className="font-semibold">Как добраться</h3>
              {routes.map((route, index) => {
                const Icon = route.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="font-medium">{route.title}</h4>
                      <p className="text-sm text-muted-foreground">{route.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Address */}
            <div className="pt-4 border-t">
              <p className="text-muted-foreground mb-4">
                660050, г. Красноярск, ул. Кутузова, 1, стр. 37
              </p>
              <Button asChild>
                <a href={YANDEX_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Открыть в Яндекс Картах
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] overflow-hidden rounded-xl border lg:h-auto lg:min-h-[400px]">
            {mounted ? (
              <MapContainer
                center={PARK_LOCATION}
                zoom={14}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
                attributionControl={false}
              >
                <TileLayer
                  attribution=""
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={PARK_LOCATION} icon={logoIcon}>
                  <Popup>
                    <div className="text-center">
                      <strong>Промпарк Красный Яр</strong>
                      <br />
                      ул. Кутузова, 1, стр. 37
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <div className="flex h-full items-center justify-center bg-muted">
                <span className="text-muted-foreground">Загрузка карты...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
