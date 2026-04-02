'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any art experience or painting skills?',
    a: "None at all. This course is built for complete beginners, including people who haven't painted since elementary school. The techniques use stencils, transfers, and simple brushwork that anyone can follow. You don't need to be able to draw.",
  },
  {
    q: 'How much do supplies cost to get started?',
    a: "Under $25 total. Fabric paint ($8-12), a brush set ($8-10), and fabric medium ($5). The course includes a complete shopping guide with direct links. You do NOT need an airbrush, heat press, or expensive art supplies.",
  },
  {
    q: 'Will you tell me exactly which paints and brushes to buy?',
    a: "Yes. The Complete Supply Guide bonus walks you through every product with direct links. It covers the best fabric paints (Angelus, Jacquard, DecoArt), which brushes you actually need, and which products are a waste of money.",
  },
  {
    q: "Won't the paint crack or wash off?",
    a: "Not if you follow the prep and finishing steps in the course. Module 1 covers the 3-step denim prep method, and Module 4 covers heat setting and sealing. When done correctly, painted jeans last through 50+ washes without cracking, peeling, or fading.",
  },
  {
    q: 'Will the paint fade over time?',
    a: "Not if you seal it properly. Module 4 covers heat setting and sealant options that lock the paint in. With the right finishing steps, your design stays vibrant through years of regular wear and washing.",
  },
  {
    q: 'How long does it take to paint a pair of jeans?',
    a: "A simple design takes 2-4 hours. A more detailed piece might take a full afternoon or be spread across a weekend. The course teaches you designs at every complexity level so you can start simple and work your way up.",
  },
  {
    q: 'Can I use any jeans or do I need a specific type?',
    a: "Any jeans work — old, new, thrift store, any wash. Light wash denim shows colors best, but dark wash creates a different dramatic look. The course covers how to choose and prep any type of denim for the best results.",
  },
  {
    q: "What if I mess up? Can I fix mistakes?",
    a: "Yes. The Mistake-Fixing Toolkit bonus covers every common mistake with step-by-step fixes. Paint bleeding? Fixable. Wrong color? Layer over it. And since you practice on scrap denim first in Module 1, you'll have confidence before touching your real jeans.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money-back guarantee. Try the entire course. Paint your first pair. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
  },
  {
    q: 'How is the content delivered?',
    a: "Instant access to our private course platform. All video lessons and downloadable PDFs organized by module. Watch on any device: phone, tablet, or computer. Lifetime access, so go at your own pace. There's no schedule and no expiration.",
  },
  {
    q: 'Is it safe to purchase online?',
    a: "Yes. Payments are processed through Stripe, the same secure payment platform used by millions of businesses worldwide (including Amazon, Google, and Shopify). We never see your card details.",
  },
  {
    q: 'Have a specific question?',
    a: "Email us at hello@katiepaintsjeans.com and we'll get back to you as soon as possible.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            type="button"
          >
            <span className="faq-q-text">{faq.q}</span>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="faq-answer-inner">
              <p className="faq-a">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
