const effectiveDate = '22 May 2026';

export default function LegalNotice() {
  return (
    <section id="legal" className="legal-hub a" aria-labelledby="legal-title">
      <div className="wrap">
        <div className="legal-card">
          <p className="eyebrow">Website information</p>
          <h2 id="legal-title">Privacy, terms and medical information notice</h2>
          <p className="legal-intro">
            This information is provided for patients and visitors using this website. It is general in nature and should be reviewed by the practice owner or a qualified Australian legal/privacy adviser before publication.
          </p>

          <div className="legal-grid">
            <article id="medical-disclaimer" className="legal-item">
              <h3>Medical disclaimer</h3>
              <p>
                Content on this website is for general information only. It is not a substitute for professional medical advice, diagnosis or treatment and does not create a doctor-patient relationship.
              </p>
              <p>
                If you have chest pain, severe shortness of breath, collapse symptoms or another urgent concern, call <strong>000</strong> or attend the nearest emergency department.
              </p>
            </article>

            <article id="privacy-policy" className="legal-item">
              <h3>Privacy policy</h3>
              <p>
                Information submitted through this website, including enquiries or appointment requests, may be used to respond to your enquiry, manage bookings, improve services and maintain records where required.
              </p>
              <p>
                This website may use analytics, hosting logs and cookies to understand website performance and visitor behaviour. Do not submit urgent or highly sensitive medical information through website forms.
              </p>
            </article>

            <article id="terms-conditions" className="legal-item">
              <h3>Terms &amp; conditions</h3>
              <p>
                By using this website, you agree that the information is provided on an “as is” basis for general educational purposes. While reasonable care is taken, no warranty is given that all information is complete, current or suitable for your circumstances.
              </p>
              <p>
                External links, maps and third-party services are provided for convenience and are governed by their own terms and privacy policies.
              </p>
            </article>

            <article id="cookies" className="legal-item">
              <h3>Cookies</h3>
              <p>
                Cookies and similar technologies may be used to remember preferences, support basic site functionality and measure website usage. You can control cookies through your browser settings.
              </p>
              <p className="updated">Effective date: {effectiveDate}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
