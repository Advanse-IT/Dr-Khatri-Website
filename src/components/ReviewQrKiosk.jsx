// Standalone, unlisted kiosk display -- meant to be left open full-screen on
// a clinic iPad/monitor so patients can scan on their way out. No nav links
// point here on purpose; access it directly via /review-qr.
export default function ReviewQrKiosk() {
  return (
    <div className="kiosk-qr-page">
      <img
        className="kiosk-qr-img"
        src="/images/leave-a-review-qr.png"
        alt="Scan to leave a review for Dr Shailesh Khatri"
      />
    </div>
  );
}
