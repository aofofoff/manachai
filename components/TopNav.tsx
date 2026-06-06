type Tab = "nuts" | "cafe";

export function TopNav({
  active,
  onTab,
}: {
  active: Tab;
  onTab: (t: Tab) => void;
}) {
  return (
    <nav className="top-nav">
      <div className="brand-mark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-manachai.jpg" alt="Manachai" className="brand-logo" />
        <span>มานะชัย · MANACHAI · est 2524</span>
      </div>

      <div className="tabs" role="tablist" aria-label="หน้าร้าน">
        <button
          className="tab"
          role="tab"
          data-tab="nuts"
          aria-selected={active === "nuts"}
          onClick={() => onTab("nuts")}
        >
          <span className="th">🥜 มานะชัย</span>
          <span className="en">Cashew Shop</span>
        </button>
        <button
          className="tab"
          role="tab"
          data-tab="cafe"
          aria-selected={active === "cafe"}
          onClick={() => onTab("cafe")}
        >
          <span className="th">☕</span>
          <span className="en">Cafe mana·san</span>
        </button>
      </div>

      <div className="nav-end">
        <a href="tel:0626549893">062-654-9893</a>
        <span aria-hidden="true">·</span>
        <a href="#">LINE @manachai</a>
      </div>
    </nav>
  );
}
