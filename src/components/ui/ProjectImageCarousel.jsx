import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

export default function ProjectImageCarousel({
  images = [],
  projectName = '',
  autoplay = true,
  autoplayInterval = 5000,
  aspectRatio = '16 / 9',
}) {
  const total = images.length
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [failedImages, setFailedImages] = useState(() => new Set())

  const pointerStartX = useRef(null)
  const resumeTimer = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  const goTo = useCallback(
    (nextIndex) => {
      if (total === 0) return
      setIndex((current) => {
        const normalized = ((nextIndex % total) + total) % total
        setDirection(normalized === current ? direction : normalized > current ? 1 : -1)
        return normalized
      })
    },
    [total, direction]
  )

  const pauseForInteraction = useCallback(() => {
    setIsInteracting(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setIsInteracting(false), 6000)
  }, [])

  const handlePrev = useCallback(() => {
    pauseForInteraction()
    goTo(index - 1)
  }, [goTo, index, pauseForInteraction])

  const handleNext = useCallback(() => {
    pauseForInteraction()
    goTo(index + 1)
  }, [goTo, index, pauseForInteraction])

  const handleDot = useCallback(
    (dotIndex) => {
      pauseForInteraction()
      goTo(dotIndex)
    },
    [goTo, pauseForInteraction]
  )

  useEffect(() => {
    if (total <= 1 || !autoplay || isHovering || isInteracting || reducedMotion) return
    const id = setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % total)
    }, autoplayInterval)
    return () => clearInterval(id)
  }, [total, autoplay, autoplayInterval, isHovering, isInteracting, reducedMotion])

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }, [])

  const handleImageError = useCallback((src) => {
    setFailedImages((previous) => {
      if (previous.has(src)) return previous
      const next = new Set(previous)
      next.add(src)
      return next
    })
  }, [])

  const handlePointerDown = useCallback((event) => {
    if (event.pointerType === 'mouse') return
    pointerStartX.current = event.clientX
  }, [])

  const handlePointerUp = useCallback(
    (event) => {
      if (pointerStartX.current === null) return
      const deltaX = event.clientX - pointerStartX.current
      pointerStartX.current = null
      if (Math.abs(deltaX) < 40) return
      pauseForInteraction()
      goTo(deltaX > 0 ? index - 1 : index + 1)
    },
    [goTo, index, pauseForInteraction]
  )

  if (total === 0) return null

  const inactiveTranslate = direction >= 0 ? 'translate-x-4' : '-translate-x-4'

  return (
    <div
      className="rounded-lg border border-border-default bg-surface-primary overflow-hidden group-hover:border-green-bright/30 transition-colors duration-[250ms]"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectName} screenshots`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-default bg-surface-secondary/50">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-[11px] text-text-muted ml-2">
          {projectName}
        </span>
        {total > 1 && (
          <span className="font-mono text-[11px] text-text-muted ml-auto tabular-nums" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        )}
      </div>

      <div
        className="relative w-full bg-background-primary overflow-hidden select-none touch-pan-y"
        style={{ aspectRatio }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null
        }}
      >
        {images.map((image, i) => {
          const src = typeof image === 'string' ? image : image.src
          const alt =
            typeof image === 'string'
              ? `${projectName} application screenshot`
              : image.alt || `${projectName} application screenshot`
          const isActive = i === index
          const hasFailed = failedImages.has(src)

          return (
            <div
              key={src}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-[400ms] ease-out ${
                isActive
                  ? 'opacity-100 translate-x-0 z-10'
                  : `opacity-0 ${inactiveTranslate} z-0 pointer-events-none`
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!isActive}
            >
              {hasFailed ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-mono text-xs text-text-muted">
                    {projectName} screenshot unavailable
                  </span>
                </div>
              ) : (
                <img
                  src={src}
                  alt={alt}
                  loading={isActive ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  onError={() => handleImageError(src)}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          )
        })}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`Previous ${projectName} screenshot`}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full border border-border-default bg-background-primary/60 text-text-muted backdrop-blur-sm transition-colors duration-200 hover:bg-background-primary/90 hover:text-green-bright hover:border-green-bright/40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={`Next ${projectName} screenshot`}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full border border-border-default bg-background-primary/60 text-text-muted backdrop-blur-sm transition-colors duration-200 hover:bg-background-primary/90 hover:text-green-bright hover:border-green-bright/40"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2.5 py-3 border-t border-border-default bg-surface-secondary/30">
          {images.map((image, i) => {
            const key = typeof image === 'string' ? image : image.src
            const isActive = i === index
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleDot(i)}
                aria-label={`View ${projectName} screenshot ${i + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className="group/dot p-1 -m-1 leading-none"
              >
                <span
                  className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'bg-green-bright'
                      : 'bg-text-muted/40 group-hover/dot:bg-text-muted'
                  }`}
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
