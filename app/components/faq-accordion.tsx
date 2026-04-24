'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is this guide only for married women?',
    a: 'No. If you’re a woman who feels disconnected from your desire or intimacy. Married, single, or in a relationship this guide is for you.',
  },
  {
    q: 'Will my partner know I bought this?',
    a: 'No. Your purchase is 100% private and discreet. No notifications, no surprises just for you.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Many women start noticing shifts in how they feel within days because the first change starts from within. The more you apply it, the deeper the results.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'If you follow the steps and don’t see a difference, you’re covered. There’s no risk, only the opportunity to feel like yourself again.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3 max-w-2xl mx-auto">
      {(faqs ?? []).map((faq: any, index: number) => (
        <div
          key={index}
          className="bg-white/70 rounded-xl overflow-hidden transition-all duration-200"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-white/50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-display font-semibold text-[#2b1a10] text-sm md:text-base">
              {faq?.q ?? ''}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#c9973a] flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-5 pb-4 text-[#2b1a10]/70 text-sm leading-relaxed">
              {faq?.a ?? ''}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
