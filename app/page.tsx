"use client";

// ─────────────────────────────────────────────────────────────────
//  Desired Again — Rebranded Landing Page
//  ✅ Fully responsive: proper desktop wide layout + mobile
//  ✅ CTA buttons → checkout URL (replace CHECKOUT_URL below)
//  ✅ Facebook Pixel ID: 271502917879217 — ViewContent on load
// ─────────────────────────────────────────────────────────────────

import { useEffect } from "react";

const CHECKOUT_URL = "https://selar.co/YOUR-PRODUCT-LINK-HERE"; // ← paste your Selar / Paystack link here
const FB_PIXEL_ID  = "271502917879217";

export default function DesiredAgainPage() {

  // ── Facebook Pixel: fires ViewContent when page loads ──────────
  useEffect(() => {
    // Inject the base pixel script once
    if (typeof window === "undefined") return;

    (function (f: Window & typeof globalThis, b: Document, e: string, v: string) {
      type FbqFn = {
        (...args: unknown[]): void;
        callMethod?: (...args: unknown[]) => void;
        queue: unknown[];
        loaded: boolean;
        version: string;
        push: (...args: unknown[]) => void;
      };

      if ((f as unknown as Record<string, unknown>).fbq) return;

      const n: FbqFn = Object.assign(
        function (...args: unknown[]) {
          n.callMethod ? n.callMethod(...args) : n.queue.push(args);
        },
        { queue: [] as unknown[], loaded: true, version: "2.0", push: (...a: unknown[]) => n.queue.push(a) }
      );

      (f as unknown as Record<string, unknown>).fbq = n;
      if (!(f as unknown as Record<string, unknown>)._fbq) (f as unknown as Record<string, unknown>)._fbq = n;

      const s = b.createElement(e) as HTMLScriptElement;
      s.async = true;
      s.src = v;
      const t = b.getElementsByTagName(e)[0];
      t.parentNode?.insertBefore(s, t);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    const fbq = (window as unknown as Record<string, unknown>).fbq as (...a: unknown[]) => void;
    fbq("init", FB_PIXEL_ID);
    fbq("track", "PageView");

    // ViewContent — presale page event
    fbq("track", "ViewContent", {
      content_name:     "Desired Again After 40 — Presale",
      content_category: "Digital Product / Relationship",
      content_ids:      ["desired-again-after-40"],
      content_type:     "product",
      currency:         "NGN",
      value:            4500,
    });
  }, []);

  const goToCheckout = () => {
    // Fire InitiateCheckout before leaving
    const fbq = (window as unknown as Record<string, unknown>).fbq as ((...a: unknown[]) => void) | undefined;
    if (fbq) {
      fbq("track", "InitiateCheckout", {
        content_name: "Desired Again After 40",
        currency:     "NGN",
        value:        4500,
        num_items:    1,
      });
    }
    window.open(CHECKOUT_URL, "_blank");
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const painPoints = [
    "You don't feel as excited or alive in your body as you used to — and it scares you.",
    "Your partner feels distant and you can feel the space between you growing wider every week.",
    "You've tried talking about it but the conversation never goes anywhere, and the silence gets louder.",
    "Deep down you wonder: \"Is this just how it is now? Is this it for me?\"",
  ];

  const insideItems = [
    "How to naturally awaken your desire again — without medication or awkward doctor visits",
    "Why your body changed after 40 and exactly how to work with it, not against it",
    "Simple daily practices that rebuild your confidence from the inside out",
    "How to close the emotional and physical distance with your partner — without it feeling forced",
    "What men over 40 actually need — and how to give it without losing yourself in the process",
  ];

  const testimonials = [
    { text: "\"Aunty Gracee, I don't even know what to say. Thank you ma. I was beginning to have serious problems with my husband regarding our sexual life. But after reading this everything just made sense. God bless you ohhhh.\"", name: "Chinelo", detail: "49 years old", initial: "C" },
    { text: "\"I got the book and was sceptical. I followed the steps like my life depended on it and in less than a month I can clearly feel and enjoy the difference. Me and my husband have been enjoying the new me.\"", name: "Nididi", detail: "47 years old · Owerri", initial: "N" },
    { text: "\"All the way from Accra, Ghana. My sister if you are reading this testimonial — just buy the book. That thing you thought was a big deal, Madam Gracee dealt with it. God bless you.\"", name: "Ama", detail: "45 years old · Accra, Ghana", initial: "A" },
  ];

  const bonuses = [
    { code: "B1", name: "The 7-Day Desire Reset Plan", desc: "Reignite your body and confidence in just one week with a simple daily plan anyone can follow" },
    { code: "B2", name: "What Men Secretly Want After 40", desc: "Understand his mind and bring back his attention effortlessly — without playing games" },
    { code: "B3", name: "Bedroom Confidence Scripts", desc: "Know exactly what to say and do so every moment feels natural — zero awkwardness" },
    { code: "B4", name: "Libido-Boosting Foods & Natural Remedies", desc: "Support your body, balance your hormones and increase your desire naturally — starting today" },
  ];

  const valueStack = [
    ["Main Guide: How To Feel Desired Again After 40", "₦10,000"],
    ["Bonus 1: 7-Day Desire Reset Plan", "₦5,000"],
    ["Bonus 2: What Men Secretly Want After 40", "₦5,000"],
    ["Bonus 3: Bedroom Confidence Scripts", "₦5,000"],
    ["Bonus 4: Libido-Boosting Foods & Remedies", "₦5,000"],
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      {/* Facebook Pixel — noscript fallback */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1" width="1" style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <style>{`
        /* Fonts */
        body { font-family: 'Lato', sans-serif; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }

        /* Shimmer CTA */
        .btn-rose {
          background: linear-gradient(105deg, #D4537E 0%, #993556 40%, #ED93B1 65%, #D4537E 100%);
          background-size: 200% auto;
          animation: shimmer 2.8s linear infinite;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 9999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: block;
        }
        .btn-rose:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212,83,126,0.45);
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* ── Mobile base ── */
        .da-page { background: #fff; color: #2C2C2A; line-height: 1.7; font-size: 16px; }
        .da-container { width: 100%; padding-left: 24px; padding-right: 24px; }

        /* hero */
        .da-hero { padding: 48px 24px 40px; text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(160deg, hsl(220,40%,7%) 0%, hsl(345,55%,19%) 55%, hsl(340,50%,27%) 100%);
          color: #fff; }
        .da-hero h1 { font-size: 28px; }
        .da-hero .hero-sub { font-size: 15px; max-width: 100%; }
        .da-hero .btn-rose { width: 100%; padding: 16px 32px; font-size: 16px; margin: 0 auto 12px; }

        /* pain+truth stacked */
        .da-pain-truth { display: flex; flex-direction: column; }
        .da-pain  { background: #fff; padding: 32px 24px; }
        .da-truth { background: linear-gradient(135deg, hsl(345,55%,19%), hsl(340,50%,27%));
          padding: 28px 24px; color: #fff; }

        /* product section */
        .da-product { padding: 36px 24px; background: #FDF6F9; text-align: center; }
        .da-inside-grid { display: grid; grid-template-columns: 1fr; gap: 10px; text-align: left; margin-top: 20px; }

        /* testimonials */
        .da-testi { padding: 36px 24px; background: #fff; }
        .da-testi-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }

        /* bonuses */
        .da-bonuses { padding: 36px 24px; background: #FDF6F9; }
        .da-bonuses-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 20px; }

        /* pricing */
        .da-pricing { padding: 48px 24px; text-align: center;
          background: linear-gradient(160deg, hsl(220,40%,7%), hsl(345,55%,19%)); color: #fff; }
        .da-pricing-inner { max-width: 100%; margin: 0 auto; }
        .da-pricing .btn-rose { width: 100%; padding: 18px 32px; font-size: 17px; margin-bottom: 12px; }

        /* final nudge */
        .da-final { padding: 36px 24px; text-align: center; background: #fff; }
        .da-final .btn-rose { width: 100%; max-width: 420px; padding: 16px 32px; font-size: 16px; margin: 0 auto; }

        /* ── Desktop overrides (768px+) ── */
        @media (min-width: 768px) {
          .da-container { max-width: 1100px; margin: 0 auto; }

          /* hero */
          .da-hero { padding: 90px 60px 80px; }
          .da-hero h1 { font-size: 46px; }
          .da-hero .hero-sub { font-size: 18px; max-width: 640px; margin-left: auto; margin-right: auto; }
          .da-hero .btn-rose { max-width: 420px; font-size: 17px; }

          /* pain+truth side by side */
          .da-pain-truth { flex-direction: row; }
          .da-pain  { flex: 1; padding: 56px 56px; }
          .da-truth { flex: 1; padding: 56px 56px; display: flex; align-items: center; }

          /* product */
          .da-product { padding: 72px 60px; }
          .da-inside-grid { grid-template-columns: 1fr 1fr; gap: 14px; }

          /* testimonials */
          .da-testi { padding: 72px 60px; }
          .da-testi-grid { grid-template-columns: 1fr 1fr 1fr; }

          /* bonuses */
          .da-bonuses { padding: 72px 60px; }
          .da-bonuses-grid { grid-template-columns: 1fr 1fr; }

          /* pricing */
          .da-pricing { padding: 80px 60px; }
          .da-pricing-inner { max-width: 680px; }

          /* final nudge */
          .da-final { padding: 72px 60px; }
        }
      `}</style>

      <div className="da-page">

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section className="da-hero">
          {/* orbs */}
          <span style={{ position:"absolute", top:-60, right:-60, width:200, height:200, borderRadius:"50%", background:"rgba(212,83,126,0.14)", display:"block", pointerEvents:"none" }} />
          <span style={{ position:"absolute", bottom:-40, left:-40, width:150, height:150, borderRadius:"50%", background:"rgba(212,83,126,0.10)", display:"block", pointerEvents:"none" }} />

          <p style={{ fontSize:11, letterSpacing:3, textTransform:"uppercase", color:"#ED93B1", fontWeight:700, marginBottom:16 }}>
            For Nigerian Women Over 40
          </p>
          <h1 className="serif" style={{ lineHeight:1.3, fontWeight:700, marginBottom:16 }}>
            You Haven't Lost It.{" "}
            <em style={{ color:"#ED93B1" }}>You Just Haven't Been Shown How to Unlock It Again.</em>
          </h1>
          <p className="hero-sub" style={{ color:"rgba(255,255,255,0.82)", marginBottom:28, lineHeight:1.65 }}>
            The private, step-by-step guide helping women over 40 feel desired, alive and deeply connected again — even if you feel like a stranger in your own body.
          </p>
          <button className="btn-rose" onClick={scrollToPricing}>
            Yes, I Want to Feel Desired Again →
          </button>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.50)" }}>🔒 100% private &amp; discreet. Instant digital delivery.</p>
        </section>

        {/* ══ PAIN + TRUTH ══════════════════════════════════════ */}
        <div className="da-pain-truth">
          <div className="da-pain">
            <p style={{ fontSize:14, color:"#5F5E5A", textAlign:"center", marginBottom:20, fontStyle:"italic" }}>
              "If any of this sounds familiar, this guide was written for you…"
            </p>
            {painPoints.map((text, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom:12, padding:"13px 15px", background:"#FDF6F9", borderRadius:12, borderLeft:"3px solid #D4537E" }}>
                <span style={{ fontSize:18, flexShrink:0, marginTop:2 }}>💔</span>
                <p style={{ fontSize:14, color:"#3C3434", lineHeight:1.5 }}>{text}</p>
              </div>
            ))}
          </div>

          <div className="da-truth">
            <div>
              <h2 className="serif" style={{ fontSize:22, color:"#fff", marginBottom:14, fontWeight:700 }}>
                Here's what nobody is telling you
              </h2>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.65 }}>
                What you're experiencing is <strong style={{ color:"#ED93B1" }}>not permanent</strong>. It is not age. It is not your fault. Your body has not abandoned you — it is simply waiting for the right guidance.{" "}
                <strong style={{ color:"#ED93B1" }}>This guide is that guidance.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ══ PRODUCT INTRO ═════════════════════════════════════ */}
        <section className="da-product">
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"#D4537E", display:"block", marginBottom:8 }}>Introducing</span>
          <h2 className="serif" style={{ fontSize:26, color:"#3d1020", lineHeight:1.3, fontWeight:700, marginBottom:8 }}>
            How To Feel Desired, Wet &amp; Excited Again After 40
          </h2>
          <p style={{ fontSize:14, color:"#888780", fontStyle:"italic", marginBottom:8 }}>
            A Private Step-by-Step Guide to Reignite Your Body, Confidence &amp; Attraction
          </p>
          <div className="da-inside-grid">
            {insideItems.map((item, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                <span style={{ width:22, height:22, background:"#D4537E", borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, marginTop:2 }}>✓</span>
                <p style={{ fontSize:14, color:"#444441", lineHeight:1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
        <section className="da-testi">
          <h2 className="serif" style={{ fontSize:22, color:"#3d1020", textAlign:"center", marginBottom:6, fontWeight:700 }}>
            Women just like you are already feeling the difference
          </h2>
          <p style={{ fontSize:13, color:"#888780", textAlign:"center", marginBottom:24, fontStyle:"italic" }}>
            Real results. Real Nigerian women. Names shared with permission.
          </p>
          <div className="da-testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background:"#fff", borderRadius:14, padding:"20px 18px", border:"1px solid #F4C0D1" }}>
                <p style={{ color:"#D4537E", fontSize:14, letterSpacing:2, marginBottom:10 }}>★★★★★</p>
                <p style={{ fontSize:14, color:"#3C3434", lineHeight:1.6, fontStyle:"italic", marginBottom:14 }}>{t.text}</p>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#D4537E,#6b1f3a)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:13, fontWeight:700, flexShrink:0 }}>{t.initial}</div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:700, color:"#3d1020" }}>{t.name}</p>
                    <p style={{ fontSize:12, color:"#888780" }}>{t.detail}</p>
                    <p style={{ fontSize:11, color:"#D4537E", fontWeight:700 }}>✓ Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BONUSES ═══════════════════════════════════════════ */}
        <section className="da-bonuses">
          <h2 className="serif" style={{ fontSize:22, color:"#3d1020", textAlign:"center", marginBottom:6, fontWeight:700 }}>
            Order today and get these 4 free bonuses
          </h2>
          <p style={{ fontSize:13, color:"#888780", textAlign:"center" }}>Valued at over ₦20,000 — yours at no extra cost</p>
          <div className="da-bonuses-grid">
            {bonuses.map((b, i) => (
              <div key={i} style={{ display:"flex", gap:14, padding:16, background:"#fff", borderRadius:12, border:"1px solid #F4C0D1", alignItems:"flex-start" }}>
                <div style={{ width:36, height:36, background:"linear-gradient(135deg,#D4537E,#993556)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700, flexShrink:0 }}>{b.code}</div>
                <div>
                  <p style={{ fontSize:10, color:"#D4537E", fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:3 }}>Free Bonus</p>
                  <p style={{ fontSize:14, fontWeight:700, color:"#3d1020", marginBottom:4, lineHeight:1.3 }}>{b.name}</p>
                  <p style={{ fontSize:13, color:"#5F5E5A", lineHeight:1.4 }}>{b.desc}</p>
                  <p style={{ fontSize:11, color:"#888780", marginTop:4 }}>Value: <span style={{ textDecoration:"line-through" }}>₦5,000</span> <strong style={{ color:"#D4537E" }}>Free</strong></p>
                </div>
              </div>
            ))}
          </div>
        </section>

       

        {/* ══ PRICING ═══════════════════════════════════════════ */}
        <section id="pricing" className="da-pricing">
          <div className="da-pricing-inner">
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"#ED93B1", display:"block", marginBottom:16 }}>Get Everything Today</span>
            <h2 className="serif" style={{ fontSize:24, fontWeight:700, marginBottom:8 }}>Everything you need to feel like yourself again</h2>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.70)", marginBottom:28 }}>One payment. Instant access. Complete privacy.</p>

            <div style={{ background:"rgba(255,255,255,0.05)", borderRadius:12, padding:20, marginBottom:24, border:"1px solid rgba(212,83,126,0.30)", textAlign:"left" }}>
              {valueStack.map(([label, price], i) => (
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.08)", fontSize:13, color:"rgba(255,255,255,0.80)" }}>
                  <span>{label}</span>
                  <span style={{ textDecoration:"line-through", color:"rgba(255,255,255,0.38)", flexShrink:0, marginLeft:8 }}>{price}</span>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:16, fontWeight:700, color:"#fff" }}>
                <span style={{ fontSize:15 }}>You pay today:</span>
                <span className="serif" style={{ fontSize:28, color:"#ED93B1" }}>₦4,500</span>
              </div>
            </div>

            <button className="btn-rose" onClick={goToCheckout} style={{ width:"100%", padding:"18px 32px", fontSize:17, marginBottom:12 }}>
              Yes! I Want to Feel Desired Again →
            </button>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.50)", lineHeight:1.5 }}>
              🔒 Secure checkout · Instant delivery · 100% discreet on your bank statement<br />
              Available in Nigeria, Ghana and across Africa
            </p>
          </div>
        </section>

        {/* ══ FINAL NUDGE ═══════════════════════════════════════ */}
        <section className="da-final">
          <h2 className="serif" style={{ fontSize:20, color:"#3d1020", fontWeight:700, marginBottom:12 }}>
            "I was sceptical too. Then I followed the steps."
          </h2>
          <p style={{ fontSize:14, color:"#5F5E5A", lineHeight:1.65, marginBottom:20, maxWidth:520, margin:"0 auto 20px" }}>
            If Nididi from Owerri, Chinelo, and Ama all the way from Accra can feel the difference — so can you. You've already taken the first step by reading this far. Don't let doubt win today.
          </p>
          <button className="btn-rose" onClick={goToCheckout} style={{ display:"block", width:"100%", maxWidth:420, padding:"16px 32px", fontSize:16, margin:"0 auto" }}>
            I'm Ready. Let Me In →
          </button>
          <p style={{ fontSize:12, color:"#B4B2A9", marginTop:12 }}>🔒 Private · Secure · Instant Access</p>
        </section>

      </div>
    </>
  );
}