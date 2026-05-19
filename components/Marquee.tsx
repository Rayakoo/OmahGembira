'use client'

interface Props {
  items: { value: string; label: string; color: string }[]
}

export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-48 p-5 rounded-2xl bg-surface/80 backdrop-blur-sm text-center"
          >
            <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
            <div className="text-xs text-foreground/50 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
