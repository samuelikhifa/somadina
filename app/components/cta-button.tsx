'use client'

import { ShoppingCart } from 'lucide-react'

interface CTAButtonProps {
  text?: string
  className?: string
  size?: 'default' | 'large'
  url?: string
}

export default function CTAButton({ text, className, size, url }: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any)?.fbq) {
      (window as any).fbq('track', 'InitiateCheckout')
    }
    window.open(url ?? 'https://selar.co/YOUR_PRODUCT_LINK_HERE', '_blank')
  }

  const sizeClasses = size === 'large'
    ? 'py-3.5 px-5 text-base md:py-4 md:px-8 md:text-lg'
    : 'py-3 px-5 text-sm md:py-3.5 md:px-6 md:text-base'

  return (
    <button
      onClick={handleClick}
      className={`bg-[#b5534e] hover:bg-[#a0443f] text-white font-bold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center animate-pulse-glow ${sizeClasses} ${className ?? ''}`}
    >
      <span className="inline-flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        <span className="leading-tight">{text ?? 'Yes! I Want This Guide →'}</span>
      </span>
    </button>
  )
}