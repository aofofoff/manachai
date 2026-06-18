import Image from "next/image";
import {
  roastedCashews,
  charcoalCashews,
  otherNuts,
  shrimpPastes,
  promoSets,
} from "@/lib/content";
import { LINE_URL, FACEBOOK_URL, GOOGLE_MAPS_URL } from "@/lib/links";
import { ImageSlot } from "./ImageSlot";
import { ProductCard } from "./ProductCard";
import { Faq } from "./Faq";
import { OpenStatus } from "./OpenStatus";

export function NutShop() {
  return (
    <>
      {/* HERO */}
      <section className="nut-hero">
        <div className="container">
          <div className="nut-hero-grid">
            <div>
              <div className="eyebrow">ระนอง · ตั้งแต่ปี 2524</div>
              <h1>
                มานะชัย
                <br />
                เม็ดมะม่วงหิมพานต์
                <span className="accent">กาหยู ระนอง</span>
                <span className="accent">Manachai cashews from Ranong</span>
              </h1>
              <p className="subtitle-en">Hand-Roasted Thai Cashews · Since 1981</p>
              <p className="intro">
                เม็ดมะม่วงหิมพานต์คั่วมือ คัดเกรดพรีเมียม จากระนอง
                ส่งตรงถึงคุณเหมือนวันแรกที่เปิดร้านเมื่อ 45 ปีก่อน
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-primary" href="#products">
                  ดูสินค้าทั้งหมด · Shop Cashews
                </a>
                <a
                  className="btn btn-ghost-pill"
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="สั่งซื้อทางไลน์ · Order via LINE"
                >
                  สั่งซื้อทางไลน์ · Order on LINE
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <span className="hero-badge">Super Jumbo · Limited</span>
              <ImageSlot
                placeholder="วางภาพเม็ดมะม่วงหิมพานต์ที่นี่ · Drop hero photo"
                src="/images/hero.JPG"
                alt="เม็ดมะม่วงหิมพานต์มานะชัย · Manachai cashews"
                priority
              />
            </div>
          </div>

          <div className="hero-meta-strip">
            <div className="item">
              <div className="num">45+</div>
              <div className="label-th">ปีของฝีมือคั่วเม็ด</div>
              <div className="label-en">Years roasting by hand</div>
            </div>
            <div className="item">
              <div className="num">100%</div>
              <div className="label-th">เม็ดคัดจากระนอง</div>
              <div className="label-en">Sourced in Ranong, Thailand</div>
            </div>
            <div className="item">
              <div className="num">10+</div>
              <div className="label-th">รสชาติและเมล็ดให้เลือก</div>
              <div className="label-en">Cashew flavours · seeds · pastes</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BAND — Super Jumbo */}
      <section className="container">
        <div className="promo-band">
          <div>
            <div className="eyebrow">เม็ดเรือธง · Our Flagship</div>
            <h2>
              เม็ดมะม่วงหิมพานต์เผามีเปลือก
              <br />
              เม็ด Super Jumbo
            </h2>
            <p className="subtitle">Super Jumbo grade · charcoal-roasted in shell</p>
            <p className="body">
              เม็ดมะม่วงหิมพานต์ไซส์ใหญ่ที่สุดของเรา คัดเฉพาะเม็ดสมบูรณ์ที่สุด
              เผาคั่วเกลือทั้งเปลือกในสูตรดั้งเดิม กระเทาะเองเหมือนกินที่ร้านสมัยอากง
            </p>
            <div className="price-block">
              <div className="promo">
                ฿280<small>/500g</small>
              </div>
              <div className="save-pill">Best Value</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
                marginBottom: 32,
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <span>150g · ฿90</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>300g · ฿180</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>
                <strong style={{ color: "var(--color-primary-on-dark)", fontWeight: 600 }}>
                  500g · ฿280
                </strong>
              </span>
            </div>
            <a
              className="btn btn-store-hero"
              href={LINE_URL}
              target="_blank"
              rel="noopener"
              aria-label="สั่งซื้อ Super Jumbo ทางไลน์ · Order Super Jumbo on LINE"
            >
              สั่งซื้อ Super Jumbo ทางไลน์ →
            </a>
          </div>
          <div className="promo-photo">
            <ImageSlot
              placeholder="ภาพกระปุก Super Jumbo · Product hero"
              src="/images/cashew-roasted-shell.jpg"
              alt="เม็ดมะม่วงหิมพานต์เผามีเปลือก Super Jumbo"
            />
          </div>
        </div>
      </section>

      {/* PROMO SETS */}
      <section className="container" id="promo-sets">
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">โปรโมชั่นเซ็ต · Bundle Deals</div>
            <h2>
              เซ็ตคุ้ม
              <br />
              จัดให้แล้ว
            </h2>
            <div className="en">Curated sets · Better value</div>
          </div>
          <p className="lede">รวมสินค้าขายดีในเซ็ตเดียว เหมาะทั้งซื้อกินเองและเป็นของฝาก</p>
        </header>

        <div className="promo-set-list">
          {promoSets.map((s) => (
            <article className="promo-set-card" key={s.id}>
              <div className="set-photo">
                <ImageSlot placeholder={s.placeholder} src={s.image} alt={s.nameEn} />
                <span className={s.badgeAmber ? "set-badge set-badge--amber" : "set-badge"}>
                  {s.badge}
                </span>
              </div>
              <div className="set-body">
                <div className="eyebrow">{s.no}</div>
                <h3 className="set-name-th">{s.nameTh}</h3>
                <div className="set-name-en">{s.nameEn}</div>
                <p className="set-desc">{s.desc}</p>
                <ul className="set-items">
                  {s.items.map((it, i) => (
                    <li key={i}>
                      <span className="item-pill">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="set-price-row">
                  <div className="set-price">
                    <div className="set-price-label">ราคาเซ็ต · Set Price</div>
                    <div className="set-price-val">
                      {s.price}
                      <small>/เซ็ต</small>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary"
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener"
                    aria-label={`สั่งซื้อ ${s.nameTh} ทางไลน์`}
                  >
                    สั่งเซ็ตนี้ทางไลน์ →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="container" id="products">
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">สินค้าของเรา · The Lineup</div>
            <h2>
              เม็ดมะม่วงหิมพานต์ระนอง
              <br />
              หลายขนาด หลายรส
            </h2>
            <div className="en">Cashews · Nuts · Seeds · Pastes</div>
          </div>
          <p className="lede">
            ทุกถุงคั่วทีละล็อตเล็ก เลือกขนาดตามที่ต้องการ ราคาเดียวกันที่หน้าร้านและสั่งทางไลน์
          </p>
        </header>

        <div className="product-grid">
          <div className="subcategory-head">
            <h3>เม็ดมะม่วงหิมพานต์คั่ว · Roasted Cashews</h3>
            <span className="en">3 flavours · 3 sizes</span>
          </div>
          {roastedCashews.map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}

          <div className="subcategory-head">
            <h3>เม็ดมะม่วงหิมพานต์เผา · Charcoal-Roasted Cashews</h3>
            <span className="en">In-shell · Shelled · Super Jumbo</span>
          </div>
          {charcoalCashews.map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}
        </div>

        {/* OTHER NUTS & SEEDS */}
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">ถั่วและเมล็ด · Other Nuts &amp; Seeds</div>
            <h2>
              นำเข้าคัดเกรด
              <br />
              คั่วใหม่ทุกล็อต
            </h2>
            <div className="en">Imported · Roasted in small batches</div>
          </div>
          <p className="lede">
            อัลมอนด์อเมริกา แมคคาเดเมียออสเตรเลีย พิตาชิโออเมริกา และเม็ดฟักทอง —
            อบเกลือหรือไม่ใส่เกลือก็ได้ทุกชนิด
          </p>
        </header>

        <div className="product-grid">
          {otherNuts.map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}
        </div>

        {/* SHRIMP PASTE */}
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">ของฝากเมืองระนอง · Ranong Speciality</div>
            <h2>
              กะปิระนอง
              <br />
              เคยล้วน · หวาน
            </h2>
            <div className="en">Shrimp paste · Two recipes</div>
          </div>
          <p className="lede">
            กะปิคัดจากเรือประมงระนอง · ตำสด หมักได้ที่ เป็นของฝากที่ลูกค้าประจำขอซื้อทุกครั้ง
          </p>
        </header>

        <div className="shrimp-row">
          {shrimpPastes.map((s) => (
            <div className="shrimp-card" key={s.id}>
              <div className="photo">
                <ImageSlot placeholder={s.placeholder} src={s.image} alt={s.nameEn} />
              </div>
              <div>
                <h3 className="name-th">{s.nameTh}</h3>
                <div className="name-en">{s.nameEn}</div>
                <div className="row">
                  <span className="size">{s.size}</span>
                  <span className="price">
                    {s.price}
                    <small>{s.unit}</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE */}
      <section className="heritage" id="heritage">
        <div className="container">
          <div className="heritage-grid">
            <div className="heritage-year">
              2524
              <sub>Founded · 1981</sub>
            </div>
            <div>
              <div className="eyebrow">เรื่องราวของเรา · The Story</div>
              <h3>คั่วทีละกระทะ มาตั้งแต่ปู่</h3>
              <div className="heritage-en-title">
                Roasted by Hand, Since Grandfather&rsquo;s Day
              </div>
              <p>
                ร้านมานะชัยเริ่มต้นจากเตาถ่านหน้าบ้านในระนอง เมื่อปี 2524 ผ่านมาสามรุ่น
                วันนี้เตาใหญ่ขึ้น ล็อตคั่วมากขึ้น แต่มือที่คัดเม็ดยังเป็นมือคนในครอบครัวเหมือนเดิม
                และสูตรที่ปรุงก็ยังเป็นสูตรของปู่ไม่เปลี่ยน
              </p>
              <p className="heritage-en-body">
                Manachai began with a charcoal stove outside our home in Ranong,
                back in 1981. Three generations on, the stove is bigger and the
                batches larger — but every nut is still sorted by family hands,
                and the recipe is still grandfather&rsquo;s, unchanged.
              </p>
              <blockquote className="heritage-quote">
                <p className="q-th">&ldquo;อร่อยเหมือนเดิมทุกครั้ง&rdquo;</p>
                <cite className="q-cite">
                  &ldquo;Tastes exactly like they remembered&rdquo; ·
                  คำที่ลูกค้าบอกเราทุกครั้ง
                </cite>
              </blockquote>
            </div>
            <div className="heritage-photo">
              <ImageSlot
                placeholder="ภาพร้านยุคแรก · Vintage shop photo"
                src="/images/cashew-tree.jpg"
                alt="ต้นกาหยู ระนอง · Cashew tree in Ranong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* CONTACT */}
      <section className="contact-block" id="contact">
        <div className="container">
          <header className="contact-head">
            <div className="eyebrow">มาเจอกัน · Visit the Shop</div>
            <h2>
              ร้านมานะชัย
              <br />
              ระนอง · เพชรเกษม
            </h2>
            <p className="lede">
              แวะมาเลือกถุงที่ใช่ที่หน้าร้าน หรือสั่งจากไลน์ ส่งทั่วประเทศ ·
              คาเฟ่มานะซังอยู่ติดกัน
            </p>
          </header>

          <div className="contact-cards">
            <article className="contact-shop" data-shop="nuts">
              <div className="contact-shop-head">
                <Image src="/assets/logo-manachai.jpg" alt="" width={56} height={56} className="shop-mark" />
                <div>
                  <div className="shop-name-th">มานะชัย · กาหยู ระนอง</div>
                  <div className="shop-name-en">Manachai Cashews · The Shop</div>
                </div>
              </div>
              <ul className="contact-list">
                <li>
                  <div className="label">ที่อยู่ · Address</div>
                  <div className="value">
                    <strong>145/2 หมู่ 4 ถ.เพชรเกษม</strong>
                    <br />
                    ต.บางนอน อ.เมือง จ.ระนอง 85000
                    <span className="en">145/2 Moo 4, Phetkasem Rd, Mueang Ranong</span>
                  </div>
                </li>
                <li>
                  <div className="label">เวลาเปิด · Hours</div>
                  <div className="value">
                    <strong>ทุกวัน · 08:00 – 18:00</strong>
                    <span className="en">Open daily</span>
                    <OpenStatus variant="shop" />
                  </div>
                </li>
                <li>
                  <div className="label">โทร · Phone</div>
                  <div className="value">
                    <a href="tel:0626549893">
                      <strong>062-654-9893</strong>
                    </a>
                    <span className="en">สั่งสินค้า · จัดส่งทั่วประเทศ</span>
                  </div>
                </li>
                <li>
                  <div className="label">ติดตามเรา · Follow</div>
                  <div className="value">
                    <a
                      href="https://line.me/ti/p/%40manachai"
                      target="_blank"
                      rel="noopener"
                    >
                      <strong>LINE @manachai</strong>
                    </a>
                    <br />
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener">
                      <strong>Facebook · Manachai</strong>
                    </a>
                  </div>
                </li>
              </ul>
              <a
                className="btn btn-primary contact-map-btn"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener"
              >
                เปิดใน Google Maps →
              </a>
            </article>

            <article className="contact-cert">
              <div className="cert-head">
                <div className="cert-title-th">มาตรฐานการผลิต · Certified Quality</div>
                <div className="cert-title-en">
                  Ranong Smart Auto Co., Ltd. · โรงงานมานะชัย
                </div>
              </div>
              <a
                className="cert-thumb"
                href="/images/certificate.jpg"
                target="_blank"
                rel="noopener"
                aria-label="เปิดดูใบรับรองเต็ม · View full certificate"
              >
                <Image
                  src="/images/certificate.jpg"
                  alt="ใบรับรองมาตรฐานและข้อมูลโรงงานมานะชัย · Manachai factory profile and certification"
                  width={1074}
                  height={1524}
                  sizes="(max-width: 600px) 90vw, 320px"
                />
                <span className="cert-zoom">ดูใบรับรองเต็ม · View full →</span>
              </a>
              <p className="cert-note">
                โรงงานผลิตกว่า 45 ปี · กำลังผลิต 36,000 กก./ปี · รับรองมาตรฐาน อย. และ OTOP
                <span className="en">
                  Over 45 years · 36,000 kg/year capacity · Thai FDA &amp; OTOP certified
                </span>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand">© Manachai Cashews · Ranong · 2524–2568</div>
            <div className="footer-links">
              <a href="#">หน้าแรก</a>
              <a href="#products">สินค้า</a>
              <a href="#heritage">เรื่องราว</a>
              <a href="#contact">ติดต่อ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
