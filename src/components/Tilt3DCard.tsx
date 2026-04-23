import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
  gloss?: boolean
  /** Border radius applied to every wrapper layer so no square edges appear on hover. Default: 24 */
  radius?: number | string
}

/**
 * Wraps any card in an interactive 3D perspective tilt that tracks the mouse.
 * The radius prop must match the inner card's border-radius so the wrapper
 * never shows a square outline on hover.
 */
export function Tilt3DCard({ children, className, style, intensity = 10, gloss = true, radius = 24 }: Tilt3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const xRaw = useMotionValue(0)
  const yRaw = useMotionValue(0)

  const rotateX = useSpring(useTransform(yRaw, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 240, damping: 28,
  })
  const rotateY = useSpring(useTransform(xRaw, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 240, damping: 28,
  })
  const scale = useSpring(1, { stiffness: 240, damping: 28 })
  const glossX = useMotionValue('50%')
  const glossY = useMotionValue('0%')

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top)  / rect.height - 0.5
    xRaw.set(nx)
    yRaw.set(ny)
    scale.set(1.025)
    if (gloss) {
      glossX.set(`${((nx + 0.5) * 100).toFixed(0)}%`)
      glossY.set(`${((ny + 0.5) * 100).toFixed(0)}%`)
    }
  }

  function onMouseLeave() {
    xRaw.set(0)
    yRaw.set(0)
    scale.set(1)
    glossX.set('50%')
    glossY.set('0%')
  }

  return (
    // Both wrapper layers get the same border-radius as the inner card —
    // this prevents the browser from drawing a square hover/focus outline.
    <div
      ref={ref}
      className="ff-3d-parent"
      style={{ height: '100%', borderRadius: radius, overflow: 'hidden' }}
    >
      <motion.div
        className={`ff-tilt ${className ?? ''}`}
        style={{
          ...style,
          rotateX,
          rotateY,
          scale,
          height: '100%',
          borderRadius: radius,
          overflow: 'hidden',
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
        {/* Specular gloss — follows cursor */}
        {gloss && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: radius,
              pointerEvents: 'none',
              zIndex: 10,
              background: useTransform(
                [glossX, glossY],
                ([gx, gy]) =>
                  `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.18) 0%, transparent 60%)`,
              ),
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
