import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://localhost:3000'),
  title: 'Feel Desired, Wet & Excited Again After 40 | Private Guide for Women',
  description: 'A private, step-by-step guide to help African women over 40 reconnect with their body, enjoy intimacy again, and bring back the spark in their relationship. Reclaim your desire and feel alive again.',
  keywords: ['intimacy after 40', 'relationship advice for women', 'rekindling passion', 'low libido women over 40', 'intimacy guide', 'desire after menopause', 'African women intimacy', 'relationship ebook', 'sexual wellness women', 'feel desired again'],
  openGraph: {
    title: 'How to Feel Desired, Wet & Excited Again After 40',
    description: 'A private, step-by-step guide to help you reconnect with your body, enjoy intimacy again, and bring back the spark in your relationship.',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Feel Desired, Wet & Excited Again After 40',
    description: 'A private, step-by-step guide to help you reconnect with your body, enjoy intimacy again, and bring back the spark.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '27150291787921749');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=27150291787921749&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'How to Feel Desired, Wet & Excited Again After 40',
              description: 'A private, step-by-step guide to help you reconnect with your body, enjoy intimacy again, and bring back the spark in your relationship.',
              offers: {
                '@type': 'Offer',
                price: '9500',
                priceCurrency: 'NGN',
                availability: 'https://schema.org/InStock',
              },
              author: {
                '@type': 'Person',
                name: 'The Author',
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
