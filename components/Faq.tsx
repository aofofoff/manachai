import { faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section className="container faq" id="faq" aria-labelledby="faq-heading">
      <header className="section-header">
        <div className="titles">
          <div className="eyebrow">คำถามที่พบบ่อย · FAQ</div>
          <h2 id="faq-heading">
            เรื่องที่ลูกค้า
            <br />
            ถามบ่อย
          </h2>
          <div className="en">Frequently asked questions</div>
        </div>
      </header>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <details className="faq-item" key={i}>
            <summary>{f.q}</summary>
            <div className="faq-a">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
