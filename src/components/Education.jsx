import RawHtml from './RawHtml.jsx';
const markup = `
<section class="sec" id="education">
<div class="wrap">
<span class="kicker">Patient Education</span>
<h2 class="sec-title">Understanding <em>Cardiovascular Health</em></h2>
<div class="svc-grid">
<div class="svc-c"><div class="svc-h">What Is Coronary Angioplasty?</div><p class="svc-p">Coronary angioplasty is a minimally invasive procedure used to open narrowed or blocked coronary arteries and restore healthy blood flow to the heart muscle.</p></div>
<div class="svc-c"><div class="svc-h">When Should You See a Cardiologist?</div><p class="svc-p">Persistent chest discomfort, shortness of breath, palpitations, dizziness, hypertension, or a family history of heart disease may require specialist cardiac assessment.</p></div>
<div class="svc-c"><div class="svc-h">Preventing Heart Disease</div><p class="svc-p">Early diagnosis, lifestyle management, blood pressure control, cholesterol optimisation, and regular cardiac review are important in reducing cardiovascular risk.</p></div>
</div>
</div>
</section>`;
export default function Education(){return <RawHtml html={markup} />}
