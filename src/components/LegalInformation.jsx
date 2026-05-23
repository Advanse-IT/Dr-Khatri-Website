import RawHtml from './RawHtml.jsx';

const markup = `
<section class="legal-info" id="legal-information" aria-labelledby="legal-info-title">
  <div class="wrap">
    <div class="legal-card">
      <p class="eyebrow">Website Information</p>
      <h2 id="legal-info-title">Privacy Policy, Terms of Use &amp; Medical Disclaimer</h2>
      <p class="legal-intro">
        This website provides general information about Dr Shailesh Khatri's cardiac services and is designed to support patient education and appointment enquiries. Please read the following important information carefully.
      </p>

      <div class="legal-grid">
        <article>
          <h3>AHPRA Compliance &amp; Medical Advertising</h3>
          <p>
            This website complies with the Australian Health Practitioner Regulation Agency (AHPRA) Guidelines for Advertising Regulated Health Services and the Health Practitioner Regulation National Law. All information presented is factual, verifiable and does not make unsubstantiated claims about treatment outcomes.
          </p>
          <p>
            Dr Shailesh Khatri is registered with AHPRA as a Medical Practitioner (Registration No. available upon request). Patient testimonials and reviews are not displayed on this site. Independent reviews are linked to third-party platforms only (e.g., RateMDs).
          </p>
        </article>

        <article>
          <h3>GP Referral &amp; Medicare Requirements</h3>
          <p>
            As a specialist cardiologist, Dr Khatri requires a valid GP referral for all consultations. Your GP will assess your symptoms, arrange initial diagnostic tests, and provide a referral to Dr Shailesh Khatri. This is a legal requirement under the Medicare Benefits Schedule (MBS) to access specialist services.
          </p>
          <p>
            To schedule an appointment, contact the practice on <strong>(07) 5598 0322</strong> with your GP referral. Consultations are provided at John Flynn Specialist Suites (Tugun) and Pindara Private Hospital (Benowa).
          </p>
        </article>

        <article>
          <h3>Medical Disclaimer</h3>
          <p>
            The information on this website is general in nature and <strong>does not create a doctor-patient relationship</strong>. Website content is not a substitute for professional medical advice, diagnosis or treatment. Always seek advice from your GP, specialist or other qualified healthcare professional about your individual health concerns.
          </p>
          <p>
            Patient experiences, reviews or case studies, where shown, reflect individual experiences and do not guarantee or represent expected outcomes for every patient. Medical outcomes vary based on individual health status, comorbidities and other factors.
          </p>
          <p>
            <strong style="color:#c49a38">For life-threatening cardiac emergencies, call 000 immediately.</strong> Do not rely on this website for emergency medical information.
          </p>
        </article>

        <article>
          <h3>Terms of Use</h3>
          <p>
            This website is provided for general information and educational purposes only. By accessing this website, you agree that:
          </p>
          <ul style="margin-left:20px;margin-top:10px">
            <li>The content is not a substitute for professional medical advice or treatment.</li>
            <li>Website content may be updated or changed without notice.</li>
            <li>While reasonable care is taken to present accurate information, no guarantee is made that all information is complete, current or suitable for your individual circumstances.</li>
            <li>You will not rely on this website for clinical decision-making without consulting your healthcare provider.</li>
          </ul>
        </article>

        <article>
          <h3>Privacy Policy &amp; Data Protection</h3>
          <p>
            This website may collect information that you voluntarily provide, such as your name, phone number, email address, appointment enquiry details or message content. This information is used to respond to enquiries, support appointment-related communication and improve the website experience.
          </p>
          <p>
            Your personal information is handled in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>. We do not share your information with third parties without your consent, except where required by law.
          </p>
          <p>
            <strong>Important:</strong> Do not submit urgent, highly sensitive or detailed clinical information through website forms. For clinical matters, contact the practice directly on (07) 5598 0322. For emergencies, call 000.
          </p>
        </article>

        <article>
          <h3>Cookies &amp; Website Analytics</h3>
          <p>
            This website may use cookies or similar technologies to support core site functionality, understand website usage and improve performance. Analytics information is generally aggregated and does not identify individual users.
          </p>
          <p>
            You can adjust cookie settings through your browser at any time. Disabling cookies may affect certain website features.
          </p>
        </article>

        <article>
          <h3>Intellectual Property &amp; Content Use</h3>
          <p>
            All content on this website, including text, images, logos and design elements, is the intellectual property of Dr Shailesh Khatri or licensed third parties. You may view and download content for personal, non-commercial use only. Reproduction, distribution or commercial use of website content without permission is prohibited.
          </p>
        </article>

        <article>
          <h3>Links to External Websites</h3>
          <p>
            This website may contain links to external websites for informational purposes. Dr Shailesh Khatri is not responsible for the content, accuracy or practices of external websites. Links do not imply endorsement of external content.
          </p>
        </article>
      </div>

      <p class="legal-note">
        <strong>Last updated: May 2026.</strong> This website information is provided in good faith and reflects current Australian medical advertising and privacy regulations. However, this notice is general website wording and should be reviewed by an Australian legal and privacy professional for practice-specific compliance requirements. For specific legal or privacy concerns, please contact the practice directly.
      </p>
    </div>
  </div>
</section>
`;

export default function LegalInformation() {
  return <RawHtml html={markup} />;
}
