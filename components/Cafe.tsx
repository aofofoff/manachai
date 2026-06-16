"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  cafeMenu,
  cafeToppings,
  menuTabs,
  cafeGallery,
  gelatoFlavours,
  type MenuKey,
} from "@/lib/content";
import { LINE_URL, FACEBOOK_URL, GOOGLE_MAPS_URL } from "@/lib/links";
import { ImageSlot } from "./ImageSlot";

export function Cafe() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("sweets");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const showPrev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + cafeGallery.length) % cafeGallery.length
      ),
    []
  );
  const showNext = useCallback(
    () =>
      setLightbox((i) => (i === null ? i : (i + 1) % cafeGallery.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, showPrev, showNext]);

  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (dir: number) => {
    const el = galleryRef.current;
    if (el)
      el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="cafe-hero">
        <div className="container">
          <div className="cafe-hero-grid">
            <div>
              <div className="eyebrow">คาเฟ่ของบ้านมานะชัย · Our Sister Cafe</div>
              <div className="cafe-logo-mark">
                <Image src="/assets/logo-manasan.jpg" alt="Cafe mana·san — Gelato & Pastry" width={168} height={168} />
              </div>
              <h1>
                มานะซัง
                <br />
                คาเฟ่
              </h1>
              <div className="en-title">— Cafe mana·san · マナさん —</div>
              <div className="cafe-subtag">เจลาโต้โฮมเมด · Homemade Gelato</div>
              <p className="intro">
                เจลาโต้โฮมเมดปั่นสดใหม่ทุกวัน หลากหลายรสให้เลือก พร้อมรสซิกเนเจอร์จาก
                เม็ดมะม่วงหิมพานต์คั่วเองของบ้านมานะชัย · เคียงกับเพสตรี้อบสดและกาแฟ specialty
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-primary" href="#gelato">
                  ดูรสเจลาโต้ · See Flavours
                </a>
                <a className="btn btn-ghost-pill" href="#visit">
                  เวลาเปิดร้าน · Visit Us
                </a>
              </div>
            </div>
            <div className="cafe-hero-photo">
              <ImageSlot
                placeholder="ภาพเจลาโต้ · Gelato"
                src="/images/cafe/ice-cream1.JPG"
                alt="เจลาโต้โฮมเมดของมานะซัง · Homemade gelato at Cafe mana·san"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE — Cashew Gelato */}
      <section className="container">
        <div className="signature">
          <div className="photo">
            <ImageSlot
              placeholder="ภาพ Cashew Gelato · Signature gelato"
              src="/images/cafe/cashew-gelato.jpg"
              alt="เจลาโต้รสกาหยู · Signature cashew gelato"
            />
          </div>
          <div>
            <div className="eyebrow">เมนูซิกเนเจอร์ · Signature</div>
            <h2>Cashew Gelato</h2>
            <div className="en">Roasted cashew · cream · a hint of caramel</div>
            <p>
              เจลาโต้ซิกเนเจอร์ของมานะซัง ทำจากเม็ดมะม่วงหิมพานต์คั่วของร้านเราเอง
              ปั่นกับครีมและคาราเมลโฮมเมด รสชาติที่หาที่ไหนไม่ได้ เสิร์ฟพร้อมคุกกี้เม็ดมะม่วงหิมพานต์อบสด
            </p>
            <div className="signature-row">
              <div className="item">
                <div className="num">8+</div>
                <div className="lbl">Gelato flavours rotating</div>
              </div>
              <div className="item">
                <div className="num">1 / 2</div>
                <div className="lbl">Single or double scoop</div>
              </div>
              <div className="item">
                <div className="num">฿89</div>
                <div className="lbl">Signature cup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR GELATO — flavours showcase */}
      <section className="container gelato-showcase" id="gelato">
        <div className="gelato-showcase-grid">
          <div className="gelato-showcase-photo">
            <Image
              src="/images/cafe/ice-cream-mix1.JPG"
              alt="เจลาโต้หลากรสที่ตู้ของมานะซัง · Gelato flavours at the counter"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="gelato-showcase-text">
            <div className="eyebrow">เจลาโต้ของเรา · Our Gelato</div>
            <h2>
              ปั่นสดใหม่ทุกวัน
              <br />
              หลากหลายรสให้เลือก
            </h2>
            <p>
              เจลาโต้โฮมเมดของมานะซัง ปั่นสดใหม่ทุกวันจากวัตถุดิบแท้ มีรสประจำให้เลือกตลอด
              และมีรสพิเศษหมุนเวียนตามฤดูกาล พร้อมรสซิกเนเจอร์ &ldquo;กาหยู&rdquo;
              จากเม็ดมะม่วงหิมพานต์คั่วเองของบ้านมานะชัย
            </p>
            <div className="flavour-tags">
              {gelatoFlavours.map((f) => (
                <span
                  className={f.star ? "flavour-tag flavour-tag--star" : "flavour-tag"}
                  key={f.en}
                >
                  {f.star && "★ "}
                  {f.en} · {f.th}
                </span>
              ))}
              <span className="flavour-tag flavour-tag--more">
                และรสพิเศษตามฤดูกาล · + seasonal flavours
              </span>
            </div>
            <a className="btn btn-primary" href="#menu">
              ดูราคาเจลาโต้ · Gelato Menu
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container cafe-gallery" id="gallery">
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">บรรยากาศร้าน · A Taste of mana·san</div>
            <h2>
              เจลาโต้ เพสตรี้
              <br />
              และกาแฟของเรา
            </h2>
            <div className="en">Gelato · pastry · coffee from the cafe</div>
          </div>
        </header>
        <div className="gallery-carousel">
          <button
            type="button"
            className="carousel-arrow prev"
            onClick={() => scrollGallery(-1)}
            aria-label="เลื่อนซ้าย · Scroll left"
          >
            ‹
          </button>
          <div className="gallery-track" ref={galleryRef}>
            {cafeGallery.map((g, i) => (
              <button
                type="button"
                className="gallery-item"
                key={g.src}
                onClick={() => setLightbox(i)}
                aria-label={`ดูภาพ · View ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 700px) 78vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="carousel-arrow next"
            onClick={() => scrollGallery(1)}
            aria-label="เลื่อนขวา · Scroll right"
          >
            ›
          </button>
        </div>
      </section>

      {/* MENU */}
      <section className="container" id="menu">
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">เมนู · The Menu</div>
            <h2>
              เจลาโต้
              <br />
              และเครื่องดื่ม
            </h2>
            <div className="en">Gelato · Coffee · Tea · Soda</div>
          </div>
          <p className="lede">
            เจลาโต้โฮมเมดและของหวาน เคียงกับกาแฟ specialty ชา โกโก้ โซดา และสมูทตี้ผลไม้ ·
            ราคาต่อที่ (บาท)
          </p>
        </header>

        <div className="menu-section">
          <div className="menu-tabs" role="tablist">
            {menuTabs.map((t) => (
              <button
                key={t.key}
                className="menu-tab"
                role="tab"
                data-menu={t.key}
                aria-selected={activeMenu === t.key}
                onClick={() => setActiveMenu(t.key)}
              >
                <span>{t.th}</span>
                <span className="en">{t.en}</span>
              </button>
            ))}
          </div>

          {menuTabs.map((t) => (
            <div
              key={t.key}
              className="menu-panel"
              data-menu-panel={t.key}
              data-active={activeMenu === t.key}
            >
              {cafeMenu[t.key].map((section, si) => (
                <div className="menu-group" key={si}>
                  <div className="menu-group-head">
                    <h4 className="menu-group-title">{section.title}</h4>
                    {!section.note && section.variant !== "list" && (
                      <div className="menu-price-cols">
                        <span>ร้อน</span>
                        <span>เย็น</span>
                        <span>ปั่น</span>
                      </div>
                    )}
                  </div>

                  {section.note ? (
                    <p className="menu-note">{section.note}</p>
                  ) : section.variant === "list" ? (
                    section.items.map((item, ii) => (
                      <div className="drink-row drink-row--single" key={ii}>
                        <div className="drink-name">
                          <span className="th">
                            {item.star && <span className="star">★</span>}
                            {item.th}
                          </span>
                          <span className="en">{item.en}</span>
                        </div>
                        <div className="single-price">
                          {item.add ? "+" : ""}฿{item.price}
                        </div>
                      </div>
                    ))
                  ) : (
                    section.items.map((item, ii) => (
                      <div className="drink-row" key={ii}>
                        <div className="drink-name">
                          <span className="th">
                            {item.star && <span className="star">★</span>}
                            {item.th}
                          </span>
                          <span className="en">{item.en}</span>
                        </div>
                        <div className="drink-prices">
                          <span>{item.hot ?? "–"}</span>
                          <span>{item.iced ?? "–"}</span>
                          <span>{item.frappe ?? "–"}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          ))}

          {activeMenu !== "sweets" && (
            <div className="menu-toppings">
              <span className="topping-label">ท็อปปิ้งเครื่องดื่ม · Drink Toppings</span>
              {cafeToppings.map((tp, i) => (
                <span className="topping-item" key={i}>
                  {tp.th} · {tp.en} <strong>+฿{tp.price}</strong>
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-block" id="visit">
        <div className="container">
          <header className="contact-head">
            <div className="eyebrow">มาเจอกัน · Visit the Cafe</div>
            <h2>
              คาเฟ่มานะซัง
              <br />
              ระนอง · เพชรเกษม
            </h2>
            <p className="lede">
              แวะมาจิบเจลาโต้และเพสตรี้สดใหม่ทุกเช้า อยู่ติดกับร้านมานะชัย เดินไม่กี่ก้าว
            </p>
          </header>

          <div className="contact-cards">
            <article className="contact-shop" data-shop="cafe">
              <div className="contact-shop-head">
                <Image src="/assets/logo-manasan.jpg" alt="" width={56} height={56} className="shop-mark" />
                <div>
                  <div className="shop-name-th">มานะซัง · Cafe mana·san</div>
                  <div className="shop-name-en">Gelato &amp; Pastry</div>
                </div>
              </div>
              <ul className="contact-list">
                <li>
                  <div className="label">ที่อยู่ · Address</div>
                  <div className="value">
                    <strong>ติดกับร้านมานะชัย · เพชรเกษม</strong>
                    <br />
                    ต.บางนอน อ.เมือง จ.ระนอง 85000
                    <span className="en">Next to Manachai Cashews · Same block</span>
                  </div>
                </li>
                <li>
                  <div className="label">เวลาเปิด · Hours</div>
                  <div className="value">
                    <strong>จ.–พฤ. 08:00–18:00</strong>
                    <br />
                    ศ.–ส. 08:00–19:00 · อา. 08:00–18:00
                    <span className="en">Mon–Thu 8–18 · Fri–Sat 8–19 · Sun 8–18</span>
                  </div>
                </li>
                <li>
                  <div className="label">โทร · Phone</div>
                  <div className="value">
                    <a href="tel:0626549893">
                      <strong>062-654-9893</strong>
                    </a>
                    <span className="en">จองโต๊ะ · สั่งเค้ก · catering</span>
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
                href={LINE_URL}
                target="_blank"
                rel="noopener"
                aria-label="สอบถาม จองโต๊ะ สั่งเค้ก ทางไลน์ · Ask on LINE"
              >
                สอบถาม/จองโต๊ะ ทางไลน์ · Ask on LINE
              </a>
              <a
                className="btn btn-ghost-pill contact-map-btn"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener"
              >
                เปิดใน Google Maps →
              </a>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand">© Cafe mana·san · A Manachai family project · Ranong</div>
            <div className="footer-links">
              <a href="/">หน้าแรก</a>
              <a href="#menu">เมนู</a>
              <a href="#visit">มาเยือน</a>
            </div>
          </div>
        </div>
      </footer>

      {/* GALLERY LIGHTBOX / SLIDESHOW */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="แกลเลอรีคาเฟ่ · Cafe gallery"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={closeLightbox}
            aria-label="ปิด · Close"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="ก่อนหน้า · Previous"
          >
            ‹
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img">
              <Image
                src={cafeGallery[lightbox].src}
                alt={cafeGallery[lightbox].alt}
                fill
                sizes="92vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <figcaption className="lightbox-caption">
              {cafeGallery[lightbox].alt}
              <span className="lightbox-count">
                {lightbox + 1} / {cafeGallery.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="ถัดไป · Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
