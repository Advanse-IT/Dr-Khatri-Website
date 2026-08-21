import { useState } from 'react';

// ─── CONFIG — update these before deploying ──────────────────────────────
const GOOGLE_PLACE_ID = 'ChIJffwNJPcBkWsRjfjFUZVZyp0';
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
const PRACTICE_PHONE_DISPLAY = '(07) 5598 0322';
const PRACTICE_PHONE_TEL = 'tel:+61755980322';

const LABELS = ['', 'Poor', 'Below Average', 'Average', 'Good', 'Excellent'];

export default function LeaveReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);

  const active = hover || rating;
  const isPositive = rating >= 4;
  const isNegative = rating > 0 && rating <= 3;

  return (
    <section className="sec bg2 review-page" id="leave-a-review">
      <div className="wrap review-wrap">
        <div style={{ textAlign: 'center', marginBottom: 6 }}>
          <span className="kicker center">Share Your Experience</span>
        </div>
        <h1 className="sec-title" style={{ textAlign: 'center', marginBottom: 6 }}>
          How Was Your Visit With <em>Dr Khatri?</em>
        </h1>
        <p className="sec-lead" style={{ textAlign: 'center', margin: '0 auto 32px', maxWidth: 640 }}>
          Your feedback helps other patients on the Gold Coast find the right cardiologist,
          and helps our team keep improving your care experience.
        </p>

        <div className="review-card">
          {/* ── Step 1: pick a rating and explicitly submit it ── */}
          <fieldset className="review-step" disabled={submitted}>
            <div className="star-rating" role="radiogroup" aria-label="Rate your experience out of 5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`star-btn${n <= active ? ' filled' : ''}`}
                  role="radio"
                  aria-checked={rating === n}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </button>
              ))}
            </div>
            <div className="star-label">{active ? LABELS[active] : 'Tap a star to rate your experience'}</div>

            {!submitted && (
              <button
                type="button"
                className="btn btn-navy review-submit-btn"
                disabled={rating === 0}
                onClick={() => setSubmitted(true)}
              >
                Submit Rating
              </button>
            )}
          </fieldset>

          {/* ── Step 2: confirmation the rating was received, then an explicit,
               separate offer to also leave a public review — never both at once ── */}
          {submitted && !closed && (
            <div className="review-result">
              <div className="review-confirm">
                <span className="review-confirm-tick">✓</span>
                <span>Thanks — your rating has been submitted.</span>
              </div>

              {isPositive && (
                <>
                  <p>Would you also like to share a quick public review on Google? It only takes a minute and genuinely helps other patients find trusted cardiac care.</p>
                  <div className="review-cta-row">
                    <a className="btn btn-gold" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                      Leave a Google Review →
                    </a>
                    <button type="button" className="btn btn-outline" onClick={() => setClosed(true)}>
                      No Thanks, I'm Done
                    </button>
                  </div>
                </>
              )}

              {isNegative && (
                <>
                  <p>
                    We're sorry your experience wasn't what it should have been. We'd genuinely
                    like the chance to understand what happened and make it right — please call
                    our team directly so we can help.
                  </p>
                  <a className="btn btn-navy review-call-btn" href={PRACTICE_PHONE_TEL}>
                    Call the Practice — {PRACTICE_PHONE_DISPLAY}
                  </a>
                  <p className="review-secondary-note">
                    You're also welcome to share your feedback publicly on{' '}
                    <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Google</a>.
                  </p>
                </>
              )}
            </div>
          )}

          {/* ── Final closing state, only reached via "No Thanks, I'm Done" ── */}
          {closed && (
            <div className="review-result">
              <div className="review-confirm">
                <span className="review-confirm-tick">✓</span>
                <span>All done — thank you for your feedback!</span>
              </div>
            </div>
          )}
        </div>

        <div className="reviews-notice review-ahpra-notice">
          <p className="rn-p">
            <strong>AHPRA Compliance:</strong> In accordance with Australian Health Practitioner
            Regulation Agency advertising guidelines, this page does not collect, store, or display
            patient testimonials. It only directs you to an independent third-party review platform,
            or to our practice directly.
          </p>
        </div>
      </div>
    </section>
  );
}
