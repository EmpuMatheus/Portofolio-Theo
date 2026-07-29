export default function AmbientGlow({ color, position, size = 600, opacity = 0.15, className = '' }) {
  return (
    <div
      className={`pointer-events-none fixed ${className}`}
      style={{
        width: size,
        height: size,
        position: 'absolute',
        ...position,
        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        opacity,
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
