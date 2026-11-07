// ============================================================
//  YOUR AMAZON ASSOCIATES TAG — change this one line.
//  Sign up at https://affiliate.amazon.co.jp/ and you get a
//  tag like "yourname-22". Put it here and every button on
//  the site earns you commission automatically.
// ============================================================
const AFFILIATE_TAG = "silverflash-22";

// ============================================================
//  YOUR PRODUCTS — add / remove / edit freely.
//  link:  paste the product link from Amazon (the /dp/... part
//         is enough). The tag above is added automatically.
//  img:   the real product photo. If it ever fails to load,
//         the card falls back to the emoji automatically.
//  note:  write it like you'd tell a friend. Short and honest
//         beats salesy, every time.
// ============================================================
const PRODUCTS = [
  {
    name: "lilyeve Grow Turn Exosome Brush Ampoule (100ml)",
    emoji: "🧴",
    img: "https://gd.image-qoo10.jp/ai/983/945/7890945983_02.g_600-w-st_g.jpg",
    category: "Hair care",
    note: "A Korean scalp ampoule with a brush built into the tip, so it goes straight onto the scalp without getting your hands messy. Non-sticky, no fragrance, with biotin, caffeine and peptides.",
    link: "https://link.amazon/B06hhxh1G",
    tag: "hair care"
  },
  {
    name: "Hatomugi Gel — naturie Skin Conditioning Gel (180g)",
    emoji: "🫙",
    img: "https://images.amazon.com/images/P/B01BSJ5ZSI.01._SCLZZZZZZZ_.jpg",
    category: "Skin care",
    note: "Leaves my face feeling smooth, with no sticky feeling afterwards — and it's genuinely cheap for such a big 180g tub. No fragrance, no colouring, alcohol-free, so it suits sensitive skin too. One of those rare products that is both affordable and actually good.",
    link: "https://link.amazon/B0iBOe1PD",
    tag: "skin care"
  },
  {
    name: "YOLU Calm Night Repair Shampoo (refill)",
    emoji: "🫧",
    img: "https://images.amazon.com/images/P/B0DT9PMWP7.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "The scent genuinely lasts — two, even three days after washing, my hair still smells of neroli and peony. It's a night-care shampoo that repairs damage while you sleep, and the refill pouch is cheaper and uses less plastic.",
    link: "https://link.amazon/B09joeMbI",
    tag: "hair care"
  },
  {
    name: "YOLU Calm Night Repair Treatment (refill)",
    emoji: "🌙",
    img: "https://images.amazon.com/images/P/B0DT9NB14Q.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "After using this, my hair feels fluffy and smooth — soft, never weighed down. It's the matching treatment for the YOLU shampoo: repair overnight, wake up with hair that's easy to run your fingers through.",
    link: "https://link.amazon/B0b1DbU5x",
    tag: "hair care"
  },
  {
    name: "Anker Nano Charger (70W, 3 Ports)",
    emoji: "⚡",
    img: "https://m.media-amazon.com/images/I/61ty6FitB2L._AC_SL1500_.jpg",
    category: "Charging",
    note: "I run my iPad and iPhone on this at the same time, and it still handles my Apple Watch on top — all three charging together, and it works perfectly. One small charger that covers everything I carry.",
    link: "https://link.amazon/B02oyGkzJ",
    tag: "desk"
  },
  {
    name: "Anker Zolo USB-C Cable (braided)",
    emoji: "🔋",
    img: "https://m.media-amazon.com/images/I/61IudO-rzGL._AC_SL1500_.jpg",
    category: "Charging",
    note: "Cheap cables kept fraying on me. This braided one has survived being yanked out of my bag every day for months. Buy two, thank yourself later.",
    link: "https://www.amazon.co.jp/s?k=Anker+Zolo+USB-C+cable",

    tag: "daily carry"
  },
  {
    name: "USB-C Charger for Apple Watch / iPhone",
    emoji: "⌚",
    img: "https://product.hstatic.net/1000379731/product/apple_watch_magnetic_charger_to_usb_c_cable_0_3_m_8ea14997068949c9b0e9ce5a1ea8bb3c_grande.jpg",
    category: "Charging",
    note: "If you're in the Apple ecosystem, one magnetic puck at your desk ends the cable mess. Simple thing, but my desk finally looks clean.",
    link: "https://www.amazon.co.jp/s?k=Apple+Watch+charger+USB-C",
    tag: "desk"
  },
  {
    name: "Kirin Labelless Natural Water (2L × 9)",
    emoji: "💧",
    img: "https://images.amazon.com/images/P/B0BXLKNTJL.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "No labels to peel off before recycling, and a case shows up at the door. In Japan that small laziness adds up — I reorder this constantly.",
    link: "https://link.amazon/B01BrpzdJ",
    tag: "reorder"
  },
  {
    name: "By Amazon Blended Rice (5kg)",
    emoji: "🍚",
    img: "https://images.amazon.com/images/P/B0GFHVZYH7.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "Decent everyday rice at a fair price, delivered. Nothing fancy — that's the point. It's a staple, it should be boring and reliable.",
    link: "https://link.amazon/B08go2oxm",
    tag: "reorder"
  }];
