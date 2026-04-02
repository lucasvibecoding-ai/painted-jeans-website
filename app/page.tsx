import type { Metadata } from "next";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import CountdownBar from "./CountdownBar";
import FaqAccordion from "./FaqAccordion";
import MegaBonusBadge from "./MegaBonusBadge";

export const metadata: Metadata = {
  title: "Painted Jeans: Turn Any Old Jeans Into Custom Wearable Art — In a Weekend",
  description:
    "Learn how to turn any old pair of jeans into custom painted jeans you'll actually wear. No art experience needed. Step-by-step video course.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CountdownBar />

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #f9f6f2;
          --bg-warm: #f2ede5;
          --card: #ffffff;
          --ink: #1e1a14;
          --ink-soft: rgb(43, 43, 43);
          --ink-muted: #7d7568;
          --green: #6347a0;
          --green-deep: #442c6e;
          --green-soft: #8f6cb5;
          --green-pale: rgba(99,71,160,0.06);
          --gold: #b08d3a;
          --gold-light: #d4b35c;
          --gold-pale: rgba(176,141,58,0.08);
          --terra: #946b42;
          --sand: #d9cfc0;
          --stone: #c4b9a8;
          --cream: #fdfbf7;
          --radius: 10px;
        }

        /* BASE TYPOGRAPHY — one size for all body text */
        .bonsai-page { font-family: 'Lora', 'Lora Fallback', serif; color: rgb(43, 43, 43); line-height: 1.8; font-weight: 400; font-size: 18px; }
        .bonsai-page .container { max-width: 1080px; margin: 0 auto; padding: 0 40px; }

        /* Headings */
        .bonsai-page h1, .bonsai-page h2, .bonsai-page h3 { font-family: 'Lora', serif; color: var(--ink); line-height: 1.25; }
        .bonsai-page h1 { font-size: clamp(2.4rem, 6vw, 3.6rem); font-weight: 600; letter-spacing: -0.5px; text-align: center; margin-bottom: 20px; }
        .bonsai-page h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 500; margin-bottom: 24px; }
        .bonsai-page h3 { font-size: 30px; font-weight: 600; color: var(--green-deep); margin-bottom: 8px; }

        /* Body text */
        .bonsai-page p { margin-bottom: 24px; }
        .bonsai-page strong { color: var(--ink); font-weight: 600; }
        .bonsai-page em { font-style: italic; }
        .bonsai-page a { color: var(--green); text-decoration: none; }

        /* Utilities */
        .bonsai-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); margin: 20px 0; }
        .sm-divider { width: 36px; height: 2px; background: var(--gold); margin: 0 auto; opacity: 0.5; }
        .bonsai-center { text-align: center; }

        /* Badge */
        .badge { display: inline-block; padding: 6px 16px; border: 1.5px solid var(--green); border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; }

        /* Hero */
        .hero-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; }
        .hero-img-ph { text-align: center; padding: 36px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .hero-img-ph .em { font-size: 48px; display: block; margin-bottom: 8px; }
        .hero h1 .accent { background: linear-gradient(135deg, #b8860b, #d4a843, #8b6914); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-intro { font-size: clamp(0.75rem, 1.5vw, 0.85rem); color: var(--ink-muted); margin-bottom: 20px; font-style: normal; letter-spacing: 3px; font-weight: 700; text-transform: uppercase; }
        .gradient-pick { font-size: clamp(1.8rem, 5vw, 2.8rem); font-family: 'Lora', serif; font-weight: 600; font-style: italic; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; padding: 0 4px; }

        /* Philosophy blocks */
        .phil-block { margin-bottom: 32px; padding: 28px 32px; background: var(--card); border-radius: 12px; border: 1px solid var(--sand); }
        .phil-kanji { font-size: 32px; color: var(--gold); margin-bottom: 6px; }
        .phil-title { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .phil-rom { font-size: 13px; color: var(--ink-muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; font-weight: 600; }
        .phil-block p { margin-bottom: 0; }

        /* Transform quote */
        .transform { padding: 48px 0; text-align: center; }
        .transform-line { font-size: clamp(1rem, 2.2vw, 1.3rem); color: var(--ink); font-weight: 400; font-style: italic; max-width: 560px; margin: 0 auto; line-height: 1.5; }

        /* Instructor */
        .instructor { padding: 56px 0; display: flex; gap: 32px; align-items: flex-start; }
        .instructor-img { width: 160px; height: 200px; border-radius: var(--radius); background: var(--bg-warm); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 36px; border: 1px solid var(--sand); }

        /* Students */
        .students { padding: 48px 0; text-align: center; }
        .students-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; aspect-ratio: 2.2/1; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; color: var(--ink-muted); font-size: 16px; }

        /* Objections */
        .objection { padding: 56px 0; }

        /* Module cards — 2-col grid */
        .modules-grid { display: flex; flex-direction: column; gap: 16px; }
        .module-card { background: var(--card); border-radius: 12px; padding: 28px; border: 1px solid var(--sand); margin-bottom: 0; }
        .module-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }
        .module-sub { font-size: 18px; color: var(--ink); margin-bottom: 14px; }
        .module-body { display: flex; gap: 28px; align-items: flex-start; }
        .module-card ul { list-style: none; padding: 0; flex: 1; }
        .module-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .module-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }

        /* CTA */
        .cta-block { text-align: center; padding: 56px 0; }
        .price-old { font-size: 26px; color: var(--ink-muted); text-decoration: line-through; margin-bottom: 4px; }
        .now-only { font-size: 44px; }
        .price { font-size: 56px; color: var(--green-deep); margin-bottom: 4px; font-weight: 700; }
        .price-note { font-size: 20px; color: var(--ink-muted); margin-bottom: 24px; font-weight: 400; }
        .guarantee-badge { display: flex; align-items: center; gap: 10px; justify-content: center; margin-top: 20px; font-size: 15px; color: var(--ink-muted); }
        .guarantee-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--cream); border: 1.5px solid var(--gold); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .payment-icons { display: flex; gap: 6px; justify-content: center; margin-top: 14px; opacity: 0.4; }
        .payment-icons span { font-size: 12px; padding: 4px 10px; border: 1px solid var(--stone); border-radius: 3px; color: var(--ink-muted); font-weight: 500; }
        .ps-note { margin-top: 16px; font-size: 18px; color: var(--ink-muted); font-style: italic; }

        /* Guarantee section */
        .guarantee-section { padding: 48px 0; text-align: left; }
        .guarantee-section p { max-width: 640px; margin: 0 auto 16px; font-size: 20px; }

        /* Bonus cards */
        .bonus-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .bonus-body { display: flex; gap: 28px; align-items: flex-start; }
        .bonus-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }
        .bonus-card ul { flex: 1; }
        .bonus-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .bonus-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); }
        .bonus-value { font-size: 12px; color: var(--green); font-weight: 700; background: rgba(99,71,160,0.1); padding: 2px 10px; border-radius: 100px; letter-spacing: 0.5px; }
        .bonus-card h3 { font-size: 1.3rem; color: var(--gold); margin-bottom: 4px; }
        .module-card h3 { color: var(--gold); }
        .bonus-desc { font-size: 20px; color: var(--ink-muted); margin-bottom: 14px; }
        .bonus-card ul { list-style: none; padding: 0; }
        .bonus-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .mega { border-color: rgba(176,141,58,0.3); background: linear-gradient(135deg, var(--card), var(--gold-pale)); }

        /* Stack */
        .stack-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); max-width: 520px; margin-left: auto; margin-right: auto; }
        .stack-row .label { color: var(--ink-soft); }
        .stack-row .val { color: var(--green-deep); font-weight: 800; font-size: 17px; }
        .stack-total { font-weight: 700; border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 6px; }
        .stack-total .label { color: var(--ink); }

        /* FAQ — individual cards */
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: var(--cream); border-radius: 12px; padding: 4px 20px; border: 1px solid var(--sand); }
        .faq-q { width: 100%; display: flex; align-items: center; gap: 14px; padding: 18px 0; background: none; border: none; cursor: pointer; text-align: left; font-family: 'Lora', serif; font-size: 18px; }
        .faq-badge { width: 28px; height: 28px; border-radius: 50%; background: var(--green-pale); color: var(--green); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .faq-q-text { flex: 1; font-weight: 700; color: var(--ink); }
        .faq-icon { color: var(--green); font-size: 20px; transition: transform 0.2s; flex-shrink: 0; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s; }
        .faq-answer.open { max-height: 400px; padding-bottom: 18px; }
        .faq-answer-inner { padding-left: 42px; }
        .faq-a { color: var(--ink-muted); line-height: 1.75; margin: 0; }

        /* Closing */
        .closing { padding: 56px 0; text-align: center; }
        .closing-quote { font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: var(--ink); font-style: italic; max-width: 520px; margin: 0 auto 28px; line-height: 1.5; }

        /* Footer */
        .bonsai-footer { padding: 44px 0; text-align: center; font-size: 14px; color: #c4b9a8; background: #1e1a14; margin-top: 48px; }
        .bonsai-footer a { color: #d4b35c; }
        .bonsai-footer p { color: #c4b9a8; }

        /* Split layout */
        .split { display: flex; gap: 40px; align-items: center; padding: 56px 0; }
        .split-text { flex: 1; }
        .split-text h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); }
        .split-img { flex: 1 1 50%; height: 380px; border-radius: 12px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .split-img-ph { text-align: center; padding: 24px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .split-img-ph .em { font-size: 42px; display: block; margin-bottom: 8px; }

        @media (max-width: 768px) {
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page section { padding-left: 20px; padding-right: 20px; }
          .split { flex-direction: column; gap: 24px; }
          .split-img { flex: none; width: 100%; height: auto; }
          .split-text { flex: 1 !important; }
          .module-body { flex-direction: column; }
          .module-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .bonus-body { flex-direction: column; }
          .bonus-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .module-card, .bonus-card { padding: 20px; }
          .instructor { flex-direction: column; text-align: center; align-items: center; }
          .instructor-img { width: 100% !important; max-width: 400px !important; height: auto !important; }
          .phil-block { padding: 20px; }
          .stack-row { max-width: 100%; }
          .closing-quote { font-size: 1.2rem; }
          .bonus-header { flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page { font-size: 18px; }
          .bonsai-page p:not(.hero-intro):not(.now-only), .bonsai-page li { font-size: 18px !important; }
          .module-img, .bonus-img { height: auto; aspect-ratio: 1/1; }
          .bonus-card h3, .module-card h3 { margin-bottom: 14px !important; }
          .bonus-desc, .module-sub { margin-bottom: 22px !important; }
          .badge { font-size: 10px; letter-spacing: 1.5px; padding: 5px 12px; }
          .payment-method-btn { font-size: 13px; padding: 10px 12px; }
          #hero { width: 100% !important; margin-top: 8px; max-width: 100% !important; margin-left: -16px !important; margin-right: -16px !important; width: calc(100% + 32px) !important; border-radius: 8px !important; }
          .imagine-section { padding-top: 24px !important; }
          .imagine-section h2 { font-size: 30px !important; }
          .now-only { font-size: 36px !important; }
          .price-old { font-size: 20px !important; }
          .cta-btn { font-size: 1.5rem !important; }
          .faq-q-text { font-weight: 500 !important; font-size: 18px !important; }
          .faq-q { font-size: 18px !important; }
          .stack-row { padding: 6px 0 !important; font-size: 18px; }
          .stack-row .val { font-size: 18px !important; }
          .checkout-box { padding: 24px 20px !important; }
          .hero-intro { font-size: 14px !important; letter-spacing: 2px !important; font-weight: 400 !important; }
          .hero h1 { font-size: clamp(2rem, 7vw, 2.6rem) !important; line-height: 1.35 !important; }
          .hero { padding-top: 36px !important; }
        }
      `}} />

      <div className="bonsai-page">
        <div className="container">

          {/* HERO */}
          <section className="hero" style={{ paddingTop: 72, paddingBottom: 48, textAlign: 'center' }}>
            <p className="hero-intro">Even if you&apos;ve never painted before</p>
            <h1>Turn Any Old Jeans Into <span className="accent">Custom Painted Jeans</span> In a Weekend</h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--ink-muted)', marginTop: 8, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', fontStyle: 'italic' }}>Without needing years of practice or expensive supplies</p>

            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}>
              <Image id="hero" src="/herov5.png" alt="Custom painted jeans" width={1024} height={1024} style={{ width: '100%', maxWidth: 560, height: 'auto', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }} />
            </div>
          </section>

          {/* THE PROBLEM */}
          <section className="imagine-section" style={{ padding: '56px 0' }}>
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'left' }}>
              <h2 style={{ textAlign: 'left', marginBottom: 30 }}>Imagine if you could:</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p><span style={{ color: '#c75a3a' }}>&rarr;</span> <strong style={{ color: '#c75a3a' }}>Make clothes that actually feel like you.</strong> Not mass-produced. Not someone else&apos;s design. Something you made with your own hands that makes people ask: &quot;Wait... where did you get those?&quot;</p>
                <p><span style={{ color: '#2a8a7a' }}>&rarr;</span> <strong style={{ color: '#2a8a7a' }}>Stand out from the crowd</strong> without even trying. Walk into a room and have someone grab your arm mid-conversation. &quot;Wait. Did you paint those?&quot; And you just nod like it&apos;s no big deal.</p>
                <p><span style={{ color: '#c78a2a' }}>&rarr;</span> Sit down after a long day, feel the brush gliding across the denim, and <strong style={{ color: '#c78a2a' }}>lose yourself in a quiet evening</strong> with nowhere to be.</p>
                <p><span style={{ color: '#7a4aad' }}>&rarr;</span> <strong style={{ color: '#7a4aad' }}>Hand a pair to someone you love,</strong> watch them hold them up, run their fingers over the paint, look up at you, and go quiet for a second before they can say a word.</p>
              </div>


              <div style={{ marginTop: 96 }}>
                <h2 style={{ textAlign: 'left', marginBottom: 56 }}>This will be your most complimented pair.</h2>
                <p>You walk into a coffee shop and someone taps your shoulder. &quot;Wait, where are those from?&quot;</p>
                <p>You post a photo and the comments won&apos;t stop.</p>
                <p>Friends start texting you asking if you can make them a pair.</p>
                <p>Not because you tried to stand out. <strong>Because you made something real.</strong></p>
                <p>That forgotten pair collecting dust in the back of your closet? <strong>It&apos;s about to become the most complimented thing you own.</strong></p>
              </div>
            </div>
          </section>

          {/* ISN'T THIS EXPENSIVE */}
          <section style={{ padding: '48px 0' }}>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'left', marginBottom: 64 }}>&quot;Isn&apos;t this expensive to get into?&quot;</h2>
              <p><strong>Your first pair costs less than a coffee habit.</strong></p>
              <p>Fabric paint is $8-12. A brush set costs under $10. Fabric medium is $5.</p>
              <p><strong>That&apos;s it.</strong> No airbrush machine. No heat press. No fancy studio.</p>
              <p>The course teaches you <strong>exactly which supplies to buy</strong> and which ones are a waste of money.</p>
            </div>
          </section>

          {/* ANYONE CAN LEARN */}
          <section style={{ padding: '48px 0' }}>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'left', marginBottom: 64 }}>Anyone can paint jeans.</h2>
              <p><span style={{ color: '#c75a3a', fontWeight: 600 }}>&rarr; Even if you can&apos;t draw a straight line.</span> You don&apos;t need to. The techniques in this course use stencils, transfers, and simple brushwork that look incredible without any drawing ability.</p>
              <p><span style={{ color: '#2a8a7a', fontWeight: 600 }}>&rarr; Even if you think you&apos;re &quot;not creative.&quot;</span> Creativity isn&apos;t talent. It&apos;s a set of techniques. Follow the steps, and your jeans will look like a professional painted them.</p>
              <p><span style={{ color: '#c78a2a', fontWeight: 600 }}>&rarr; Even if you&apos;re scared of ruining your jeans.</span> You&apos;ll practice on scrap denim first. By the time you touch your real pair, you&apos;ll be confident.</p>
              <p><span style={{ color: '#7a4aad', fontWeight: 600 }}>&rarr; Even if you&apos;ve never held a paintbrush.</span> You need a pair of jeans, some fabric paint, and a few brushes. Total cost: under $25. That&apos;s it.</p>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* INSTRUCTOR */}
          <section className="instructor">
            <div className="instructor-img" style={{ overflow: 'hidden', width: '100%', maxWidth: 540, height: 'auto', position: 'relative', borderRadius: 16, border: 'none', background: 'none' }}>
              <Image src="/katie.webp" alt="Katie holding painted jeans" width={1080} height={1080} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <div className="instructor-text">
              <h2>Hi, I&apos;m Katie!</h2>
              <p>I&apos;ve painted over <strong>200 jeans</strong>.</p>
              <p>It all started with one old pair I was about to throw away. I was tired of buying the same <strong>fast fashion</strong> everyone else wears. So I grabbed some paint and <strong>made something with my own hands.</strong></p>
              <p>That one pair changed everything.</p>
              <p>Then friends started asking me to make them a pair. Then their friends. Then people I&apos;d never met. <strong>I couldn&apos;t keep up</strong> with all the requests.</p>
              <p>So I thought: what if I just <strong>taught people how to do it themselves?</strong></p>
              <p><strong>That&apos;s why I made this course.</strong></p>
            </div>
          </section>

          </div></div>{/* close container and bonsai-page */}

          <div className="bonsai-page"><div className="container">

          {/* COURSE INTRO */}
          <section className="bonsai-center" style={{ padding: '80px 0 36px' }}>
            <h2 style={{ marginBottom: 4, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600 }}>Introducing: The Painted Jeans Masterclass</h2>
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}>
              <Image src="/hereswhatyouget.jpg" alt="Here's what you get" width={1200} height={800} style={{ width: '100%', maxWidth: 700, height: 'auto', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }} />
            </div>
          </section>

          {/* MODULES */}
          <section style={{ padding: '20px 0 40px' }}>
            <h2 className="bonsai-center" style={{ marginTop: 48, marginBottom: 48, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>✨ What&apos;s Inside ✨</h2>

            <div className="modules-grid">
            <div className="module-card">
              <div className="module-label">Module 1</div>
              <h3>Supplies, Prep &amp; Your First Practice Piece</h3>
              <div className="module-sub">Everything you need to get started and your first brushstrokes on denim.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module1.webp" alt="Supplies, paints, brushes and denim prep" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; The <strong>exact fabric paints, brushes, and palette setup</strong> you see in the image. No guesswork, no wasted money</li>
                  <li>&#10022; How to <strong>mix paint with fabric medium</strong> so it stays flexible on denim instead of cracking</li>
                  <li>&#10022; The <strong>3-step denim prep method</strong> that makes paint bond permanently. Skip this and your design peels off in the first wash</li>
                  <li>&#10022; How to <strong>practice florals on scrap denim</strong> before touching your real jeans</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 2</div>
              <h3>Your First Full Design: Bold Florals</h3>
              <div className="module-sub">Paint a stunning sunflower design on light wash denim, step by step.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module2.webp" alt="Sunflower design on light wash denim" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>sketch and transfer a floral layout</strong> onto denim without freehand drawing</li>
                  <li>&#10022; <strong>Layering yellow and gold tones</strong> to create sunflower petals that look vibrant and 3D</li>
                  <li>&#10022; Painting <strong>leaves and stems</strong> that flow naturally with the shape of the jeans</li>
                  <li>&#10022; <strong>Color theory for light wash denim:</strong> which colors pop and which disappear</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 3</div>
              <h3>Painting on Dark Denim: Cherry Blossoms</h3>
              <div className="module-sub">Master the technique of painting delicate designs on dark wash jeans.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module3.webp" alt="Cherry blossoms on dark denim" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; Why <strong>dark denim requires a different approach</strong> and how to make colors show up beautifully</li>
                  <li>&#10022; Painting <strong>delicate cherry blossoms and branches</strong> with soft pinks and browns</li>
                  <li>&#10022; <strong>Thin coats and layering</strong> to build up opacity without stiffness</li>
                  <li>&#10022; How to create <strong>depth with light and shadow</strong> so petals look like they&apos;re floating off the fabric</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 4</div>
              <h3>Bold Lettering &amp; Text Designs</h3>
              <div className="module-sub">Paint eye-catching words and typography onto your jeans.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module5new.webp" alt="LOVE text painted on light wash jeans" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>sketch and paint bold lettering</strong> that looks clean and professional on denim</li>
                  <li>&#10022; <strong>Mixing colors within letters:</strong> the gradient technique for reds, pinks, and multi-tone text</li>
                  <li>&#10022; <strong>Adding accents and details</strong> like hearts, sparkles, and line bursts that make your text pop</li>
                  <li>&#10022; <strong>Full-leg layouts:</strong> how to size and position large vertical text so it flows with the shape of the jeans</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 5</div>
              <h3>Blending &amp; Multi-Color Florals</h3>
              <div className="module-sub">Create a lush, multi-flower arrangement with purples, blues, and greens.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module4.webp" alt="Purple and blue floral arrangement on light wash denim" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>blend purples, blues, and pinks</strong> into rich gradients on denim</li>
                  <li>&#10022; Painting <strong>multiple flower types in one composition</strong>: hydrangeas, anemones, and wildflowers</li>
                  <li>&#10022; <strong>Arranging a cascading layout</strong> that follows the natural shape of the leg</li>
                  <li>&#10022; <strong>Heat setting, sealing, and washing</strong> so your finished design lasts through 50+ washes</li>
                </ul>
              </div>
            </div>
            </div>{/* close modules-grid */}
          </section>


          {/* CTA after modules */}
          <section style={{ padding: '56px 0' }}>
            <div className="bonsai-center" style={{ marginBottom: 32 }}>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;ve seen what&apos;s inside. Five modules. A complete system for painting custom jeans from a blank pair of denim.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>The full price for this course is <strong><s>$97</s></strong>.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;re not going to pay that today. And the reason is simple.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>This is the first time I&apos;ve offered this course to the public. I want <strong>50 people</strong> to go through it. I want to read your emails, answer your questions, see where you get stuck and where you surprise yourself.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>That feedback is worth more to me right now than charging full price. Honestly, I also need to find out if I can handle 50 support inboxes without forgetting to eat.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>So for this first group, the price is <strong>dramatically lower</strong>. Once those 50 spots fill, this page comes down and the full price goes live.</p>
            </div>
            <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(99,71,160,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div className="price-old">Normally $97</div>
              <p id="get-access" className="now-only" style={{ color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
              <div className="price-note" style={{ fontWeight: 600 }}>One-time payment.<br />Lifetime access.</div>
              <div style={{ marginTop: 20 }}><CheckoutButton /></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, width: '100%' }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
                <p style={{ margin: 0, fontWeight: 500, color: 'rgba(26,46,26,0.7)', whiteSpace: 'nowrap' }}>90-Day Money-Back Guarantee</p>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <p style={{ color: 'var(--ink-muted)', marginBottom: 4, letterSpacing: '0.05em' }}>🔒 Secure Payment 🔒</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                  <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                  <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                  <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                  <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                  <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                </div>
              </div>
              <div style={{ width: 56, height: 1, background: 'rgba(0,0,0,0.1)', margin: '16px auto 0' }} />
              <p className="ps-note" style={{ fontStyle: 'italic' }}>P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* GUARANTEE */}
          <section className="guarantee-section">
            <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={160} height={160} style={{ width: 130, height: 130, marginBottom: 16, margin: '0 auto 16px', display: 'block' }} />
            <h2 style={{ textAlign: 'center' }}>Try it risk-free</h2>
            <p><strong>You don&apos;t have to make the final decision now.</strong></p>
            <p>Get access to the full course. Grab your supplies. Practice on scrap denim. Paint your first real pair. Wear them out and count the compliments.</p>
            <p>If you don&apos;t love it, email hello@katiepaintsjeans.com within 90 days for a full refund. Within 24 hours. <strong>No questions asked.</strong></p>
          </section>

          <div className="bonsai-divider" />

          {/* BONUSES */}
          <section style={{ padding: '36px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 8 }}>You Also Get These</h2>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 24, fontSize: 20 }}>Three bonus resources included with your access:</p>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 1</div><div className="bonus-value">$37 value</div></div>
              <h3>The Jeans Care &amp; Longevity Guide</h3>
              <div className="bonus-desc">How to keep your jeans looking fresh. And how to fix it when things go wrong.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/BONUS1_NEW.webp" alt="The Jeans Care & Longevity Guide" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>The exact washing method</strong> that keeps your design vibrant. Temperature, cycle, and drying settings</li>
                  <li>&#10022; <strong>Heat-setting techniques</strong> that lock paint into the fabric permanently</li>
                  <li>&#10022; <strong>Touch-up guide:</strong> how to refresh a design after heavy wear without repainting the whole thing</li>
                  <li>&#10022; <strong>Paint bleeding or cracking?</strong> The rescue techniques that save your design without starting over</li>
                  <li>&#10022; <strong>15+ common mistakes</strong> with photo examples and step-by-step fixes</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 2</div><div className="bonus-value">$47 value</div></div>
              <h3>The Painted Jeans Business Blueprint</h3>
              <div className="bonus-desc">Turn your new skill into a side hustle or a full business.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/BONUS3_NEW.webp" alt="Painted jeans business" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>How I sell custom painted jeans for $150-400+</strong> per pair on Instagram and Etsy</li>
                  <li>&#10022; <strong>Photographing your work:</strong> how to shoot painted jeans with just your phone so they look professional</li>
                  <li>&#10022; <strong>Setting up an Etsy or Depop shop</strong> with listings that actually convert</li>
                  <li>&#10022; <strong>Taking commissions:</strong> from first DM to final delivery, including deposits, revisions, and shipping</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 3</div><div className="bonus-value">$19 value</div></div>
              <h3>Color Palettes of the 10 Most Famous Artists</h3>
              <div className="bonus-desc">The exact color palettes of 10 celebrated artists, translated into fabric paint colors you can use today.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/BONUS3.jpg" alt="Color Palettes of the 10 Most Famous Artists" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Palettes decoded from Picasso, Da Vinci, Monet, Van Gogh and 6 more,</strong> each mapped to specific fabric paint shades</li>
                  <li>&#10022; <strong>One page per artist:</strong> their signature palette, why it works, and a jeans design painted using only their colors</li>
                  <li>&#10022; <strong>Pick an artist each week,</strong> grab those paints, and paint a pair in their style. The most fun creative challenge you&apos;ll do with this course.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FIRST STACK + CTA */}
          <section style={{ padding: '36px 0' }} id="pricing">
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>

            <div className="stack-row"><span className="label">&#10003; The Jeans Care &amp; Longevity Guide</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; The Painted Jeans Business Blueprint</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; Color Palettes of the 10 Most Famous Artists</span><span className="val">$19</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$242</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(99,71,160,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $242</div>
            <p className="now-only" style={{ color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note" style={{ fontWeight: 600 }}>One-time payment.<br />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, width: '100%' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
              <p style={{ margin: 0, fontWeight: 500, color: 'rgba(26,46,26,0.7)', whiteSpace: 'nowrap' }}>90-Day Money-Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 16 }}>
              <p style={{ color: 'var(--ink-muted)', marginBottom: 4, letterSpacing: '0.05em' }}>🔒 Secure Payment 🔒</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              </div>
            </div>
            <div style={{ width: 56, height: 1, background: 'rgba(0,0,0,0.1)', margin: '16px auto 0' }} />
            <p className="ps-note" style={{ fontStyle: 'italic' }}>P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />

          {/* MEGA BONUS */}
          <section style={{ padding: '80px 0 64px' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8, fontSize: 20 }}>ONE MORE THING...</p>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Order now and you also get:</h2>

            <div className="bonus-card mega">
              <div className="bonus-header"><div className="bonus-label">Mega Bonus</div><div className="bonus-value">$67 value</div></div>
              <h3><MegaBonusBadge text="The Back Pocket Duo: Waves & Rainbow" /></h3>
              <div className="bonus-desc">Paint a matching pair of back pockets that turns every pair of jeans into a statement piece.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/megabonus_new.png" alt="Wave and rainbow painted on back pockets" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Full walkthrough of both pocket designs:</strong> ocean wave on one side, rainbow and clouds on the other</li>
                  <li>&#10022; <strong>Painting realistic waves</strong> with layered blues, teals, and white foam that look like they&apos;re crashing</li>
                  <li>&#10022; <strong>Soft cloud technique:</strong> how to build fluffy, realistic clouds with dry brushing and blending</li>
                  <li>&#10022; <strong>Clean rainbow stripes:</strong> the taping and freehand methods for crisp, even color bands</li>
                  <li>&#10022; <strong>Making both pockets work together</strong> as a cohesive pair that looks intentional, not random</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* FAQ */}
          <section style={{ padding: '40px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Frequently Asked Questions</h2>
            <FaqAccordion />
          </section>

          <div className="bonsai-divider" />

          {/* SECOND STACK + CTA */}
          <section style={{ padding: '36px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>

            <div className="stack-row"><span className="label">&#10003; The Jeans Care &amp; Longevity Guide</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; The Painted Jeans Business Blueprint</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; Color Palettes of the 10 Most Famous Artists</span><span className="val">$19</span></div>
            <div className="stack-row"><span className="label">&#10003; <MegaBonusBadge text="The Back Pocket Duo: Waves & Rainbow" /></span><span className="val">$67</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$309</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(99,71,160,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $309</div>
            <p className="now-only" style={{ color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note" style={{ fontWeight: 600 }}>One-time payment.<br />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, width: '100%' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
              <p style={{ margin: 0, fontWeight: 500, color: 'rgba(26,46,26,0.7)', whiteSpace: 'nowrap' }}>90-Day Money-Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 16 }}>
              <p style={{ color: 'var(--ink-muted)', marginBottom: 4, letterSpacing: '0.05em' }}>🔒 Secure Payment 🔒</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              </div>
            </div>
            <div style={{ width: 56, height: 1, background: 'rgba(0,0,0,0.1)', margin: '16px auto 0' }} />
            <p className="ps-note" style={{ fontStyle: 'italic' }}>P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>


        </div>
      </div>

          {/* FOOTER */}
          <footer className="bonsai-footer" style={{ paddingBottom: 100 }}>
            <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 40px' }}>
              <p>&copy; 2026 Painted Jeans. All rights reserved.</p>
              <p style={{ marginTop: 5 }}><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a></p>
              <p style={{ marginTop: 16, fontSize: 10, maxWidth: 600, margin: '16px auto 0', lineHeight: 1.5, color: 'rgba(125,117,104,0.35)' }}>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
            </div>
          </footer>
    </main>
  );
}
