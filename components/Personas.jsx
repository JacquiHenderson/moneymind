import { Icon } from './Icons';

const GlyphShield = (p) => (
  <Icon {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="M12 8v8" />
    <path d="M9 11h6" />
  </Icon>
);
const GlyphSprout = (p) => (
  <Icon {...p}>
    <path d="M12 20v-7" />
    <path d="M5 8c0 3 3 5 7 5s7-2 7-5c0-1-2-3-4-3-3 0-3 3-3 3s0-3-3-3c-2 0-4 2-4 3Z" />
  </Icon>
);
const GlyphAnxious = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 10c.5-.5 1-1 2-1" />
    <path d="M14 9c1 0 1.5.5 2 1" />
    <path d="M9 16c.8-.6 1.8-1 3-1s2.2.4 3 1" />
  </Icon>
);
const GlyphBolt = (p) => (
  <Icon {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Icon>
);
const GlyphSearch = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-4.3-4.3" />
  </Icon>
);
const GlyphWave = (p) => (
  <Icon {...p}>
    <path d="M3 10c2 0 3-2 5-2s3 2 5 2 3-2 5-2 2 1 3 1" />
    <path d="M3 15c2 0 3-2 5-2s3 2 5 2 3-2 5-2 2 1 3 1" />
  </Icon>
);
const GlyphScales = (p) => (
  <Icon {...p}>
    <path d="M12 4v16" />
    <path d="M6 20h12" />
    <path d="M4 9h6l-3 6a3 3 0 0 0 6 0Z" />
    <path d="M14 9h6l-3 6a3 3 0 0 0 6 0Z" />
  </Icon>
);

const PERSONAS = [
  { n: '01', glyph: GlyphShield,  title: 'The Security Seeker',
    body: 'Consistent savers who under-invest in growth — security matters more than returns.',
    driver: 'Loss-Aversion Driven' },
  { n: '02', glyph: GlyphSprout,  title: 'The Confident Grower',
    body: 'Long-term thinker who invests consistently — but overconfidence creates costly blind spots.',
    driver: 'Opportunity-Driven' },
  { n: '03', glyph: GlyphAnxious, title: 'The Anxious Avoider',
    body: 'Anxiety creates a self-reinforcing avoidance loop that prevents financial progress.',
    driver: 'Anxiety-Driven' },
  { n: '04', glyph: GlyphBolt,    title: 'The Impulsive Optimist',
    body: 'Enthusiastic and engaged — but impulsive decisions and lifestyle inflation quietly erode results.',
    driver: 'Action-Driven' },
  { n: '05', glyph: GlyphSearch,  title: 'The Informed Analyst',
    body: 'Researches thoroughly before deciding — but analysis paralysis means decisions never happen.',
    driver: 'Logic-Driven' },
  { n: '06', glyph: GlyphWave,    title: 'The Present-Focused Drifter',
    body: 'Focused on today, not tomorrow — good intentions rarely convert to financial action.',
    driver: 'Present-Biased' },
  { n: '07', glyph: GlyphScales,  title: 'The Pragmatic Moderate',
    body: 'Manages money adequately — but consistent small gaps quietly compound into a large shortfall.',
    driver: 'Balanced Profile' },
];

export default function Personas() {
  return (
    <div className="mm-personas">
      <div className="mm-personas-grid">
        {PERSONAS.map((p) => {
          const Glyph = p.glyph;
          return (
            <article className="mm-persona-card" key={p.n}>
              <span className="mm-persona-num">{p.n}</span>
              <div className="mm-persona-icon">
                <Glyph size={22} stroke={1.6} />
              </div>
              <h4 className="mm-persona-title">{p.title}</h4>
              <p className="mm-persona-body">{p.body}</p>
              <div className="mm-persona-divider"></div>
              <span className="mm-persona-driver">
                <span className="mm-persona-dot"></span>
                {p.driver}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
