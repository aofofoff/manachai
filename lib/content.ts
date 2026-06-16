// Site content for Manachai Cashews + Cafe mana·san.
// Prices/text mirror the approved design. Items left as `฿—` / "Price TBD"
// are intentionally unpriced in the source design.

export type Price = { size: string; price: string; featured?: boolean };

export type Product = {
  id: string;
  tag: string;
  amber?: boolean;
  placeholder: string;
  image?: string;
  nameTh: string;
  nameEn: string;
  variants: [string, string];
  prices: Price[];
};

export type PromoSet = {
  id: string;
  badge: string;
  badgeAmber?: boolean;
  placeholder: string;
  image?: string;
  no: string;
  nameTh: string;
  nameEn: string;
  desc: string;
  items: string[];
  price: string; // e.g. "฿—"
};

export type ShrimpPaste = {
  id: string;
  placeholder: string;
  image?: string;
  nameTh: string;
  nameEn: string;
  size: string;
  price: string;
  unit: string;
};

export type DrinkItem = {
  th: string;
  en: string;
  hot?: number;
  iced?: number;
  frappe?: number;
  price?: number; // single price (gelato scoops / desserts / toppings)
  add?: boolean; // render as "+฿" (toppings & cone upgrades)
  star?: boolean;
};

export type MenuSection = {
  title: string;
  variant?: "columns" | "list"; // columns = hot/iced/frappe; list = single price
  items: DrinkItem[];
  note?: string;
};

export const roastedCashews: Product[] = [
  {
    id: "p-salted",
    tag: "Best Seller",
    amber: true,
    placeholder: "เม็ดมะม่วงหิมพานต์อบเกลือ · Salted",
    image: "/images/cashew-salted.jpg",
    nameTh: "เม็ดมะม่วงหิมพานต์อบเกลือ",
    nameEn: "Salted Roasted Cashew",
    variants: ["เนื้อเม็ดขาว", "Hand-roasted"],
    prices: [
      { size: "175g", price: "฿100" },
      { size: "350g", price: "฿180" },
      { size: "500g", price: "฿250", featured: true },
    ],
  },
  {
    id: "p-butter",
    tag: "Signature",
    placeholder: "เม็ดมะม่วงหิมพานต์อบเนย · Butter",
    image: "/images/cashew-butter.jpg",
    nameTh: "เม็ดมะม่วงหิมพานต์อบเนย",
    nameEn: "Butter Roasted Cashew",
    variants: ["หอมเนยกลมกล่อม", "Classic"],
    prices: [
      { size: "175g", price: "฿100" },
      { size: "350g", price: "฿180" },
      { size: "500g", price: "฿250", featured: true },
    ],
  },
  {
    id: "p-riceroast",
    tag: "House Recipe",
    amber: true,
    placeholder: "เม็ดมะม่วงหิมพานต์คั่วข้าว · Rice-Roasted",
    image: "/images/cashew-rice-roasted.jpg",
    nameTh: "เม็ดมะม่วงหิมพานต์คั่วข้าว",
    nameEn: "Rice-Roasted Cashew",
    variants: ["กลิ่นข้าวคั่ว", "Traditional craft"],
    prices: [
      { size: "175g", price: "฿100" },
      { size: "350g", price: "฿180" },
      { size: "500g", price: "฿250", featured: true },
    ],
  },
];

export const charcoalCashews: Product[] = [
  {
    id: "p-roasted-shell",
    tag: "In Shell",
    placeholder: "เม็ดมะม่วงหิมพานต์เผา มีเปลือก · In-shell",
    image: "/images/cashew-roasted-shell.jpg",
    nameTh: "เม็ดมะม่วงหิมพานต์เผา มีเปลือก",
    nameEn: "Charcoal-Roasted · In Shell",
    variants: ["แกะเอง สนุกกว่า", "Whole"],
    prices: [
      { size: "150g", price: "฿90" },
      { size: "300g", price: "฿180" },
      { size: "500g", price: "฿280", featured: true },
    ],
  },
  {
    id: "p-roasted-peeled",
    tag: "Shelled",
    placeholder: "เม็ดมะม่วงหิมพานต์เผา แกะเปลือก · Shelled",
    image: "/images/cashew-roasted-shelled.jpg",
    nameTh: "เม็ดมะม่วงหิมพานต์เผา แกะเปลือก",
    nameEn: "Charcoal-Roasted · Shelled",
    variants: ["พร้อมทาน หอมเข้ม", "Ready"],
    prices: [
      { size: "150g", price: "฿100" },
      { size: "500g", price: "฿290", featured: true },
    ],
  },
  {
    id: "p-superjumbo",
    tag: "Super Jumbo",
    amber: true,
    placeholder: "Super Jumbo · เม็ดใหญ่พิเศษ",
    nameTh: "Super Jumbo คั่วเกลือ",
    nameEn: "Super Jumbo · Salted in-shell",
    variants: ["เม็ดใหญ่พิเศษ", "Flagship grade"],
    prices: [
      { size: "150g", price: "฿90" },
      { size: "300g", price: "฿180" },
      { size: "500g", price: "฿280", featured: true },
    ],
  },
];

export const otherNuts: Product[] = [
  {
    id: "p-almond",
    tag: "USA",
    placeholder: "อัลมอนด์ · Almond",
    image: "/images/almond.JPG",
    nameTh: "อัลมอนด์ อเมริกา",
    nameEn: "American Almond · Salted / Unsalted",
    variants: ["อบเกลือ", "อบจืด"],
    prices: [
      { size: "240g", price: "฿120" },
      { size: "500g", price: "฿240", featured: true },
    ],
  },
  {
    id: "p-pumpkin",
    tag: "Thai",
    placeholder: "เม็ดฟักทอง · Pumpkin Seed",
    image: "/images/pumpkin-seed.jpg",
    nameTh: "เม็ดฟักทองอบ",
    nameEn: "Roasted Pumpkin Seed · Salted / Unsalted",
    variants: ["อบเกลือ", "อบจืด"],
    prices: [
      { size: "240g", price: "฿100" },
      { size: "500g", price: "฿200", featured: true },
    ],
  },
  {
    id: "p-macadamia",
    tag: "AUS",
    amber: true,
    placeholder: "แมคคาเดเมีย · Macadamia",
    image: "/images/macadamia.jpg",
    nameTh: "แมคคาเดเมีย ออสเตรเลีย",
    nameEn: "Australian Macadamia · Salted / Unsalted",
    variants: ["บรรจุกระปุก", "Premium grade"],
    prices: [{ size: "195g · กระปุก", price: "฿220", featured: true }],
  },
  {
    id: "p-pistachio",
    tag: "USA",
    placeholder: "พิตาชิโอ · Pistachio",
    image: "/images/pistachio.jpg",
    nameTh: "พิตาชิโอ มีเปลือก",
    nameEn: "In-Shell Pistachio · Salted / Unsalted",
    variants: ["อเมริกา", "อบเกลือ / อบจืด"],
    prices: [
      { size: "240g", price: "฿150" },
      { size: "500g", price: "฿300", featured: true },
    ],
  },
];

export const shrimpPastes: ShrimpPaste[] = [
  {
    id: "p-shrimp-pure",
    placeholder: "กะปิเคยล้วน",
    image: "/images/shrimp-paste-pure.jpg",
    nameTh: "กะปิเคยล้วน",
    nameEn: "Pure Shrimp Paste",
    size: "500g",
    price: "฿80",
    unit: "/กระปุก",
  },
  {
    id: "p-shrimp-sweet",
    placeholder: "กะปิหวาน",
    image: "/images/shrimp-paste-sweet.jpg",
    nameTh: "กะปิหวาน",
    nameEn: "Sweet Shrimp Paste",
    size: "500g",
    price: "฿100",
    unit: "/กระปุก",
  },
];

export const promoSets: PromoSet[] = [
  {
    id: "set-gift",
    badge: "ของฝาก · Gift",
    placeholder: "ภาพเซ็ตของฝาก · Gift set photo",
    image: "/images/set-gift.jpg",
    no: "เซ็ตที่ 1",
    nameTh: "เซ็ตของฝากระนอง",
    nameEn: "Ranong Gift Set",
    desc: "รวมกาหยูคั่วและกะปิขึ้นชื่อของระนอง เหมาะเป็นของฝากจากทริป บรรจุในถุงสวยพร้อมส่ง",
    items: [
      "เม็ดมะม่วงหิมพานต์อบเกลือ 175g",
      "เม็ดมะม่วงหิมพานต์อบเนย 175g",
      "กะปิเคยล้วน 500g",
      "กะปิหวาน 500g",
    ],
    price: "฿—",
  },
  {
    id: "set-mixed",
    badge: "Premium",
    badgeAmber: true,
    placeholder: "ภาพเซ็ตถั่วรวม · Mixed nut set",
    image: "/images/set-mixed.jpg",
    no: "เซ็ตที่ 2",
    nameTh: "เซ็ตถั่วรวมพรีเมียม",
    nameEn: "Premium Mixed Nut Set",
    desc: "รวบรวมถั่วพรีเมียมนำเข้าจากสามประเทศ ครบรสในกล่องเดียว เหมาะสำหรับสายรักสุขภาพและของขวัญ",
    items: [
      "อัลมอนด์ อเมริกา 240g",
      "พิตาชิโอ อเมริกา 240g",
      "แมคคาเดเมีย ออสเตรเลีย 195g",
      "เม็ดฟักทอง 240g",
    ],
    price: "฿—",
  },
];

// Cafe atmosphere gallery — showcase photos, not tied to individual menu items.
export const cafeGallery: { src: string; alt: string }[] = [
  { src: "/images/cafe/ice-cream-box.JPG", alt: "ตู้เจลาโต้หลากรส · Gelato counter" },
  { src: "/images/cafe/ice-cream3.JPG", alt: "เจลาโต้โฮมเมด · Homemade gelato" },
  { src: "/images/cafe/ice-cream4.JPG", alt: "เจลาโต้สกู๊ป · Gelato scoop" },
  { src: "/images/cafe/ice-cream-mix2.JPG", alt: "เจลาโต้หลากรส · Gelato flavours" },
  { src: "/images/cafe/ice-cream5.JPG", alt: "เจลาโต้โฮมเมด · Homemade gelato" },
  { src: "/images/cafe/ice-cream6.JPG", alt: "เจลาโต้สกู๊ป · Gelato scoop" },
  { src: "/images/cafe/ice-cream-mix3.JPG", alt: "เจลาโต้หลากรส · Gelato flavours" },
  { src: "/images/cafe/ice-cream2.JPG", alt: "เจลาโต้คั่วใหม่ · Fresh gelato" },
  { src: "/images/cafe/aecarre.JPG", alt: "ชูครีมหน้ากรอบ · Choux au craquelin" },
  { src: "/images/cafe/cake1.JPG", alt: "เค้กโฮมเมด · Homemade cake" },
  { src: "/images/cafe/matcha.JPG", alt: "มัทฉะลาเต้ · Matcha latte" },
  { src: "/images/cafe/drink1.JPG", alt: "เครื่องดื่มของร้าน · House drink" },
];

// Gelato flavours confirmed from the shop's display case (more rotate seasonally).
export const gelatoFlavours: { en: string; th: string; star?: boolean }[] = [
  { en: "Cashew", th: "เม็ดมะม่วงหิมพานต์", star: true },
  { en: "Coffee Almond", th: "กาแฟอัลมอนด์" },
  { en: "Matcha", th: "มัทฉะ" },
  { en: "Mixberry", th: "มิกซ์เบอร์รี่" },
];

export type MenuKey = "coffee" | "tea" | "soda" | "sweets";

export const menuTabs: { key: MenuKey; th: string; en: string }[] = [
  { key: "sweets", th: "เจลาโต้", en: "Gelato & Dessert" },
  { key: "coffee", th: "กาแฟ & พิเศษ", en: "Coffee & Special" },
  { key: "tea", th: "ชา & โกโก้", en: "Tea & Cocoa" },
  { key: "soda", th: "โซดา & สมูทตี้", en: "Soda & Smoothies" },
];

// Prices in baht per serving: hot / iced / frappe (ปั่น). Omit a field where
// that serving isn't offered. From the in-store menu board.
export const cafeMenu: Record<MenuKey, MenuSection[]> = {
  coffee: [
    {
      title: "กาแฟ · Coffee",
      items: [
        { th: "เอสเพรสโซ่", en: "Espresso", hot: 50, iced: 65, frappe: 75 },
        { th: "อเมริกาโน่", en: "Americano", hot: 50, iced: 65 },
        { th: "คาปูชิโน่", en: "Cappuccino", hot: 60, iced: 70, frappe: 80 },
        { th: "ลาเต้", en: "Latte", hot: 60, iced: 70, frappe: 80 },
        { th: "มอคค่า", en: "Mocha", hot: 65, iced: 75, frappe: 85 },
        { th: "ยูซุคอฟฟี่", en: "Yuzu Coffee", iced: 75 },
      ],
    },
    {
      title: "เมนูพิเศษ · Special Menu",
      items: [
        { th: "กาหยูคาราเมลมัคคิอาโต้", en: "Kayuu Caramel Macchiato", iced: 90, star: true },
        { th: "ดับเบิลดาร์กช็อกโกแลต", en: "Double Dark Chocolate", iced: 90 },
        { th: "ป๊อปปี้มิลค์พีช", en: "Poppy Milk Peach", iced: 90 },
        { th: "ช็อกโกแลตมินต์", en: "Chocolate Mint", iced: 90 },
        { th: "มัทฉะสตรอว์เบอร์รีลาเต้", en: "Matcha Strawberry Latte", iced: 105 },
        { th: "ไวท์ช็อกโกแลตลาเต้", en: "White Chocolate Latte", iced: 90 },
      ],
    },
  ],
  tea: [
    {
      title: "ชา & โกโก้ · Tea & Cocoa",
      items: [
        { th: "ชามะนาว", en: "Lemon Tea", hot: 55, iced: 60 },
        { th: "ชาพีช", en: "Peach Tea", hot: 55, iced: 60 },
        { th: "นมสดคาราเมล", en: "Caramel Milk", hot: 55, iced: 65, frappe: 75 },
        { th: "นมสดโอริโอ้", en: "Oreo Milk", frappe: 70 },
        { th: "ชาไทยนม", en: "Thai Tea", hot: 55, iced: 65, frappe: 75 },
        { th: "ชาเขียวนม", en: "Green Tea", hot: 55, iced: 65, frappe: 75 },
        { th: "พรีเมียมคาคาว (โกโก้)", en: "Premium Cacao", hot: 70, iced: 80, frappe: 80 },
        { th: "มัทฉะลาเต้", en: "Matcha Latte", hot: 75, iced: 90, frappe: 105, star: true },
        { th: "โฮจิฉะลาเต้", en: "Hojicha Latte", hot: 75, iced: 90, frappe: 105 },
        { th: "ชาร้อนพรีเมียม", en: "Premium Tea", hot: 45 },
      ],
    },
  ],
  soda: [
    {
      title: "อิตาเลียนโซดา · Italian Soda",
      items: [
        { th: "สตรอว์เบอร์รี่โซดา", en: "Strawberry Soda", iced: 55, frappe: 65 },
        { th: "บลูเบอร์รี่โซดา", en: "Blueberry Soda", iced: 55, frappe: 65 },
        { th: "เลมอนโซดา", en: "Lemon Soda", iced: 55, frappe: 65 },
        { th: "บลูฮาวายโซดา", en: "Blue Hawaii Soda", iced: 55, frappe: 65 },
        { th: "น้ำผึ้งมะนาวโซดา", en: "Honey Lemon Soda", iced: 60, frappe: 70 },
        { th: "ยูซุโซดา", en: "Yuzu Soda", iced: 60, frappe: 70 },
        { th: "ลิ้นจี่โซดา", en: "Lychee Soda", iced: 55, frappe: 65 },
      ],
    },
    {
      title: "ผลไม้ปั่น · Fruit Smoothies",
      items: [
        { th: "สตรอว์เบอร์รี่", en: "Strawberry", frappe: 69 },
        { th: "บลูเบอร์รี่", en: "Blueberry", frappe: 69 },
        { th: "มิกซ์เบอร์รี่", en: "Mixberry", frappe: 69 },
        { th: "สตรอว์เบอร์รี่โยเกิร์ต", en: "Strawberry Yogurt", frappe: 89 },
        { th: "บลูเบอร์รี่โยเกิร์ต", en: "Blueberry Yogurt", frappe: 89 },
        { th: "มิกซ์เบอร์รี่โยเกิร์ต", en: "Mixberry Yogurt", frappe: 89 },
      ],
    },
  ],
  sweets: [
    {
      title: "สกู๊ป · Scoops (ถ้วยหรือโคน · Cup or Cone)",
      variant: "list",
      items: [
        { th: "1 สกู๊ป", en: "1 Scoop", price: 59 },
        { th: "2 สกู๊ป", en: "2 Scoops", price: 99 },
        { th: "3 สกู๊ป", en: "3 Scoops", price: 139 },
        { th: "1 ไพนต์ (16oz)", en: "1 Pint · 16oz", price: 229 },
      ],
    },
    {
      title: "เมนูพิเศษ · Special Menu",
      variant: "list",
      items: [
        { th: "ครอฟเฟิล อัลมอนด์ คาราเมล", en: "Croffle Almond Caramel", price: 99, star: true },
        { th: "ช็อคโกแลตลาวา", en: "Chocolate Lava", price: 129 },
      ],
    },
    {
      title: "เค้ก · Cakes",
      items: [],
      note: "เค้กโฮมเมดหมุนเวียนที่หน้าร้าน สอบถามเมนูและราคาได้ที่เคาน์เตอร์หรือทาง LINE · Homemade cakes rotate at the counter — ask in store or on LINE.",
    },
    {
      title: "ท็อปปิ้ง & โคน · Toppings & Cones",
      variant: "list",
      items: [
        { th: "คาราเมลซอส", en: "Caramel sauce", price: 10, add: true },
        { th: "ช็อกโกแลตซอส", en: "Chocolate sauce", price: 10, add: true },
        { th: "โอริโอ", en: "Oreo", price: 5, add: true },
        { th: "เรนโบว์", en: "Rainbow", price: 5, add: true },
        { th: "อัลมอนด์", en: "Almond", price: 10, add: true },
        { th: "เม็ดมะม่วงหิมพานต์", en: "Cashew nut", price: 10, add: true },
        { th: "บราวนี่", en: "Brownie", price: 10, add: true },
        { th: "วิปปิ้งครีม", en: "Whipping cream", price: 10, add: true },
        { th: "วาฟเฟิลโคน / โบว์ล", en: "Waffle cone / bowl", price: 10, add: true },
        { th: "โคนเด็ก", en: "Kids cone", price: 5, add: true },
      ],
    },
  ],
};

export const cafeToppings: { th: string; en: string; price: number }[] = [
  { th: "วิปครีม", en: "Whipping cream", price: 10 },
  { th: "เม็ดป็อป", en: "Pop juice", price: 15 },
  { th: "ช็อตกาแฟ", en: "Coffee shot", price: 15 },
];
