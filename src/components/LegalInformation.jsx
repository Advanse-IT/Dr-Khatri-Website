import RawHtml from './RawHtml.jsx';

const markup = `
<section class="legal-info" id="legal-information" aria-labelledby="legal-info-title">
  <div class="wrap">
    <div class="legal-card">
      <p class="eyebrow">Website Information</p>
      <h2 id="legal-info-title">Privacy Policy, Terms of Use &amp; Medical Disclaimer</h2>
      <p class="legal-intro">
        The information below explains how this website should be used, how privacy is approached,
        and the important limitations of online medical information.
      </p>

      <div class="legal-grid">
        <article>
          <h3>Privacy Policy</h3>
          <p>
            This website may collect information that you voluntarily provide, such as your name,
            phone number, email address, appointment enquiry details or message content. This
            information is used to respond to enquiries, support appointment-related communication
            and improve the website experience.
          </p>
          <p>
            Please do not submit urgent, highly sensitive or detailed clinical information through
            website forms. For clinical matters, contact the practice directly. For emergencies,
            call <strong>000</strong>.
          </p>
        </article>

        <article>
          <h3>Terms of Use</h3>
          <p>
            This website is provided for general information only. By using this website, you agree
            that the content is not a substitute for professional medical advice, diagnosis or
            treatment and should not be relied on as personalised clinical guidance.
          </p>
          <p>
            Website content may be updated or changed without notice. While reasonable care is taken
            to present accurate information, no guarantee is made that all information is complete,
            current or suitable for your individual circumstances.
          </p>
        </article>

        <article>
          <h3>Medical Disclaimer</h3>
          <p>
            The information on this website is general in nature and does not create a doctor-patient
            relationship. Always seek advice from your GP, specialist or other qualified healthcare
            professional about your health concerns.
          </p>
          <p>
            Patient experiences, reviews or testimonials, where shown, reflect individual experiences
            and do not guarantee or represent expected outcomes for every patient.
          </p>
        </article>

        <article>
          <h3>Cookies &amp; Website Analytics</h3>
          <p>
            This website may use cookies or similar technologies to support core site functionality,
            understand website usage and improve performance. You can adjust cookie settings through
            your browser at any time.
          </p>
          <p>
            Analytics information is generally aggregated and does not replace direct clinical
            communication with the practice.
          </p>
        </article>
      </div>

      <p class="legal-note">
        Last updated: May 2026. This notice is general website wording and should be reviewed by an
        Australian legal/privacy professional for practice-specific compliance.
      </p>
    </div>
  </div>
</section>
`;

export default function LegalInformation() {
  return <RawHtml html={markup} />;
}
