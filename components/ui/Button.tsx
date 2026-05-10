// components/ui/Button.tsx — Reusable CTA button variants

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-violet-600 text-white hover:from-brand-500 hover:to-violet-500 shadow-lg hover:shadow-brand-500/30',
  outline:
    'border border-brand-500/50 text-brand-300 hover:bg-brand-500/10 hover:border-brand-400',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 rounded-xl font-semibold font-body
    transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer
    ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>{children}</Link>
    )
  }

  return (
    <button onClick={onClick} className={base}>{children}</button>
  )
}
