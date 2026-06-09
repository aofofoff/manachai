"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();
  const onCafe = pathname.startsWith("/cafe");

  return (
    <nav className="top-nav" aria-label="แถบนำทางหลัก · Main">
      <div className="brand-mark">
        <Image
          src="/assets/logo-manachai.jpg"
          alt="Manachai"
          width={34}
          height={34}
          className="brand-logo"
        />
        <span>มานะชัย · MANACHAI · est 2524</span>
      </div>

      <div className="tabs" role="group" aria-label="เลือกหน้าร้าน · Choose shop">
        <Link
          className="tab"
          href="/"
          aria-current={!onCafe ? "page" : undefined}
        >
          <span className="th">🥜 มานะชัย</span>
          <span className="en">Cashew Shop</span>
        </Link>
        <Link
          className="tab"
          href="/cafe"
          aria-current={onCafe ? "page" : undefined}
        >
          <span className="th">☕</span>
          <span className="en">Cafe mana·san</span>
        </Link>
      </div>

      <div className="nav-end">
        <a href="tel:0626549893">062-654-9893</a>
        <span aria-hidden="true">·</span>
        <a href="https://line.me/ti/p/%40manachai" target="_blank" rel="noopener">
          LINE @manachai
        </a>
      </div>
    </nav>
  );
}
