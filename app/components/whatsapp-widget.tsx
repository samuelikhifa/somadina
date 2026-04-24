'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const whatsappNumber = '+2348111839490' // Replace with actual number
  const message = encodeURIComponent('Hi! I\'m interested in the intimacy guide for women over 40.')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
