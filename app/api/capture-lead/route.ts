export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, whatsapp } = body ?? {}

    if (!email && !whatsapp) {
      return NextResponse.json(
        { error: 'Please provide an email or WhatsApp number' },
        { status: 400 }
      )
    }

    // Save to database (unchanged)
    const lead = await prisma.lead.create({
      data: {
        email: email ?? null,
        whatsapp: whatsapp ?? null,
        source: 'landing_page',
      },
    })

    // Also send to Mailchimp if email provided
    if (email) {
      try {
        await fetch(
          'https://us17.api.mailchimp.com/3.0/lists/f151f264a3/members=',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // API key format: 'anystring:us17-YOUR_API_KEY'
              Authorization: 'Basic ' + Buffer.from('anystring:' + process.env.MAILCHIMP_API_KEY).toString('base64'),
            },
            body: JSON.stringify({
              email_address: email,
              status: 'subscribed',
              tags: ['landing_page'],
            }),
          }
        )
      } catch (mcErr) {
        // Don't fail the whole request if Mailchimp fails
        console.error('Mailchimp sync error:', mcErr)
      }
    }

    return NextResponse.json({ success: true, id: lead?.id })
  } catch (error: any) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}