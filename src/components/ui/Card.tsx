import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = 'bg-white/5 backdrop-blur-sm rounded-lg border border-white/10'
  const hoverClasses = hover ? 'hover:transform hover:scale-105 transition-all duration-300' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}
