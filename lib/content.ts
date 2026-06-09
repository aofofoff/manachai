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

export type MenuItem = {
  name: string;
  en: string;
  desc: string;
  star?: boolean;
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

export type MenuKey = "gelato" | "pastry" | "drinks";

export const menuTabs: { key: MenuKey; th: string; en: string }[] = [
  { key: "gelato", th: "เจลาโต้", en: "Gelato" },
  { key: "pastry", th: "เพสตรี้", en: "Pastry & Bakes" },
  { key: "drinks", th: "เครื่องดื่ม", en: "Drinks" },
];

export const menu: Record<MenuKey, MenuItem[]> = {
  gelato: [
    { star: true, name: "Cashew Gelato", en: "Signature · Roasted Cashew", desc: "ซิกเนเจอร์ของร้าน เจลาโต้เม็ดมะม่วงหิมพานต์คั่วเอง หอมเข้มข้น" },
    { name: "วานิลลา มาดากัสการ์", en: "Madagascar Vanilla", desc: "วานิลลาเกรดพรีเมียม กลิ่นหอมเด่นชัด" },
    { name: "ดาร์ก ช็อกโกแลต", en: "Dark Chocolate · 70%", desc: "โกโก้เข้มข้น 70% สำหรับคนชอบช็อกโกแลตแท้" },
    { name: "พิตาชิโอ", en: "Pistachio", desc: "พิตาชิโอบดละเอียด หวานน้อยตามตำรับอิตาลี" },
    { name: "สตรอว์เบอร์รี่", en: "Strawberry Sorbet", desc: "สตรอว์เบอร์รี่สด ไม่ใส่นม สดชื่น" },
    { name: "มะพร้าวอ่อน", en: "Young Coconut", desc: "มะพร้าวอ่อนแท้ หอมหวานธรรมชาติ" },
    { name: "ชาไทย", en: "Thai Tea Gelato", desc: "ชาไทยเข้มข้น เจลาโต้หอมกลิ่นบ้าน" },
    { name: "มะม่วง", en: "Mango Sorbet · Seasonal", desc: "มะม่วงน้ำดอกไม้ตามฤดูกาล" },
  ],
  pastry: [
    { star: true, name: "โทสต์เม็ดมะม่วงหิมพานต์บัตเตอร์", en: "Cashew-Butter Toast · Signature", desc: "ขนมปังย่างเนย เม็ดมะม่วงหิมพานต์บัตเตอร์โฮมเมด น้ำผึ้งระนอง" },
    { name: "ครัวซองต์เนยฝรั่งเศส", en: "Butter Croissant", desc: "เนยฝรั่งเศสแท้ อบสดทุกเช้า" },
    { name: "เปนโอช็อก", en: "Pain au Chocolat", desc: "ครัวซองต์ไส้ช็อกโกแลตเข้มข้น" },
    { name: "บราวนี่เม็ดมะม่วงหิมพานต์", en: "Cashew Brownie", desc: "ช็อกโกแลตเข้ม ท็อปเม็ดมะม่วงหิมพานต์คั่วเกลือ" },
    { name: "ชีสเค้กหน้าไหม้", en: "Burnt Basque Cheesecake", desc: "หน้าไหม้คลาสสิก ครีมเนียนละมุน" },
    { name: "คุกกี้เม็ดมะม่วงหิมพานต์", en: "Cashew Cookies", desc: "อบสดทุกเช้า กรอบนอกนุ่มใน" },
    { name: "ทาร์ตผลไม้", en: "Seasonal Fruit Tart", desc: "คัสตาร์ดวานิลลา ผลไม้สดประจำฤดู" },
    { name: "มาดเดอลีน", en: "Madeleine · Honey & Lemon", desc: "อบในแม่พิมพ์เปลือกหอย หอมเลม่อน" },
  ],
  drinks: [
    { star: true, name: "เม็ดมะม่วงหิมพานต์ลาเต้", en: "Cashew Latte · Signature", desc: "ลาเต้กลิ่นเม็ดมะม่วงหิมพานต์คั่ว สูตรของมานะซัง" },
    { name: "เอสเปรสโซ่", en: "Espresso · Single / Double", desc: "เมล็ดกาแฟ specialty คั่วในไทย" },
    { name: "อเมริกาโน่", en: "Americano · Hot / Iced", desc: "ช็อตคู่ ผสมน้ำกรอง ดื่มง่ายทุกเวลา" },
    { name: "ลาเต้", en: "Latte · Hot / Iced", desc: "นมสตีมเนียนละมุน หอมกาแฟกำลังดี" },
    { name: "มัทฉะลาเต้", en: "Matcha Latte", desc: "ผงมัทฉะญี่ปุ่น นมสด" },
    { name: "ชาไทย", en: "Thai Milk Tea", desc: "ชาไทยหอมเข้ม นมจืดเย็น" },
    { name: "ชามะนาว", en: "Lemon Tea · Iced", desc: "เย็นชื่นใจ เปรี้ยวหวานกำลังดี" },
    { name: "โกโก้", en: "Cocoa · Hot / Iced", desc: "โกโก้แท้ หอมเข้มข้น" },
    { name: "น้ำผลไม้ปั่น", en: "Fresh Fruit Smoothie", desc: "ผลไม้สดประจำฤดูกาล ไม่ใส่น้ำตาล" },
  ],
};
