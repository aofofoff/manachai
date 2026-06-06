import type { Product } from "@/lib/content";
import { ImageSlot } from "./ImageSlot";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="product-card">
      <div className="photo">
        <span className={p.amber ? "tag amber" : "tag"}>{p.tag}</span>
        <ImageSlot placeholder={p.placeholder} />
      </div>
      <div className="info">
        <h3 className="name-th">{p.nameTh}</h3>
        <div className="name-en">{p.nameEn}</div>
        <div className="variants">
          {p.variants[0]} <span className="dot"></span> {p.variants[1]}
        </div>
        <div className="pricelist">
          {p.prices.map((row, i) => (
            <div key={i} className={row.featured ? "row featured" : "row"}>
              <span className="size">{row.size}</span>
              <span className="price">{row.price}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
