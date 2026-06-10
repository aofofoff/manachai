"use client";

import { useState } from "react";
import Image from "next/image";
import { menu, menuTabs, type MenuKey } from "@/lib/content";
import { FACEBOOK_URL, GOOGLE_MAPS_URL } from "@/lib/links";
import { ImageSlot } from "./ImageSlot";

export function Cafe() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("gelato");

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
              <div className="cafe-subtag">Gelato &amp; Pastry · เจลาโต้ &amp; เพสตรี้</div>
              <p className="intro">
                คาเฟ่เจลาโต้และเพสตรี้สูตรเฉพาะของบ้านมานะชัย เจลาโต้เม็ดมะม่วงหิมพานต์คั่วใหม่ทุกเช้า
                ขนมอบสด เคียงกับกาแฟ specialty ในระยะเดินไม่กี่ก้าวจากร้านเม็ดมะม่วงหิมพานต์ของเรา
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-primary" href="#menu">
                  ดูเมนู · See Menu
                </a>
                <a className="btn btn-ghost-pill" href="#visit">
                  เวลาเปิดร้าน · Visit Us
                </a>
              </div>
            </div>
            <div className="cafe-hero-photo">
              <ImageSlot placeholder="ภาพภายในคาเฟ่ · Cafe interior" />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE — Cashew Gelato */}
      <section className="container">
        <div className="signature">
          <div className="photo">
            <ImageSlot placeholder="ภาพ Cashew Gelato · Signature gelato" />
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
                <div className="num">฿—</div>
                <div className="lbl">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="container" id="menu">
        <header className="section-header">
          <div className="titles">
            <div className="eyebrow">เมนู · The Menu</div>
            <h2>
              เจลาโต้ เพสตรี้
              <br />
              และเครื่องดื่ม
            </h2>
            <div className="en">Gelato · Pastry · Drinks</div>
          </div>
          <p className="lede">
            เจลาโต้ปั่นในร้านทุกเช้า เพสตรี้อบสด และเครื่องดื่มที่จับคู่กับเม็ดมะม่วงหิมพานต์ของเราเสมอ
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
              {menu[t.key].map((item, i) => (
                <div className="menu-item" key={i}>
                  <div className="left">
                    <h4 className="name">
                      {item.star ? (
                        <>
                          <span className="star">★</span> {item.name}
                        </>
                      ) : (
                        item.name
                      )}
                    </h4>
                    <div className="en">{item.en}</div>
                    <div className="desc">{item.desc}</div>
                  </div>
                  <div className="price tbd">Price TBD</div>
                </div>
              ))}
            </div>
          ))}
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
                      <strong>FB manachaicashews</strong>
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
    </>
  );
}
