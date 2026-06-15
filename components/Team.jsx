const MM_INSTAGRAM = 'https://www.instagram.com/moneymind_profile/';
const MM_FACEBOOK = 'https://www.facebook.com/people/MoneyMind/61577449349777/';

const TEAM = [
  {
    name: 'Jacqui Henderson',
    role: 'CEO & Founder',
    bio: 'CEO and thought leader in fintech, with 20+ years across tech and wealth management. Her passion for behavioural science initiated MoneyMind.',
    img: '/assets/opt/team/jacqui-henderson',
    imgExt: 'jpg',
    pos: '50% 18%',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jacqui-henderson1',
      instagram: MM_INSTAGRAM,
      facebook: MM_FACEBOOK,
    },
  },
  {
    name: 'Ash Crick',
    role: 'CTO',
    bio: 'A highly regarded fractional tech leader with three decades in enterprise platforms, AI, and startups — from major banks to pioneering enterprise AI.',
    img: '/assets/opt/team/ash-crick',
    imgExt: 'png',
    pos: '50% 25%',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ashcrick/',
    },
  },
  {
    name: 'Dr Katherine Hunt',
    role: 'Chief of Research & Founder',
    bio: 'Combines academia and practice: Bachelor of Psychology, Bachelor of Commerce, PhD in Law & Economics, and Financial Planning. Her work initiated MoneyMind.',
    img: '/assets/opt/team/katherine-hunt',
    imgExt: 'jpg',
    pos: '50% 22%',
    socials: {
      linkedin: 'https://www.linkedin.com/in/drkatherinehunt/',
    },
  },
];

const SOCIAL_ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.98c-3.14 0-3.51.01-4.75.07-.86.04-1.32.18-1.63.3-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.12.31-.26.77-.3 1.63-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.86.18 1.32.3 1.63.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.12.77.26 1.63.3 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.86-.04 1.32-.18 1.63-.3.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.12-.31.26-.77.3-1.63.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.86-.18-1.32-.3-1.63a2.72 2.72 0 0 0-.66-1.01 2.72 2.72 0 0 0-1.01-.66c-.31-.12-.77-.26-1.63-.3-1.24-.06-1.61-.07-4.75-.07zm0 3.37a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98zm0 7.4a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82zm5.72-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z"/>
    </svg>
  ),
};

export default function Team() {
  return (
    <section className="mm-section mm-team" id="team" data-screen-label="Team">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">Our team</span>
          <h2>Passionate. Dedicated. Thought leaders.</h2>
        </div>

        <div className="mm-team-grid">
          {TEAM.map((p, i) => (
            <article className="mm-team-card" key={i}>
              <div className="mm-team-thumb">
                <picture>
                  <source srcSet={`${p.img}.avif`} type="image/avif" />
                  <source srcSet={`${p.img}.webp`} type="image/webp" />
                  <img src={`${p.img}.${p.imgExt}`} alt={`${p.name}, ${p.role}`}
                    width="104" height="104" loading="lazy" decoding="async"
                    style={{ objectPosition: p.pos }} />
                </picture>
              </div>
              <h4 className="mm-team-name">{p.name}</h4>
              <span className="mm-team-role">{p.role}</span>
              <p className="mm-team-bio">{p.bio}</p>
              <div className="mm-team-socials">
                {['linkedin', 'instagram', 'facebook'].map((net) =>
                  p.socials && p.socials[net] ? (
                    <a key={net} href={p.socials[net]} target="_blank" rel="noopener noreferrer"
                      aria-label={`${p.name} on ${net.charAt(0).toUpperCase() + net.slice(1)}`}>
                      {SOCIAL_ICONS[net]}
                    </a>
                  ) : null
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
