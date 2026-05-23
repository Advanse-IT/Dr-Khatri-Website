import RawHtml from './RawHtml.jsx';
const markup = `
<section class="sec" id="education">
<div class="wrap">
<span class="kicker">Patient Education</span>
<h2 class="sec-title">Understanding <em>Cardiovascular Health</em></h2>
<div class="svc-grid">
<a class="svc-c" href="/patient-education/angiogram-vs-angioplasty"><div class="svc-h">Angiogram vs Angioplasty</div><p class="svc-p">Understand the difference between diagnostic coronary angiography and treatment with angioplasty and stenting.</p><span class="text-link">Read guide</span></a>
<a class="svc-c" href="/patient-education/when-to-see-a-cardiologist"><div class="svc-h">When Should You See a Cardiologist?</div><p class="svc-p">Persistent chest discomfort, shortness of breath, palpitations, dizziness, hypertension, or family history may require specialist assessment.</p><span class="text-link">Read guide</span></a>
<a class="svc-c" href="/patient-education/warning-signs-of-heart-disease"><div class="svc-h">Warning Signs of Heart Disease</div><p class="svc-p">Learn common symptoms and risk factors that should be reviewed by a GP, cardiologist or emergency team.</p><span class="text-link">Read guide</span></a>
</div>
<div style="text-align:center;margin-top:28px"><a class="btn btn-ghost dark" href="/patient-education">View all patient education</a></div>
</div>
</section>`;
export default function Education(){return <RawHtml html={markup} />}
