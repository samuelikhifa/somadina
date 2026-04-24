import Image from 'next/image'
import {
  Heart, Shield, Sparkles, BookOpen, Star, CheckCircle,
  Gift, Lock, Users, Flame, ArrowRight, Eye, Zap, Crown,
  Apple, Sun, MessageCircle
} from 'lucide-react'
import LeadCaptureForm from './components/lead-capture-form'
import FAQAccordion from './components/faq-accordion'
import WhatsAppWidget from './components/whatsapp-widget'
import CTAButton from './components/cta-button'
import ScrollAnimate from './components/scroll-animation'
import CountdownTimer from './components/countdown-timer'
import FBTrackView from './components/fb-track-view'

const SELAR_URL = 'https://selar.com/desired'
const HERO_IMAGE = 'https://cdn.abacus.ai/images/f9e6c5ae-3ce4-46cc-b4aa-2f37a7c96dd7.png'
const BOOK_COVER = '/images/book-cover.png'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fdf6ee]">
      <WhatsAppWidget />
      <FBTrackView />

      {/* Hook Bar */}
      <div className="bg-[#2b1a10] text-[#fdf6ee] py-2.5 px-4 text-center text-sm">
        <p className="max-w-3xl mx-auto">
          🔥 <span className="text-[#c9973a] font-semibold">Over 1,000+ women</span> have already reclaimed their intimacy.
          Will you be next?
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ee] via-[#f5e6d0] to-[#fdf6ee]" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Copy */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#c9973a]/10 text-[#c9973a] px-4 py-1.5 rounded-full text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                The Book Every Woman Over 40 Needs
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b1a10] leading-tight tracking-tight">
                How to Feel{' '}
                <span className="text-[#b5534e]">Desired, Wet & Excited</span>{' '}
                Again After 40
              </h1>
              <p className="text-[#2b1a10]/80 text-base md:text-lg font-semibold">
                Even If You&apos;ve Lost Your Drive and Your Partner Is Pulling Away
              </p>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed">
                A simple, private guide to help you feel comfortable in your body again,
                enjoy intimacy, and bring back connection in your relationship.
              </p>
              <p className="text-[#b5534e] font-semibold text-sm md:text-base">
                No shame. No pressure. Just real help that works.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-[#2b1a10]/60">
                {[
                  { icon: Lock, text: '100% Private' },
                  { icon: BookOpen, text: 'Instant Download' },
                  { icon: Shield, text: '30-Day Guarantee' },
                ].map((item: any, i: number) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <item.icon className="w-4 h-4 text-[#c9973a]" />
                    <span>{item?.text ?? ''}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <CTAButton size="large" url={SELAR_URL} />
              </div>
            </div>

            {/* Right: Book + Hero Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="relative w-56 md:w-72 aspect-[2/3] rounded-lg overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(43,26,16,0.25)' }}>
                  <Image
                    src={BOOK_COVER}
                    alt="E-book cover: How to Feel Desired, Wet and Excited Again After 40 - intimate guide for women"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 224px, 288px"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-[#b5534e] text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center text-center" style={{ boxShadow: '0 8px 20px rgba(181,83,78,0.3)' }}>
                  <span className="text-[10px] md:text-xs font-semibold leading-none">Only</span>
                  <span className="text-sm md:text-lg font-bold leading-none">₦4,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <ScrollAnimate>
        <div className="bg-[#2b1a10] py-6 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[#fdf6ee]">
            {[
              { num: '✔', label: 'Instant Download' },
              { num: '✔', label: '100% Private' },
              { num: '✔', label: 'Start Today' },
            ].map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-[#c9973a] font-bold text-xl md:text-2xl font-display">{stat?.num ?? ''}</div>
                <div className="text-xs text-[#fdf6ee]/60">{stat?.label ?? ''}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimate>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#b5534e] font-semibold text-sm uppercase tracking-wider mb-3">Does This Feel Like You?</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                You Used to Feel <span className="text-[#b5534e]">Alive</span>...
              </h2>
            </div>
          </ScrollAnimate>

          <div className="space-y-4">
            {[
              'You don\'t feel the same desire anymore',
              'Your body feels dry or uncomfortable',
              'You avoid closeness because it doesn\'t feel good',
              'Your partner seems distant or less interested',
              'You feel confused, worried, or even ashamed',
            ].map((pain: string, i: number) => (
              <ScrollAnimate key={i} delay={i * 80}>
                <div className="flex items-start gap-3 bg-white/50 rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <span className="text-[#b5534e] mt-0.5 text-lg">😔</span>
                  <p className="text-[#2b1a10]/80 text-sm md:text-base">{pain ?? ''}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Inner questions */}
          <ScrollAnimate delay={150}>
            <div className="mt-8 bg-[#f5e6d0]/60 rounded-xl px-6 py-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <p className="text-[#2b1a10]/70 text-sm md:text-base font-semibold mb-3">Sometimes you even ask yourself:</p>
              <ul className="space-y-2">
                {[
                  '"What is happening to me?"',
                  '"Am I getting too old for this?"',
                  '"Will things ever go back to normal?"',
                ].map((q: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-[#b5534e] text-sm md:text-base italic">
                    <span className="mt-0.5">💭</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          {/* You Are Not Alone */}
          <ScrollAnimate delay={200}>
            <div className="mt-10 text-center">
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#2b1a10] mb-4">
                You Are <span className="text-[#c9973a]">Not Alone</span>
              </h3>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed mb-4">
                Many women in their 40s, 50s, and 60s are going through this quietly —
                and frankly don&apos;t speak about it.
              </p>
              <p className="text-[#2b1a10]/80 text-base md:text-lg font-semibold">
                But the truth is: <span className="text-[#b5534e]">Nothing is wrong with you.</span>{' '}
                Your body just needs a new approach.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Relatable Story Section */}
      <section className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">A Story You May Recognise</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                I Know Exactly <span className="text-[#b5534e]">How You Feel</span>
              </h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="bg-white/70 rounded-2xl px-6 md:px-10 py-8 md:py-10 space-y-5 text-[#2b1a10]/75 text-sm md:text-base leading-relaxed" style={{ boxShadow: 'var(--shadow-md)' }}>
              <p>
                Night after night I used to lie awake wondering what happened to me — what happened
                to the woman who was <span className="text-[#2b1a10] font-semibold">wanted, passionate, sexy and alive.</span>
              </p>
              <p>
                Ever since I got into this menopause phase, my body changed. My mood, my drive —
                they disappeared. From sharing passionate moments with my husband to polite hugs,
                separate sides of the bed, awkward silences, routine discussions.
              </p>
              <p>
                I felt ashamed and unwanted. Some nights I would cry myself to sleep.
              </p>
              <p>
                But I wasn&apos;t going to settle for this — <span className="text-[#b5534e] font-semibold">definitely not at 44.</span> So I went
                into research, seeking solutions to my problem.
              </p>
              <p className="font-semibold text-[#2b1a10]">
                If you are reading this, it means I found a solution — and the fire is flaming
                hot in my bedroom. 🔥
              </p>
              <p>
                If I felt ashamed of my problem, I am sure many women feel so too.
                And <span className="text-[#b5534e] font-semibold">I see you and hear you.</span> You want to feel alive again?
                Everything I learnt and practised has been written specially for you.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={200}>
            <div className="mt-10 flex justify-center">
              <CTAButton size="large" url={SELAR_URL} />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">The Solution</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                Your Simple Step-by-Step Guide to{' '}
                <span className="text-[#b5534e]">Feeling Like Yourself Again</span>
              </h2>
              <p className="text-[#2b1a10]/70 text-base md:text-lg leading-relaxed">
                This guide was created to help you understand your body and gently bring
                things back — without stress or embarrassment.
              </p>
            </div>
          </ScrollAnimate>

          <div className="space-y-3 mb-10">
            {[
              'Why your body has changed (in simple terms)',
              'How to naturally improve comfort and wetness',
              'How to rebuild desire without forcing yourself',
              'How to feel confident and attractive again',
              'How to reconnect with your partner calmly',
              'A simple 30-day plan to guide you step by step',
            ].map((item: string, i: number) => (
              <ScrollAnimate key={i} delay={i * 80}>
                <div className="flex items-start gap-3 bg-white/60 rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                  <p className="text-[#2b1a10]/80 text-sm md:text-base">{item ?? ''}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* What Will Change For You */}
      <section className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">The Transformation</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                What Will <span className="text-[#c9973a]">Change</span> For You
              </h2>
              <p className="text-[#2b1a10]/70 text-base md:text-lg">Imagine if you could...</p>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Heart, title: 'Feel Comfortable Again', desc: 'Feel comfortable and relaxed in your body — no more tension, dryness, or dread around intimacy.' },
              { icon: Sparkles, title: 'Enjoy Closeness', desc: 'Enjoy closeness without pain or stress, and look forward to intimate moments again.' },
              { icon: Eye, title: 'Feel Confident & Attractive', desc: 'Feel confident and attractive again — and see yourself the way your partner used to.' },
              { icon: Flame, title: 'Stop Avoiding Intimacy', desc: 'Stop avoiding intimacy and start welcoming it as something beautiful and yours again.' },
              { icon: Users, title: 'Feel Emotionally Connected', desc: 'Feel emotionally connected again and bring that warmth and closeness back to your relationship.' },
              { icon: Zap, title: 'Stop Feeling Broken', desc: 'Stop feeling like something is wrong with you — because nothing is. You just needed the right guide.' },
            ].map((item: any, i: number) => (
              <ScrollAnimate key={i} delay={i * 100}>
                <div className="bg-white/70 rounded-xl p-5 md:p-6 hover:bg-white transition-colors duration-200" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <div className="w-10 h-10 rounded-lg bg-[#c9973a]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#c9973a]" />
                  </div>
                  <h3 className="font-display font-bold text-[#2b1a10] mb-2">{item?.title ?? ''}</h3>
                  <p className="text-sm text-[#2b1a10]/65 leading-relaxed">{item?.desc ?? ''}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate delay={300}>
            <div className="mt-10 text-center bg-white/60 rounded-2xl px-6 py-6" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <p className="text-[#2b1a10] text-base md:text-lg font-semibold leading-relaxed">
                This Is Not About Becoming Someone Else —{' '}
                <span className="text-[#b5534e]">it is simply about becoming yourself again.</span>
              </p>
              <p className="text-[#2b1a10]/65 text-sm md:text-base mt-2">
                Calm, confident, and comfortable in your own body.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* What's Inside the Guide */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Inside the Guide</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                Here&apos;s What You&apos;ll <span className="text-[#c9973a]">Discover</span> Inside
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: BookOpen, title: 'Understanding Your Body Again', desc: 'In simple terms — why things changed and what your body is telling you.' },
              { icon: Flame, title: 'Reigniting Your Desire', desc: 'Gentle, practical ways to wake up your natural drive — without pressure.' },
              { icon: Heart, title: 'Restoring Comfort & Wetness', desc: 'Practical steps that actually work to bring back comfort and sensitivity.' },
              { icon: Sparkles, title: 'Rebuilding Your Confidence', desc: 'Feel good about yourself again — your body, your beauty, your worth.' },
              { icon: Users, title: 'When He Pulls Away', desc: 'What to do calmly and confidently when your partner becomes distant.' },
              { icon: Zap, title: '30-Day Intimacy Comeback Plan', desc: 'A clear, step-by-step plan so you always know exactly what to do next.' },
            ].map((item: any, i: number) => (
              <ScrollAnimate key={i} delay={i * 100}>
                <div className="bg-white/70 rounded-xl p-5 md:p-6 hover:bg-white transition-colors duration-200" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <div className="w-10 h-10 rounded-lg bg-[#c9973a]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#c9973a]" />
                  </div>
                  <h3 className="font-display font-bold text-[#2b1a10] mb-2">{item?.title ?? ''}</h3>
                  <p className="text-sm text-[#2b1a10]/65 leading-relaxed">{item?.desc ?? ''}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="get-guide" className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-8">
              <p className="text-[#b5534e] font-semibold text-sm uppercase tracking-wider mb-3">Don&apos;t Miss Out</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-3">
                Ready to Feel <span className="text-[#b5534e]">Alive</span> Again?
              </h2>
              <p className="text-[#2b1a10]/60 text-sm">
                Join thousands of women who are quietly transforming their intimate lives
              </p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate delay={100}>
            <LeadCaptureForm />
          </ScrollAnimate>
        </div>
      </section>

      {/* Offer Stack */}
      <section className="py-16 md:py-20 px-4 bg-[#2b1a10]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimate>
            <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Complete Package</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#fdf6ee] tracking-tight mb-10">
              Everything You Get Today
            </h2>
          </ScrollAnimate>

          <div className="space-y-4 mb-10">
            {[
              { icon: BookOpen, title: 'The Complete Guide', value: '₦25,000', desc: 'Every technique, exercise, and secret — organized into easy daily steps including the 30-Day Intimacy Comeback Plan' },
              { icon: Apple, title: 'BONUS: Foods That Support Your Body & Desire', value: '₦10,000', desc: 'Simple, everyday foods that naturally support your hormones, wetness, and energy levels' },
              { icon: Sun, title: 'BONUS: Simple Daily Self-Care Routine', value: '₦8,000', desc: 'A gentle morning-to-evening routine that keeps you feeling good in your body every single day' },
              { icon: Gift, title: 'BONUS: Confidence Affirmations for Women 40+', value: '₦15,000', desc: 'Powerful, culturally rooted affirmations to help you reclaim your sense of beauty, worth, and desire' },
            ].map((item: any, i: number) => (
              <ScrollAnimate key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-[#fdf6ee]/5 rounded-xl px-5 py-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#c9973a]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#c9973a]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-[#fdf6ee] text-sm md:text-base">{item?.title ?? ''}</h3>
                      <span className="text-[#fdf6ee]/40 line-through text-sm">{item?.value ?? ''}</span>
                    </div>
                    <p className="text-[#fdf6ee]/50 text-xs md:text-sm mt-1">{item?.desc ?? ''}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate delay={200}>
            <div className="bg-[#c9973a]/10 border border-[#c9973a]/30 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-[#fdf6ee]/60 text-sm mb-1">Total Value: <span className="line-through">₦58,000</span></p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-[#fdf6ee]/40 line-through text-2xl">₦25,000</span>
                <span className="text-[#c9973a] font-bold text-4xl md:text-5xl font-display">₦4,500</span>
              </div>
              <p className="text-[#c9973a] text-sm font-semibold mb-4">Launch Week Special — Save 62%</p>
              <CountdownTimer />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <CTAButton text="Get Access Now — ₦4,500" size="large" className="w-auto mx-auto" url={SELAR_URL} />
          </ScrollAnimate>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Is This For You?</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                This Guide Is <span className="text-[#c9973a]">Perfect</span> For You If...
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'You\'re a woman over 40 experiencing changes in your desire or body',
              'You want to feel sexy, confident, and wanted again',
              'Your relationship needs a spark — and you\'re ready to light it',
              'You\'re tired of feeling "broken" and want natural solutions',
              'You want practical steps, not vague advice',
              'You value your privacy and want a discreet solution',
            ].map((item: string, i: number) => (
              <ScrollAnimate key={i} delay={i * 80}>
                <div className="flex items-start gap-3 bg-white/60 rounded-xl px-5 py-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                  <p className="text-[#2b1a10]/80 text-sm">{item ?? ''}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image + Author Section */}
      <section className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <ScrollAnimate>
              <div className="relative w-48 md:w-64 aspect-[3/4] rounded-xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(43,26,16,0.15)' }}>
                  <Image
                    src={HERO_IMAGE}
                    alt="Confident African woman in her 40s smiling radiantly - representing the transformation this guide offers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 320px"
                    loading="lazy"
                  />
                </div>
              </ScrollAnimate>
            </div>
            <div className="md:col-span-3">
              <ScrollAnimate delay={100}>
                <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">About The Author</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                  Written By Someone Who <span className="text-[#b5534e]">Understands</span>
                </h2>
                <div className="space-y-4 text-[#2b1a10]/70 text-sm md:text-base leading-relaxed">
                  <p>
                    This guide was created by a woman who has walked this exact path — from feeling invisible
                    and disconnected to rediscovering passion, pleasure, and deep connection after 40.
                  </p>
                  <p>
                    Drawing from years of research, personal experience, and conversations with hundreds
                    of African women, every page is crafted with cultural sensitivity, warmth, and
                    practical wisdom that actually works.
                  </p>
                  <p className="font-semibold text-[#2b1a10] italic">
                    &ldquo;I wrote this guide because no one was talking about this in a way that felt
                    real, respectful, and rooted in our experience as African women.&rdquo;
                  </p>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#b5534e] font-semibold text-sm uppercase tracking-wider mb-3">Real Stories</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                What <span className="text-[#b5534e]">Women Are Saying</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Adunni O.',
                location: 'Lagos, Nigeria',
                stars: 5,
                text: 'I felt invisible in my marriage after I turned 44. Sex became rare, I was dry and had zero drive. My husband started pulling away and avoiding intimacy — I thought it was just menopause. This book gave me a simple mindset shift and body practices that actually work. Within weeks I felt excited and wet again. My husband noticed these changes and started reaching for me...',
              },
              {
                name: 'Grace M.',
                location: 'Nairobi, Kenya',
                stars: 5,
                text: 'At 52, I thought that part of my life was over. Within two weeks of following the guide, I felt things I hadn\'t felt in years. This is worth every single cent.',
              },
              {
                name: 'Ama K.',
                location: 'Accra, Ghana',
                stars: 5,
                text: 'The "Magnetic Woman" chapter alone changed everything. My partner can\'t keep his hands off me. I feel confident, desired, and truly alive again.',
              },
            ].map((review: any, i: number) => (
              <ScrollAnimate key={i} delay={i * 120}>
                <div className="bg-white/70 rounded-xl p-5 md:p-6 h-full flex flex-col" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review?.stars ?? 5 }).map((_: any, s: number) => (
                      <Star key={s} className="w-4 h-4 fill-[#c9973a] text-[#c9973a]" />
                    ))}
                  </div>
                  <p className="text-[#2b1a10]/75 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{review?.text ?? ''}&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8b4a0]/20">
                    <p className="font-display font-bold text-[#2b1a10] text-sm">{review?.name ?? ''}</p>
                    <p className="text-xs text-[#2b1a10]/50">{review?.location ?? ''}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 px-4 bg-[#f5e6d0]/40">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <p className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider mb-3">Questions?</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight">
                Frequently Asked <span className="text-[#c9973a]">Questions</span>
              </h2>
            </div>
          </ScrollAnimate>
          <ScrollAnimate delay={100}>
            <FAQAccordion />
          </ScrollAnimate>
        </div>
      </section>

      {/* Guarantee Section */}
      {/* <section className="py-16 md:py-20 px-4 bg-[#fdf6ee]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollAnimate>
            <div className="bg-white/70 rounded-2xl p-8 md:p-10" style={{ boxShadow: 'var(--shadow-md)' }}>
              <Shield className="w-14 h-14 mx-auto mb-4 text-[#c9973a]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2b1a10] tracking-tight mb-4">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-[#2b1a10]/65 text-sm md:text-base leading-relaxed mb-6">
                Try the entire guide risk-free for 30 days. If you follow the steps and don&apos;t
                feel a positive shift in your desire, confidence, and intimacy, simply send us a
                message and we&apos;ll refund every kobo. No questions asked, no hard feelings.
              </p>
              <p className="text-[#c9973a] font-semibold text-sm">
                Your satisfaction is our highest priority.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 bg-[#2b1a10]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollAnimate>
            <Crown className="w-10 h-10 mx-auto mb-4 text-[#c9973a]" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#fdf6ee] tracking-tight mb-4">
              You Deserve to Feel <span className="text-[#c9973a]">Desired</span> Again
            </h2>
            <p className="text-[#fdf6ee]/60 text-sm md:text-base mb-8 max-w-lg mx-auto">
              Every day you wait is another day of disconnection. Take the first step
              towards reclaiming your passion, your confidence, and your intimate life.
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={100}>
            <div className="flex flex-col items-center gap-4">
              <CTAButton text="Buy Now — ₦4,500" size="large" className="w-auto max-w-md mx-auto" url={SELAR_URL} />
              <p className="text-[#fdf6ee]/40 text-xs text-center">
                🔒 Secure checkout via Selar · Instant digital delivery · 100% private
              </p>
            </div>
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