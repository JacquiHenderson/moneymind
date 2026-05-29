import { Icon } from './Icons';

const IconTag = (p) => (
  <Icon {...p}>
    <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z"/>
    <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none"/>
  </Icon>
);
const IconChain = (p) => (
  <Icon {...p}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </Icon>
);
const IconTrash = (p) => (
  <Icon {...p}>
    <path d="M3 6h18"/>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
    <path d="M10 11v6M14 11v6"/>
  </Icon>
);

const ROWS = [
  {
    chips: ['All Sections', 'About You', 'Financial Information', 'Goal Setting',
      'Financial Satisfaction', 'Financial Foundations', 'Financial Decision Making',
      'Risk Profile', 'Risk Comfort', 'Risk Capacity'],
    activeIdx: 0, tags: [], showTrash: false,
  },
  {
    chips: ['Financial Satisfaction', 'Financial Foundations', 'Financial Decision Making'],
    tags: [], showTrash: true,
  },
  {
    chips: ['Learning Style', 'Financial Satisfaction', 'Goal Setting', 'Financial Decision Making', 'Financial Foundations'],
    tags: ['Marketing Campaign 1', 'Social Media'], showTrash: true,
  },
  {
    chips: ['Learning Style', 'Financial Satisfaction', 'Financial Foundations', 'Financial Decision Making'],
    tags: ['Social Media', 'Website'], showTrash: true,
  },
  {
    chips: ['Financial Information', 'Risk Profile'],
    tags: ['MoneyMind Promotion'], showTrash: true,
  },
];

export default function EmbedLink() {
  return (
    <div className="mm-embed">
      <header className="mm-embed-head">
        <h3>Embed Questionnaire Link</h3>
      </header>
      <ul className="mm-embed-rows">
        {ROWS.map((row, i) => (
          <li className="mm-embed-row" key={i}>
            <div className="mm-embed-chips">
              {row.chips.map((c, ci) => (
                <span key={c + ci} className={`mm-embed-chip${row.activeIdx === ci ? ' is-active' : ''}`}>
                  {row.activeIdx === ci && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                      style={{ marginRight: 6 }}>
                      <rect x="4" y="3" width="13" height="18" rx="2"/>
                      <path d="M8 3v18M20 7v14H10"/>
                    </svg>
                  )}
                  {c}
                </span>
              ))}
              {row.tags.length > 0 && (
                <div className="mm-embed-tagrow">
                  {row.tags.map((t) => (
                    <span className="mm-embed-tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="mm-embed-actions">
              <span className="mm-embed-act" aria-label="Tag"><IconTag size={16} stroke={1.6} /></span>
              <span className="mm-embed-act" aria-label="Copy link"><IconChain size={16} stroke={1.6} /></span>
              {row.showTrash && (
                <span className="mm-embed-act" aria-label="Delete"><IconTrash size={16} stroke={1.6} /></span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="mm-embed-footer">
        <button className="mm-embed-cta" type="button">Generate Custom Profile Link</button>
      </div>
    </div>
  );
}
