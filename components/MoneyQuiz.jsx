const PhoneFrame = ({ tone = 'dark', children, label, ratio }) => (
  <div className={`mm-mq-phone tone-${tone}`} aria-label={label}>
    <div className="mm-mq-phone-bezel">
      <div className="mm-mq-phone-screen" style={ratio ? { aspectRatio: ratio } : undefined}>
        <div className="mm-mq-phone-island"></div>
        {children}
      </div>
    </div>
  </div>
);

const PhoneShot = ({ src, alt }) => (
  <picture>
    <source srcSet={`${src}.avif`} type="image/avif" />
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img
      className="mm-mq-shot"
      src={`${src}.jpg`}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  </picture>
);

export default function MoneyQuiz() {
  return (
    <div className="mm-mq">
      <div className="mm-mq-stage-row">
        <PhoneFrame tone="dark" ratio="800 / 1557" label="MoneyMind app building a client's MoneyPattern">
          <PhoneShot
            src="/assets/opt/product/quiz-moneypattern"
            alt="MoneyMind app building a client's MoneyPattern, showing progress through the four sections"
          />
        </PhoneFrame>
        <PhoneFrame tone="dark" ratio="800 / 1557" label="MoneyMind action plan screen">
          <PhoneShot
            src="/assets/opt/product/quiz-actionplan"
            alt="MoneyMind app showing a client's personalized action plan"
          />
        </PhoneFrame>
      </div>
    </div>
  );
}
