import RawHtml from './RawHtml.jsx';
const markup = `
<section class="sec bg2" id="conditions">
<div class="wrap">
<span class="kicker">Conditions & Treatments</span>
<h2 class="sec-title">Comprehensive <em>Heart Care Services</em></h2>
<div class="svc-grid">
<div class="svc-c"><div class="svc-h">Chest Pain & Coronary Artery Disease</div><p class="svc-p">Assessment and treatment of chest pain, coronary artery disease, blocked arteries, and heart attack risk using advanced cardiac imaging and interventional cardiology techniques.</p></div>
<div class="svc-c"><div class="svc-h">Hypertension & Preventive Cardiology</div><p class="svc-p">Long-term cardiovascular risk management focused on blood pressure control, cholesterol management, lifestyle optimisation, and prevention of future cardiac events.</p></div>
<div class="svc-c"><div class="svc-h">Heart Valve Disease & TAVI</div><p class="svc-p">Specialised minimally invasive treatment options for aortic stenosis and structural heart disease, including Transcatheter Aortic Valve Implantation (TAVI).</p></div>
<div class="svc-c"><div class="svc-h">Arrhythmia & Cardiac Evaluation</div><p class="svc-p">Comprehensive cardiac assessment for palpitations, irregular heartbeat, shortness of breath, and cardiovascular symptoms requiring specialist evaluation.</p></div>
</div>
</div>
</section>`;
export default function Conditions(){return <RawHtml html={markup} />}
