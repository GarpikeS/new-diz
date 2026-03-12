'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { plots } from '@/lib/data';
import Link from 'next/link';

// Dynamic import for Leaflet (client-side only)
import dynamic from 'next/dynamic';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Polygon = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polygon),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

// Координаты центра индустриального парка (Красноярский край)
const PARK_CENTER: [number, number] = [56.0153, 92.8932];
const PARK_ZOOM = 15;

// Координаты участков (полигоны)
const plotPolygons: Record<string, [number, number][]> = {
  '1': [
    [56.0180, 92.8880],
    [56.0180, 92.8920],
    [56.0165, 92.8920],
    [56.0165, 92.8880],
  ],
  '2': [
    [56.0180, 92.8925],
    [56.0180, 92.8965],
    [56.0165, 92.8965],
    [56.0165, 92.8925],
  ],
  '3': [
    [56.0160, 92.8880],
    [56.0160, 92.8920],
    [56.0145, 92.8920],
    [56.0145, 92.8880],
  ],
  '4': [
    [56.0160, 92.8925],
    [56.0160, 92.8965],
    [56.0145, 92.8965],
    [56.0145, 92.8925],
  ],
  '5': [
    [56.0140, 92.8880],
    [56.0140, 92.8940],
    [56.0125, 92.8940],
    [56.0125, 92.8880],
  ],
  '6': [
    [56.0140, 92.8945],
    [56.0140, 92.8975],
    [56.0125, 92.8975],
    [56.0125, 92.8945],
  ],
};

// Инфраструктурные объекты
const infrastructureMarkers = [
  { position: [56.0170, 92.8850] as [number, number], name: 'КПП', type: 'entrance' },
  { position: [56.0155, 92.8975] as [number, number], name: 'Подстанция 110кВ', type: 'power' },
  { position: [56.0135, 92.8970] as [number, number], name: 'Газораспределительный пункт', type: 'gas' },
  { position: [56.0120, 92.8900] as [number, number], name: 'Очистные сооружения', type: 'water' },
];

const statusColors: Record<string, string> = {
  available: '#22c55e',
  reserved: '#f59e0b',
  occupied: '#ef4444',
};

const statusLabels: Record<string, string> = {
  available: 'Свободен',
  reserved: 'Бронь',
  occupied: 'Занят',
};

export function TerritoryMap() {
  const [mounted, setMounted] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPlots = filter
    ? plots.filter((p) => p.status === filter)
    : plots;

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Интерактивная карта территории</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[500px] bg-muted animate-pulse rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Загрузка карты...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle>Интерактивная карта территории</CardTitle>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filter === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(null)}
            >
              Все
            </Button>
            <Button
              variant={filter === 'available' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('available')}
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              Свободные
            </Button>
            <Button
              variant={filter === 'reserved' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('reserved')}
              className="border-amber-500 text-amber-600 hover:bg-amber-50"
            >
              В брони
            </Button>
            <Button
              variant={filter === 'occupied' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('occupied')}
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              Занятые
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] rounded-lg overflow-hidden border">
          <MapContainer
            center={PARK_CENTER}
            zoom={PARK_ZOOM}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Участки */}
            {filteredPlots.map((plot) => {
              const coordinates = plotPolygons[plot.id];
              if (!coordinates) return null;

              return (
                <Polygon
                  key={plot.id}
                  positions={coordinates}
                  pathOptions={{
                    color: statusColors[plot.status],
                    fillColor: statusColors[plot.status],
                    fillOpacity: selectedPlot === plot.id ? 0.6 : 0.3,
                    weight: selectedPlot === plot.id ? 3 : 2,
                  }}
                  eventHandlers={{
                    click: () => setSelectedPlot(plot.id),
                    mouseover: (e) => {
                      e.target.setStyle({ fillOpacity: 0.5 });
                    },
                    mouseout: (e) => {
                      e.target.setStyle({
                        fillOpacity: selectedPlot === plot.id ? 0.6 : 0.3,
                      });
                    },
                  }}
                >
                  <Popup>
                    <div className="min-w-[200px]">
                      <h3 className="font-semibold text-lg">{plot.title}</h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <span className="text-muted-foreground">Площадь:</span>{' '}
                          {plot.area.toLocaleString()} м²
                        </p>
                        <p>
                          <span className="text-muted-foreground">Цена:</span>{' '}
                          {plot.price.toLocaleString()} ₽/м²
                        </p>
                        <p>
                          <span className="text-muted-foreground">Статус:</span>{' '}
                          <span
                            style={{ color: statusColors[plot.status] }}
                            className="font-medium"
                          >
                            {statusLabels[plot.status]}
                          </span>
                        </p>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {plot.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/plots/${plot.id}`}>
                        <Button size="sm" className="mt-3 w-full">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </Popup>
                </Polygon>
              );
            })}
          </MapContainer>
        </div>

        {/* Легенда */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500" />
            <span>Свободен</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500" />
            <span>В брони</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500" />
            <span>Занят</span>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{plots.length}</div>
            <div className="text-sm text-muted-foreground">Всего участков</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {plots.filter((p) => p.status === 'available').length}
            </div>
            <div className="text-sm text-muted-foreground">Свободно</div>
          </div>
          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <div className="text-2xl font-bold text-amber-600">
              {plots.filter((p) => p.status === 'reserved').length}
            </div>
            <div className="text-sm text-muted-foreground">В брони</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {plots.filter((p) => p.status === 'occupied').length}
            </div>
            <div className="text-sm text-muted-foreground">Занято</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
