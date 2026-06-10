import Link from "next/link";

export const metadata = {
  title: "ไม่พบหน้านี้ · Page not found",
};

export default function NotFound() {
  return (
    <main className="notfound" id="main-content">
      <div className="container">
        <div className="eyebrow">404 · ไม่พบหน้านี้</div>
        <h1>
          ไม่พบหน้า
          <br />
          ที่คุณกำลังหา
        </h1>
        <p>
          ลิงก์อาจเปลี่ยนไปหรือพิมพ์ผิด ลองกลับไปหน้าแรกเพื่อเลือกชมสินค้าของเรา ·
          The page you’re looking for moved or doesn’t exist.
        </p>
        <div className="hero-cta-row">
          <Link className="btn btn-primary" href="/">
            กลับหน้าแรก · Back to shop
          </Link>
          <Link className="btn btn-ghost-pill" href="/cafe">
            ไปที่คาเฟ่ · Visit the cafe
          </Link>
        </div>
      </div>
    </main>
  );
}
