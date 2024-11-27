'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isPointer =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      setIsHovering(!!isPointer)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const springConfigInner = { 
    type: 'spring', 
    mass: 0.2,
    stiffness: 1000,
    damping: 28,
    restDelta: 0.001
  }

  const springConfigOuter = { 
    type: 'spring', 
    mass: 0.4,
    stiffness: 800,
    damping: 35,
    restDelta: 0.001
  }

  return (
    <>
      {/* Outer Ring with Inner Dot */}
      <motion.div
        className={clsx(
          'pointer-events-none fixed z-40 rounded-full border-2 border-primary-500 mix-blend-difference',
          'h-8 w-8',
          'flex items-center justify-center'
        )}
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
        }}
        animate={{
          scale: isClicking ? 1.2 : isHovering ? 2.2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
          borderWidth: isHovering ? '1px' : '2px',
        }}
        transition={springConfigOuter}
      >
        {/* Inner Dot */}
        <motion.div
          className={clsx(
            'rounded-full bg-primary-500 mix-blend-difference',
            'h-3 w-3'
          )}
          animate={{
            scale: isClicking ? 0.8 : 1,
            opacity: isHovering ? 0 : 0.8,
          }}
          transition={springConfigInner}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor 