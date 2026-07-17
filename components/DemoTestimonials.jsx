'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const TESTIMONIALS = [
  {
    name: 'Peita Diamandtidis',
    title: 'Founder & Advisor',
    company: 'Caboodle Financial',
    img: '/assets/opt/advisors/peita',
    quote: <>Peita shares her experience using MoneyMind as both a lead-gen tool and a behavioral layer within her firm&apos;s advice workflow. The results: a <strong>90% prospect opt-in rate</strong> and a <strong>55% conversion-to-meeting.</strong></>,
    video: '5XFvtEvMnj4',
  },
  {
    name: 'Rachael Yurko',
    title: 'Founder & Advisor',
    company: 'Thrive Financial',
    img: '/assets/opt/advisors/rachael',
    quote: 'Rachael shares her search for something beyond a standard risk profile, and reveals how MoneyMind has significantly enhanced her client conversations, building trust and increasing advice-acceptance rates.',
    video: 'IQ2G8wmMIpg',
  },
  {
    name: 'John Stallman',
    title: 'Founder & Advisor',
    company: 'PlanningIQ + SuperAdvice',
    img: '/assets/opt/advisors/john',
    quote: 'John shares how his firm embeds MoneyMind across their social media, website, and digital advice journey — as both a lead-gen and behavioral layer within their advice workflow.',
    video: 'tARAm1MCi_E',
  },
  {
    name: 'James Trethewie',
    title: 'Financial Advisor',
    company: 'LCI Partners',
    img: '/assets/opt/advisors/james',
    quote: "James shares how he's replaced his firm's traditional risk profile with MoneyMind's powerful insights, which have improved engagement, advice acceptance, and the conversations he has with clients.",
    video: 'REPLACE_ME', // TODO: replace with James's YouTube video ID
  },
  {
    name: 'Natallia Smith',
    title: 'Founder & Advisor',
    company: 'TruWealth Advice',
    img: '/assets/opt/advisors/natallia',
    quote: 'Natallia shares how she uses MoneyMind as a behavioral layer to help women shift their financial mindset, addressing the patterns and blocks that are holding them back.',
    video: 'REPLACE_ME', // TODO: replace with Natallia's YouTube video ID
  },
];

function PlayIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>;
}
function Avatar({ img, name }) {
  return (
    <span className="rd-avatar">
      <picture>
        <source srcSet={`${img}.avif`} type="image/avif" />
        <source srcSet={`${img}.webp`} type="image/webp" />
        <img src={`${img}.jpg`} alt={name} width="52" height="52" loading="lazy" decoding="async" />
      </picture>
    </span>
  );
}

export default function DemoTestimonials() {
  const [active, setActive] = useState(null); // youtube id or null
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dot, setDot] = useState(0);

  const close = useCallback(() => setActive(null), []);

  const step = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector('.rd-quote');
    return card ? card.offsetWidth + 20 : track.clientWidth;
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft < 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    setDot(Math.round(track.scrollLeft / step()));
  }, []);

  const scrollBy = (dir) => { trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' }); };
  const goTo = (i) => { const t = trackRef.current; if (t) t.scrollTo({ left: i * step(), behavior: 'smooth' }); };

  useEffect(() => { update(); window.addEventListener('resize', update); return () => window.removeEventListener('resize', update); }, [update]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active, close]);

  return (
    <>
      <div className="rd-tsection-head">
        <div>
          <span className="eyebrow">What advisors say</span>
          <h2>Real results from real advisors.</h2>
        </div>
        <div className="rd-arrows">
          <button type="button" className="rd-arrow" onClick={() => scrollBy(-1)} disabled={atStart} aria-label="Previous testimonials">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" className="rd-arrow" onClick={() => scrollBy(1)} disabled={atEnd} aria-label="Next testimonials">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="rd-carousel">
        <div className="rd-carousel-track" ref={trackRef} onScroll={update}>
          {TESTIMONIALS.map((t) => (
            <article className="rd-quote" key={t.name}>
              <header className="rd-quote-head">
                <Avatar img={t.img} name={t.name} />
                <div>
                  <div className="rd-quote-name">{t.name}</div>
                  <div className="rd-quote-role">{t.title}</div>
                  <div className="rd-quote-org">{t.company}</div>
                </div>
              </header>
              <p className="rd-quote-body">{t.quote}</p>
              <div className="rd-quote-foot">
                {t.video && (
                  <button type="button" className="rd-watch" onClick={() => setActive(t.video)}>
                    <PlayIcon /> Watch video
                  </button>
                )}
                <span className="rd-quote-len">3 mins</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rd-dots" role="tablist" aria-label="Testimonials">
        {TESTIMONIALS.map((t, i) => (
          <button key={t.name} type="button" className={`rd-dot${dot === i ? ' is-active' : ''}`} onClick={() => goTo(i)} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </div>

      {active && (
        <div className="rd-modal" role="dialog" aria-modal="true" aria-label="Testimonial video" onClick={close}>
          <div className="rd-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="rd-modal-close" onClick={close} aria-label="Close video">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <div className="rd-modal-video">
              <iframe
                src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
                title="MoneyMind advisor testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
