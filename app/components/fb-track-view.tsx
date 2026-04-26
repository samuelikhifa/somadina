'use client'

import { useEffect } from 'react'

export default function FBTrackView() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any)?.fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Intimacy Guide Landing Page',
        content_type: 'product',
        value: 4500,
        currency: 'NGN',
      })
    }
  }, [])

  return null
}
