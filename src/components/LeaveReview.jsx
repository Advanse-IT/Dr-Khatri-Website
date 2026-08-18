import { useState } from 'react';

// ─── CONFIG — update these before deploying ──────────────────────────────
// Find your Google Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
const GOOGLE_PLACE_ID = 'REPLACE_WITH_GOOGLE_PLACE_ID';
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
const RATEMDS_URL = 'https://www.ratemds.com/doctor-ratings/114846/Dr-Shailesh-Khatri-Gold+Coast-QLD.html/';
const PRACTICE_PHONE_DISPLAY = '(07) 5598 0322';
const PRACTICE_PHONE_TEL = 'tel:+61755980322';

const LABELS = ['', 'Poor', 'Below Average', 'Average', 'Good', 'Excellent'];

export default function LeaveReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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

          {isPositive && (
            <div className="review-result review-result-positive">
              <p>
                Wonderful to hear! Would you be willing to share a quick review on one of the
                platforms below? It only takes a minute and genuinely helps other patients find
                trusted cardiac care.
              </p>
              <div className="review-cta-row">
                <a className="btn btn-gold" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                  Leave a Google Review →
                </a>
                <a className="btn btn-outline" href={RATEMDS_URL} target="_blank" rel="noopener noreferrer">
                  Leave a RateMDs Review →
                </a>
              </div>
            </div>
          )}

          {isNegative && (
            <div className="review-result review-result-negative">
              <p>
                We're sorry your experience wasn't what it should have been. We'd genuinely like
                the chance to understand what happened and make it right — please call our team
                directly so we can help.
              </p>
              <a className="btn btn-navy review-call-btn" href={PRACTICE_PHONE_TEL}>
                Call the Practice — {PRACTICE_PHONE_DISPLAY}
              </a>
              <p className="review-secondary-note">
                You're also welcome to share your feedback publicly on{' '}
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Google</a>
                {' '}or{' '}
                <a href={RATEMDS_URL} target="_blank" rel="noopener noreferrer">RateMDs</a>.
              </p>
            </div>
          )}
        </div>

        <div className="reviews-notice review-ahpra-notice">
          <p className="rn-p">
            <strong>AHPRA Compliance:</strong> In accordance with Australian Health Practitioner
            Regulation Agency advertising guidelines, this page does not collect, store, or display
            patient testimonials. It only directs you to independent third-party review platforms,
            or to our practice directly.
          </p>
        </div>
      </div>
    </section>
  );
}
