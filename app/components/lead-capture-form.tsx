'use client'

import { useState } from 'react'
import { Mail, Phone, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function LeadCaptureForm() {
  const [email, setEmail] = useState('')
  // const [whatsapp, setWhatsapp] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email ) {
      toast.error('Please enter your email ')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || null, }),
      })

      if (res?.ok) {
        setSubmitted(true)
        toast.success('Thank you! Check below to get your guide now.')
        // Track FB event
        if (typeof window !== 'undefined' && (window as any)?.fbq) {
          (window as any).fbq('track', 'Lead')
        }
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (err: any) {
      console.error('Form submission error:', err)
      toast.error('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#2b1a10] text-[#fdf6ee] rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 mx-auto mb-3 text-[#c9973a]" />
        <p className="text-lg font-display font-bold mb-2">You&apos;re In!</p>
        <p className="text-sm opacity-90">Scroll down to grab your guide at the special price below.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm rounded-xl p-5 md:p-6 space-y-4">
      <p className="text-center font-display font-bold text-[#2b1a10] text-lg">
      Sign up to <span className="text-[#b5534e]">unlock exclusive content</span>and upcoming offers
      </p>
      <p className="text-center text-sm text-[#2b1a10]/70">
        Enter your details to unlock the discounted price
      </p>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9973a]" />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value ?? '')}
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#e8b4a0]/50 bg-white text-[#2b1a10] placeholder:text-[#2b1a10]/40 focus:outline-none focus:ring-2 focus:ring-[#c9973a]/50 text-sm"
        />
      </div>
      {/* <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9973a]" />
        <input
          type="tel"
          placeholder="WhatsApp number (e.g. +234...)"
          value={whatsapp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWhatsapp(e?.target?.value ?? '')}
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#e8b4a0]/50 bg-white text-[#2b1a10] placeholder:text-[#2b1a10]/40 focus:outline-none focus:ring-2 focus:ring-[#c9973a]/50 text-sm"
        />
      </div> */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#c9973a] hover:bg-[#b5862e] text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Join Now<ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-[#2b1a10]/50">
        🔒 100% private. We never share your information.
      </p>
    </form>
  )
}
