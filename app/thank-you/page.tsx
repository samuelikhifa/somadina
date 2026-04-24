'use client'

import {
  Heart, Shield, Sparkles, BookOpen, CheckCircle,
  ArrowRight, AlertTriangle, MessageCircle, Mail
} from 'lucide-react'
import ScrollAnimate from '../components/scroll-animation'

const WHATSAPP_NUMBER = '+2348111839490'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fdf6ee]">
      {/* Hook Bar */}
      <div className="bg-[#2b1a10] text-[#fdf6ee] py-2.5 px-4 text-center text-sm">
        <p className="max-w-3xl mx-auto">
          Your purchase is confirmed. Welcome to your new beginning.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ee] via-[#f5e6d0] to-[#fdf6ee]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollAnimate>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b1a10] leading-tight tracking-tight mb-6">
              You&apos;re In & Your Guide Is Ready!!!
            </h1>
            <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed mb-8">
              Thank you for your purchase. You&apos;ve just taken a quiet but powerful step toward feeling like yourself again… more confident, more comfortable, and more connected.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-[#2b1a10]/70">
              {[
                { icon: Shield, text: '100% Private' },
                { icon: BookOpen, text: 'Instant Access' },
                { icon: CheckCircle, text: 'You Made the Right Choice' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#c9973a]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* How to Access Your E-book */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Next Step</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                How to Access Your E-book
              </h2>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed mb-8">
                Your e-book has been sent to your email.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="bg-white/70 rounded-2xl px-6 md:px-8 py-8 space-y-4" style={{ boxShadow: 'var(--shadow-md)' }}>
              {[
                'Please check your inbox now',
                'If you don&apos;t see it, check your spam or promotions folder',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#fdf6ee] rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <ArrowRight className="w-5 h-5 text-[#c9973a] flex-shrink-0" />
                  <p className="text-[#2b1a10]/80 text-sm md:text-base">{item}</p>
                </div>
              ))}
              <p className="text-[#2b1a10]/60 text-sm md:text-base mt-6 pt-4 border-t border-[#e8b4a0]/20">
                If you still can&apos;t find it, don&apos;t worry — contact us and we&apos;ll help you right away.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* A Quick Note */}
      <section className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#b5534e] font-semibold text-sm uppercase tracking-wider mb-3">A Quick Note</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                Before You Go
              </h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="bg-white/70 rounded-2xl px-6 md:px-10 py-8 md:py-10 space-y-5 text-[#2b1a10]/75 text-sm md:text-base leading-relaxed" style={{ boxShadow: 'var(--shadow-md)' }}>
              <p>
                Many women who got this guide felt one thing:
              </p>
              <blockquote className="border-l-4 border-[#b5534e] pl-4 italic text-[#2b1a10]">
                I wish I had someone to gently guide me step by step…
              </blockquote>
              <p>
                Because reading is helpful… but getting consistent healthy tips, reminders and realistic simple actions you can use is where the real transformation happens.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Private Support</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                Optional But Highly Recommended
              </h2>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed">
                If you would like extra support, simple tips, and quiet guidance, you can join our private WhatsApp list.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="bg-white/70 rounded-2xl px-6 md:px-8 py-8 space-y-6" style={{ boxShadow: 'var(--shadow-md)' }}>
              <div className="bg-[#f5e6d0]/60 rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <p className="text-[#2b1a10]/80 text-sm md:text-base italic">
                  Most women find the WhatsApp support more helpful because it&apos;s simple and feels more personal.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-[#2b1a10] mb-4">What You&apos;ll Receive:</h3>
                <div className="space-y-3">
                  {[
                    'Gentle weekly tips',
                    'Simple steps you can follow at your own pace',
                    'Occasional answers to common questions',
                    'An opportunity to interact personally with me',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                      <p className="text-[#2b1a10]/80 text-sm md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2b1a10] rounded-xl px-5 py-4">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                  <h3 className="font-display font-bold text-[#fdf6ee] text-sm md:text-base">It Is Important I Say This:</h3>
                </div>
                <ul className="space-y-2 text-[#fdf6ee]/80 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9973a] mt-1">•</span>
                    <span>This is NOT a group</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9973a] mt-1">•</span>
                    <span>Nobody will see your name or number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9973a] mt-1">•</span>
                    <span>It&apos;s completely private — just like a personal message</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-bold text-[#2b1a10] mb-4">How to Join</h3>
                <p className="text-[#2b1a10]/70 text-sm md:text-base mb-4">
                  Click the button below and send DESIRED. You&apos;ll be added to receive private guidance.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=DESIRED`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Join Private WhatsApp Support</span>
                </a>
                <p className="text-[#2b1a10]/50 text-xs mt-3">
                  Tap the button — it opens WhatsApp and sends the message automatically.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Email Section */}
      <section className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Want Extra Tips by Email Too?</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                Read Quietly in Your Own Time
              </h2>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed mb-8">
                Some women prefer this. If that&apos;s you, you can receive:
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="space-y-4 mb-8">
              {[
                'Helpful insights',
                'Extra tips not in the book',
                'Occasional updates',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                  <p className="text-[#2b1a10]/80 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/70 rounded-2xl px-6 md:px-8 py-8" style={{ boxShadow: 'var(--shadow-md)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-[#c9973a]" />
                <label className="font-display font-bold text-[#2b1a10] text-sm md:text-base">
                  Enter your best email below:
                </label>
              </div>

              {/* MAILCHIMP EMBED CODE - INSERT HERE */}

              <div id="mc_embed_signup">
                {/* MAILCHIMP EMBED */}
                {/* MAILCHIMP EMBED */}
                <form
                  action="https://johnpaulsomyuzoigwe.us15.list-manage.com/subscribe/post?u=d29fa440d9d57c83a13481e06&id=f151f264a3&f_id=004088e0f0"
                  method="post"
                  target="_blank"
                  className="space-y-3"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="yourname@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e8d4b8] bg-[#fdf6ee] text-[#2b1a10] text-sm placeholder-[#2b1a10]/35 focus:outline-none focus:ring-2 focus:ring-[#c9973a]/30 focus:border-[#c9973a]"
                  />
                  {/* Anti-bot field — do not remove */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_d29fa440d9d57c83a13481e06_f151f264a3" tabIndex={-1} defaultValue="" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#b5534e', boxShadow: '0 4px 15px rgba(181,83,78,0.25)' }}
                  >
                    Subscribe — Send Me the Tips
                  </button>
                </form>
                {/* END MAILCHIMP EMBED */}
                {/* END MAILCHIMP EMBED */}
              </div>


              <div className="flex items-start gap-2 mt-6 pt-4 border-t border-[#e8b4a0]/20">
                <Shield className="w-4 h-4 text-[#c9973a] flex-shrink-0 mt-0.5" />
                <p className="text-[#2b1a10]/50 text-xs">
                  Your information is 100% private. We never share or sell it.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-20 px-4 bg-[#2b1a10]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate>
            <Heart className="w-10 h-10 mx-auto mb-4 text-[#c9973a] fill-[#c9973a]" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#fdf6ee] tracking-tight mb-4">
              Before You Leave…
            </h2>
            <p className="text-[#fdf6ee]/70 text-base md:text-lg leading-relaxed mb-10">
              Take your time with the guide. There is no pressure. Even small steps can bring real change.
            </p>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                { icon: Heart, text: 'You deserve to feel comfortable in your body' },
                { icon: Sparkles, text: 'You deserve to feel confident again' },
                { icon: BookOpen, text: 'You deserve to feel connected in your relationship' },
              ].map((item, i) => (
                <div key={i} className="bg-[#fdf6ee]/10 rounded-xl p-5 md:p-6 hover:bg-[#fdf6ee]/15 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#c9973a]/20 flex items-center justify-center mb-3 mx-auto">
                    <item.icon className="w-5 h-5 text-[#c9973a]" />
                  </div>
                  <p className="text-[#fdf6ee]/90 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={200}>
            <p className="text-[#fdf6ee]/60 text-sm md:text-base italic">
              We&apos;re here quietly, whenever you need support.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1a0f06] text-center">
        <p className="text-[#fdf6ee]/30 text-xs">
          © 2026 All Rights Reserved. This product is sold through Selar.
        </p>
      </footer>
    </main>
  )
}
